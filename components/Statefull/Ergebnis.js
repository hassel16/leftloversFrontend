import { Component } from 'react'
import { render } from 'react-dom'
import {getRequest} from '../../data/APICall'
import {create_div, remove_div} from "../../data/Factory"
import Tabelle from "../Stateless/Tabelle"

class Ergebnis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ergebnisse: []
        }
    }
    componentDidMount() {
        getRequest("AngebotsService/Angebot")
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                console.log(JSON.stringify(responseJson))
                this.setState({
                    ergebnisse: responseJson
                })
                console.log(this.state.ergebnisse)
                return responseJson
            })
            .catch(errror => console.error(errror))
    }
    render() {
        return(
            <Tabelle ergebnisse={this.state.ergebnisse} />
        )
    }
}
module.exports = Ergebnis