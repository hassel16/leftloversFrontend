import { Component } from 'react'
import { render } from 'react-dom'
import Kategorie from '../Stateless/Kategorie'
import Label from '../Stateless/Label'

class Popup extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="popup" id="light">
                <Label htmlFor="city" text="Stadt" />
                <input type="text" placeholder="Suche deine Stadt" name="city" id="city" required />

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input type="text" placeholder="Was inserierst du?" name="bezeichnung" id="bezeichnung" required />

                <Label htmlFor="kategorie" text="Kategorie" />
                <Kategorie />

                <Label htmlFor="preis" text="Preis" />
                <input type="checkbox"  defaultChecked className="left"/>kostenlos 
                <input type="number" name="preis" step="0.01" className="rigth"/>

                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea name="beschreibung" maxLength={160}></textarea>

                <button className="left">Einstellen</button>
                <button className="rigth">Abbrechen</button>
            </div >
        )
    }
}
module.exports = Popup