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
        //if (abbrechenButton !== null && fadeDiv !== null && lightDiv !== null) {
        fadeDiv.onclick = () => this.hideDetails()
        //lightDiv.style.display = 'block'
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
        const { titel, description, createdatetime, kategorie, preis, foto, user, city } = this.props.ergebnis
        return (
            <div className="popup" id="light_details">

                <Label htmlFor="city" text="Stadt" />
                <input type="text" name="city" id="city_details" value={city.long_name} readOnly />

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input ref="_text" type="text" name="bezeichnung" id="bezeichnung_details" value={titel} readOnly />

                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" type="number" min="0" name="preis" step="0.01" id="check_details" value={preis} readOnly />
                    <b className="_10">€</b>
                    <span></span>
                </div>


                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea name="beschreibung" value={description} readOnly></textarea>

                {/*<Label htmlFor="bild" text="Bild" />*/}
                <div name="bild" className="full">
                    <div className="left45">
                        <img src={foto.fotourl} className="thumbnail"></img>
                    </div>
                    <div className="left45">
                        <img src="../dist/images/face.png" className="thumbnail left"></img>
                    </div>
                </div>
                {/*
                <form encType="multipart/form-data" method="POST">
                    <input name="bild" type="file" accept="image/*"  onChange={(event) => this.uploadFile(event)}/>
                </form>
                */}
                <button className="left popup_button" onClick={() => console.log("kontaktieren")}>Kontaktieren</button>
                <button className="rigth popup_button" id="abbrechen_details" onClick={() => this.hideDetails()}>Abbrechen</button>

            </div >
        )
    }

}
module.exports = Details