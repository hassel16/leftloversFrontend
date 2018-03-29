import { Component } from 'react'
import { render } from 'react-dom'
import Datalist from '../Stateless/Datalist'
import Categories from '../../data/Categories'
import {getRequest, asyncRequest} from '../../data/APICall'
import Kategorie from '../Stateless/Kategorie'
import {create_div, remove_div} from '../../data/Factory'

class TBody extends Component {
    constructor(props) {
        super(props)
        this.feindHoertMit = this.feindHoertMit.bind(this)
        this.checkInput = this.checkInput.bind(this)
        this.state = {
            current_array: [...Categories["all"]],
            daniels_array: [],
            current_city: "defaultCity" //DB-Call notwendig
        }
    }
    componentDidMount() {
        let {_stadt} = this.refs
        const acc = new google.maps.places.Autocomplete(_stadt, {
            //types: ['(cities)'],
            componentRestrictions: { country: 'de' }
        })
    
        google.maps.event.addListener(acc, 'place_changed', () => {
            const place = acc.getPlace()
            this.setState({current_city:place})
        })
        getRequest("UAAService/resolve")
            .then(response => {
                if (response.status >= 200 || response.status <= 300) {
                    return response.json()
                } else {
                    return new Error(response.status)
                }
            })
            .then(responseJSON => {
                //token an resolve schicken! und in sessiostorage speichern
            })

        this.feindHoertMit()
    }

    feindHoertMit() {
        const { _category, _text } = this.refs
        const current_value = _category.options[_category.selectedIndex].value
        this.setState({ current_array: [...Categories[current_value]] })
        getRequest(`AngebotsService/Angebot?angebotstitel=${_text.value}`)
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
                //console.log("Antwort: " + JSON.stringify(responseJSON))
                return responseJSON
            })
            .catch(error => console.error(error))

        //console.log(asyncRequest().map(element => element.titel))
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
                    <input ref="_text" type="text" placeholder="Was suchst du?" id="angebot_suchen" list="elements" onInput={() => this.feindHoertMit()} />
                    <Datalist id="elements" elementList={this.state.current_array} />
                </th>
                <th>
                    <input ref="_stadt" type="text" placeholder="Stadt" />
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