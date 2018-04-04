import Label from "../Stateless/Label"
import Kategorie from "../Stateless/Kategorie"
import { Component } from 'react'
import { render } from 'react-dom'

class Details extends Component {
    constructor(props) {
        super(props)
        const {ergebnis} = props
        const {titel, description, createdatetime, kategorie, preis, foto, user, standort} = ergebnis
        this.titel = titel
        this.description = description
        this.createdatetime = createdatetime
        this.kategorie = kategorie
        this.preis = preis
        this.foto = foto
        this.user = user
        this.standort = standort
        this.hideDetails = this.hideDetails.bind(this)
        this.dismiss = this.dismiss.bind(this)

    }
    dismiss() {
        if (this.props.unmountMe !== undefined) {
            this.props.unmountMe()
        }
        
    }
    hideDetails(){
        const _light = document.getElementById("light_details")
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
        this.dismiss()
    }
    componentDidMount() {
        console.log(JSON.stringify(this.titel))
        const fadeDiv = document.getElementById("fade")
        const lightDiv = document.getElementById('light_details')
        //if (abbrechenButton !== null && fadeDiv !== null && lightDiv !== null) {
            fadeDiv.onclick = () => this.hideDetails()
            //lightDiv.style.display = 'block'
            fadeDiv.style.display = 'block'
    }

    //}
    render() {
        return (
            <div className="popup" id="light_details">
    
                <Label htmlFor="city" text="Stadt" />
                <input type="text" name="city" id="city_details" value={this.standort.long_name} readOnly/>
    
                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input type="text" name="bezeichnung" id="bezeichnung_details" value={this.titel} readOnly/>
                {/*
                <Label htmlFor="kategorie" text="Kategorie" />
                <Kategorie />
                */}
                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" type="number" min="0" name="preis" step="0.01" id="check_details" value={this.preis} readOnly/>
                    <b className="_10">€</b>
                    <span></span>
                </div>
    
    
                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea name="beschreibung" value={this.description} readOnly></textarea>
    
                <Label htmlFor="bild" text="Bild" />
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