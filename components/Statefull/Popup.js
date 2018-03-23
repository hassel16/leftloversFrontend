import { Component } from 'react'
import { render } from 'react-dom'
import Kategorie from '../Stateless/Kategorie'
import Label from '../Stateless/Label'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_city: "default city"
        }
    }
    hidePopup() {
        const { _light } = this.refs
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }

    componentDidMount() {
        let { _city } = this.refs
        const acc = new google.maps.places.Autocomplete(_city, {
            //types: ['(cities)'],
            componentRestrictions: { country: 'de' }
        })

        google.maps.event.addListener(acc, 'place_changed', () => {
            const place = acc.getPlace()
            this.setState({ current_city: place })
        })
    }
    render() {
        return (
            <div className="popup" id="light" ref="_light">
                {/*<form enctype="multipart/form-data">*/}
                <Label htmlFor="city" text="Stadt" />
                <input type="text" ref="_city" placeholder="Suche deine Stadt" name="city" id="city" required />

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input type="text" placeholder="Was inserierst du?" name="bezeichnung" id="bezeichnung" required />

                <Label htmlFor="kategorie" text="Kategorie" />
                <Kategorie />

                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" ref="_preis" type="number" min="0" name="preis" step="0.01" id="check" />
                    <b className="_10">€</b>
                </div>


                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea name="beschreibung" maxLength={160}></textarea>

                <Label htmlFor="bild" text="Bild" />
                <input name="bild" type="file" accept="*.jpg" />

                <button className="left">Einstellen</button>
                <button className="rigth" onClick={() => this.hidePopup()}>Abbrechen</button>
                {/*} </form>*/}
            </div >
        )
    }
}
module.exports = Popup