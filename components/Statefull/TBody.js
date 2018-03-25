import { Component } from 'react'
import { render } from 'react-dom'
import Datalist from '../Stateless/Datalist'
import Categories from '../../data/Categories'
import {getRequest} from '../../data/APICall'
import Kategorie from '../Stateless/Kategorie'

class TBody extends Component {
    constructor(props) {
        super(props)
        this.feindHoertMit = this.feindHoertMit.bind(this)
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
        this.feindHoertMit()
    }

    feindHoertMit() {
        const { _category, _text } = this.refs
        const current_value = _category.options[_category.selectedIndex].value
        this.setState({ current_array: [...Categories[current_value]] })
        console.log(_text.value)
        getRequest(`AngebotsService/Angebot?angebotstitel=${_text.value}`)
            .then(response => response.json())
            .then(responseJSON => {
                let teil_array = []
                responseJSON.map(element => teil_array.push(element.titel))
                //hier muss die kategorie in der json mit der current categorie abgeglichen werden
                console.log("current array: " + this.state.current_array)
                this.setState({current_array: [...teil_array, ...this.state.current_array]})
                console.log("Antwort: " + JSON.stringify(responseJSON))
                return responseJSON
            })
            .catch(error => console.error(error))
        //API Call
        //this.setstate({current_array=...Categories[this.state.current_category], ...danielsArray]})
    }
    render() {
        return (
            <tr id="react_angebot_suchen">
                <th>
                    <select ref="_category" onChange={() => this.feindHoertMit()}>
                        <option defaultValue value="all">Alle Kategorien</option>
                        <option value="gemuese">Gemüse</option>
                        <option value="getreideprodukte">Getreideprodukte</option>
                        <option value="getraenke">Getränke</option>
                        <option value="fleisch">Fleisch</option>
                        <option value="fisch">Fisch</option>
                        <option value="milchprodukte">Milchprodukte</option>
                        <option value="obst">Obst</option>
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
                    <button id="find">Finden</button>
                </th>
            </tr>
        )
    }
}
module.exports = TBody