import Label from "../Stateless/Label"
import Kategorie from "../Stateless/Kategorie"
import { Component } from 'react'
import { render } from 'react-dom'

class Details extends Component {
    constructor(props) {
        super(props)
    }
    hideDetails() {
        const _light = document.getElementById("light_details")
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }
    componentDidMount() {
        const fadeDiv = document.getElementById("fade")
        const lightDiv = document.getElementById('light_details')
        fadeDiv.onclick = () => this.hideDetails()
        fadeDiv.style.display = 'block'
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps
    }
    componentDidUpdate() {
        const fadeDiv = document.getElementById("fade")
        fadeDiv.onclick = () => this.hideDetails()
        fadeDiv.style.display = 'block'
    }


    render() {
        const { titel, description, createdatetime, preis, foto, user, city } = this.props.ergebnis
        return (
            <div className="popup" id="light_details">

                <Label htmlFor="city" text="Standort" />
                <input type="text" name="city" id="city_details" value={city.name_details} readOnly />

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input ref="_text" type="text" name="bezeichnung" id="bezeichnung_details" value={titel} readOnly />

                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" type="number" min="0" name="preis" step="0.01" id="check_details" value={preis} readOnly />
                    <b className="_10">€</b>
                    <span></span>
                </div>


                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea name="beschreibung" className="no_resize" value={description} readOnly></textarea>

                <table className="text_center">
                    <tbody>
                        <tr className="full">
                            <td rowSpan="2">
                                <img src={(foto.fotourl === "")?"../../dist/images/file.png":foto.fotourl} className="thumbnail"></img>
                            </td>
                            <td>
                                <img src="../dist/images/face.png" className="thumbnail"></img>
                            </td>
                        </tr>
                        <tr className="full text_center">
                            <td>
                                <a className="">{user.username}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="left popup_button" onClick={() => console.log("kontaktieren")}>Kontaktieren</button>
                <button className="rigth popup_button" id="abbrechen_details" onClick={() => this.hideDetails()}>Abbrechen</button>

            </div >
        )
    }

}
module.exports = Details