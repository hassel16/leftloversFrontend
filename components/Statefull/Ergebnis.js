import { Component } from 'react'
import { render } from 'react-dom'
import {getRequest} from '../../data/APICall'
import {create_div, remove_div} from "../../data/Factory"
import Tabelle from "../Stateless/Tabelle"

class Ergebnis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            ergebnisse: []
        }
    }
    componentDidMount() {
        this.setState({loading:true})
        getRequest("AngebotsService/Angebot")
            .then(response => {
                this.setState({loading:false})
                return response.json()
            })
            .then(responseJson => {
                console.log("ergebnisse: " + JSON.stringify(responseJson))
                this.setState({
                    ergebnisse: responseJson
                })
                return responseJson
            })
            .catch(error => console.error(error))
    }
    render() {
        return(
            <Tabelle ergebnisse={this.state.ergebnisse} loading={this.state.loading}/>
        )
    }
}
module.exports = Ergebnis