import { Component } from 'react'
import { render } from 'react-dom'
import Datalist from '../Stateless/Datalist'
import Categories from '../../data/Categories'

class TBody extends Component {
    constructor(props) {
        super(props)
        this.feindHoertMit = this.feindHoertMit.bind(this)
        this.state = {
            /*
            alles: [...Categories["all"]],
            gemuese: [...Categories["gemuese"]],
            getreideprodukte: [...Categories["getreideprodukte"]],
            getraenke: [...Categories["getraenke"]],
            fleisch: [...Categories["fleisch"]],
            fisch: [...Categories["fisch"]],
            milchprodukte: [...Categories["milchprodukte"]],
            obst: [...Categories["obst"]],
            */
            current_array: [...Categories["all"]],
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
    }

    feindHoertMit() {
        const { _category } = this.refs
        const current_value = _category.options[_category.selectedIndex].value
        this.setState({ current_array: [...Categories[current_value]] })
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
                </th>
                <th>
                    <input type="text" placeholder="Was suchst du?" id="angebot_suchen" list="elements" onInput={() => this.feindHoertMit()} />
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