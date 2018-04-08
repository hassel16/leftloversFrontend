import { Component } from 'react'
import { render } from 'react-dom'
import Datalist from '../Stateless/Datalist'
import Categories from '../../data/Categories'
import { getRequest } from '../../data/APICall'
import City from '../../data/City'
import Kategorie from '../Stateless/Kategorie'
import { create_div, remove_div } from '../../data/Factory'
import { token, exists } from '../../data/Token'
import Tabelle from '../Stateless/Tabelle'
import Details from '../Statefull/Details'


class TBody extends Component {
    constructor(props) {
        super(props)
        this.feindHoertMit = this.feindHoertMit.bind(this)
        this.checkInput = this.checkInput.bind(this)
        this.state = {
            current_array: [...Categories["all"]],
            daniels_array: [],
            current_category: "all",
            current_city: undefined // ""
        }
    }

    showDetails(ergebnis) {
        if(exists()) {
            console.log(JSON.stringify(ergebnis))
            render(
                <Details ergebnis={ergebnis} />,
                document.getElementById("popup_anker") 
            )
            document.getElementById('light_details').style.display = 'block'
            document.getElementById('fade').style.display = 'block'
        } else {
            alert("du musst dich anmelden, um dieses feature genießen zu können")
        }
    }
    
    componentDidMount() {
        let { _stadt, _text } = this.refs

        const acc = new google.maps.places.Autocomplete(_stadt, {
            //types: ['(cities)'],
            componentRestrictions: { country: 'de' }
        })

        google.maps.event.addListener(acc, 'place_changed', () => {
            const place = acc.getPlace()
            this.setState({ current_city: new City(place, _stadt.value) })
        })
        console.log(sessionStorage.getItem("token"))
        if (exists()) {
            getRequest("UAAService/resolve")
                .then(response => {
                    if (response.status >= 200 || response.status <= 300) {
                        return response.json()
                    } else {
                        return new Error(response.status)
                    }
                })
                .then(responseJSON => {
                    sessionStorage.setItem("user", responseJSON)
                    this.setState({ current_city: responseJSON.city }) //.name_details
                    _stadt.value = this.state.current_city.name_details
                })
        }
        this.feindHoertMit()
    }


    feindHoertMit() {
        const { _category, _text } = this.refs
        const current_value = _category.options[_category.selectedIndex].value

        this.setState({current_category: current_value})
        this.setState({ current_array: [...Categories[current_value]] })

        getRequest(`AngebotsService/Angebot`, `angebotstitel=${_text.value}`)
            .then(response => response.json())
            .then(responseJSON => {
                let teil_array = []
                responseJSON.map(element => {
                    if (current_value === "all" || element.kategorie.titel === current_value || element.kategorie.titel === "Verschiedenes") {
                        return (teil_array.push(element.titel))
                    }
                })

                let distinctArray = [...teil_array, ...this.state.current_array]
                this.setState({ current_array: distinctArray.filter((item, pos) => distinctArray.indexOf(item) == pos) })

                return responseJSON
            })
            .catch(error => console.error(error))

    }
    checkInput() {
        const { _stadt, _text, _radius, _category } = this.refs
        if (this.state.current_city === undefined) {
            create_div(_stadt, "! Wähle einen Standort aus")
        } else {
            remove_div("! Wähle einen Standort aus")
            const titel = (text) => {
                if (text === "" || text === undefined) {
                    return ""
                } else {
                    return `&angebotstitel=${text}`
                }
            }
            const kategorie = (option) => (option === 99)? "": `&kategorieid=${1}`//!!!!!!!!!!
            const rad = `radius=${_radius.options[_radius.selectedIndex].value}`
            const tit = titel(_text.value)
            const kat = kategorie(_category.options[_category.selectedIndex].getAttribute("kategorieid"))
            const {lat, lng, long_name} = this.state.current_city
            const url = `${rad}${tit}${kat}&lat=${lat}&lng=${lng}&long_name=${long_name}`
            console.log(url)
            getRequest("AngebotsService/Angebot", url)//
                .then(response => response.json())
                .then(responseJSON => {
                    let ergebnisArray = []
                    const currentKategorie = this.state.current_category
                    responseJSON.map(element => {
                        if (currentKategorie === "all" || element.kategorie.titel === currentKategorie || element.kategorie.titel === "Verschiedenes") {
                            return (ergebnisArray.push(element))
                        }
                    })
                    console.log("ergebnisArray: " + JSON.stringify(ergebnisArray))
                    return ergebnisArray
                })
                .then(array => {
                    render(
                        <Tabelle ergebnisse={array} loading={false} onDetails={this.showDetails} />,
                        document.getElementById("such_list")
                    ) 
                })



                .catch(error => console.error(error))
        }
    }
    render() {
        return (
            <tr id="react_angebot_suchen">
                <th>
                    <select ref="_category" onChange={() => this.feindHoertMit()}>
                        <option kategorieid={99} defaultValue value="all">Alle Kategorien</option>
                        <option kategorieid={1} value="Gemüse">Gemüse</option>
                        <option kategorieid={4} value="Getreideprodukte">Getreideprodukte</option>
                        <option kategorieid={5} value="Getränke">Getränke</option>
                        <option kategorieid={2} value="Fleisch">Fleisch</option>
                        <option kategorieid={6} value="Fisch">Fisch</option>
                        <option kategorieid={7} value="Milchprodukte">Milchprodukte</option>
                        <option kategorieid={8} value="Obst">Obst</option>
                    </select>
                    {/* {<Kategorie />} */}
                </th>
                <th>
                    <input placeholder="Was suchst du?" ref="_text" type="text" id="angebot_suchen" list="elements" onInput={() => this.feindHoertMit()} />
                    <Datalist id="elements" elementList={this.state.current_array} />
                </th>
                <th>
                    <input ref="_stadt" type="text" /> {/*placeholder="Stadt"*/}
                </th>
                <th>
                    <select ref="_radius">
                        <option defaultValue value={0}>Ganze Stadt</option>
                        <option value={2}>2 km</option>
                        <option value={5}>5 km</option>
                        <option value={10}>10 km</option>
                        <option value={20}>20 km</option>
                        <option value={50}>50 km</option>
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