import { Component } from 'react'
import { render } from 'react-dom'
import {getRequest} from '../../data/APICall'
import {create_div, remove_div} from "../../data/Factory"
import Tabelle from "../Stateless/Tabelle"
import Details from "./Details"
import {exists} from "../../data/Token"

class Ergebnis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            ergebnisse: [],
            renderChild: true
        }
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails(ergebnis) {
        window.location.href= "#top"
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
        this.setState({loading:true})
        getRequest("AngebotsService/Angebot")
            .then(response => {
                this.setState({loading:false})
                return response.json()
            })
            .then(responseJson => {
                this.setState({
                    ergebnisse: responseJson
                })
                return responseJson
            })
            .catch(error => console.error(error))
    }
    render() {
        return(
            <Tabelle ergebnisse={this.state.ergebnisse} loading={this.state.loading} onDetails={this.showDetails}/>
        )
    }
}
module.exports = Ergebnis