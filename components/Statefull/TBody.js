import { Component } from 'react'
import { render } from 'react-dom'
import Datalist from '../Stateless/Datalist'
import Categories from '../../data/Categories'
import {getRequest, getURL} from '../../data/APICall'
import Kategorie from '../Stateless/Kategorie'
import {create_div, remove_div} from '../../data/Factory'
import {token} from '../../data/Token'

class TBody extends Component {
    constructor(props) {
        super(props)
        this.feindHoertMit = this.feindHoertMit.bind(this)
        this.checkInput = this.checkInput.bind(this)
        this.state = {
            current_array: [...Categories["all"]],
            daniels_array: [],
            current_city: ""
        }
    }
    componentDidMount() {
        let {_stadt, _text} = this.refs

        const acc = new google.maps.places.Autocomplete(_stadt, {
            //types: ['(cities)'],
            componentRestrictions: { country: 'de' }
        })
    
        google.maps.event.addListener(acc, 'place_changed', () => {
            const place = acc.getPlace()
            this.setState({current_city:place})
        })
    
        if (token) {
            fetch(getURL("UAAService/resolve"), {
                headers: new Headers({
                    "Authorization": ` Bearer ${token}`
                })
            })
                .then(response => {
                    if (response.status >= 200 || response.status <= 300) {
                        return response.json()
                    } else {
                        return new Error(response.status)
                    }
                })
                .then(responseJSON => {
                    sessionStorage.setItem("user", responseJSON)
                    this.setState({current_city: responseJSON.city.name_details})
                    _stadt.value = this.state.current_city
                })
        }
        this.feindHoertMit()
    }

    feindHoertMit() {
        const { _category, _text } = this.refs
        const current_value = _category.options[_category.selectedIndex].value
        this.setState({ current_array: [...Categories[current_value]] })
        getRequest(`AngebotsService/Angebot`, `angebotstitel=${_text.value}`)
            .then(response => response.json())
            .then(responseJSON => {
                let teil_array = []
                responseJSON.map(element => {
                    console.log(element.kategorie.titel + " current " + current_value)
                    if (current_value === "all" || element.kategorie.titel === current_value || element.kategorie.titel === "Verschiedenes") {
                        return(teil_array.push(element.titel))
                    }
                })
                //hier muss die kategorie in der json mit der current categorie abgeglichen werden
                console.log("teilarray" + teil_array)
                console.log("current array1: " + this.state.current_array)
                this.setState({current_array: [...teil_array, ...this.state.current_array]})
                console.log("current array2: " + this.state.current_array)

                return responseJSON
            })
            .catch(error => console.error(error))
    }
    checkInput() {
        alert("moin")
        let sauber = true

    }
    render() {
        return (
            <tr id="react_angebot_suchen">
                <th>
                    <select ref="_category" onChange={() => this.feindHoertMit()}>
                        <option defaultValue value="all">Alle Kategorien</option>
                        <option value="Gemüse">Gemüse</option>
                        <option value="Getreideprodukte">Getreideprodukte</option>
                        <option value="Getränke">Getränke</option>
                        <option value="Fleisch">Fleisch</option>
                        <option value="Fisch">Fisch</option>
                        <option value="Milchprodukte">Milchprodukte</option>
                        <option value="Obst">Obst</option>
                    </select>
                    {/* {<Kategorie />} */}
                </th>
                <th>
                    <input placeholder="Was suchst du?" ref="_text" type="text"  id="angebot_suchen" list="elements" onInput={() => this.feindHoertMit()} />
                    <Datalist id="elements" elementList={this.state.current_array} />
                </th>
                <th>
                    <input ref="_stadt" type="text" /> {/*placeholder="Stadt"*/}
                </th>
                <th>
                    <select>
                        <option defaultValue>Ganze Stadt</option>
                        <option>2 km</option>
                        <option>5 km</option>
                        <option>10 km</option>
                        <option>20 km</option>
                        <option>50 km</option>
                    </select>
                </th>
                <th>
                    <button id="find" onClick={() => this.checkInput()}>Finden</button>
                </th>
            </tr>
        )
    }
}
module.exports = TBody