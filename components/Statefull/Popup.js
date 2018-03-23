import { Component } from 'react'
import { render } from 'react-dom'
import Kategorie from '../Stateless/Kategorie'
import Label from '../Stateless/Label'
import Offer from '../../data/Offer'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_city: "default city",
            current_category: "all"
        }
    }
    hidePopup() {
        const { _light } = this.refs
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }
    newCategory(category) {
        
        alert(category)
    }
    createOffer() {
        const {_city, __designation, _description, _preis} = this.refs
        //const curr
        //let offer = new Offer(_city.value, __designation.value, /*document.getElementById("offer_kategorie").,*/ _description.value, _preis.value)
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
        document.getElementById("fade").onclick = () => this.hidePopup()
    }
    render() {
        return (
            <div className="popup" id="light" ref="_light">

                <Label htmlFor="city" text="Stadt" />
                <input type="text" ref="_city" placeholder="Suche deine Stadt" name="city" id="city" required />

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input type="text" ref="_designation" placeholder="Was inserierst du?" name="bezeichnung" id="bezeichnung" required />

                <Label htmlFor="kategorie" text="Kategorie" />
                <Kategorie onNewCategory={category => this.newCategory(category)}/>

                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" ref="_preis" type="number" min="0" name="preis" step="0.01" id="check" defaultValue="0,00" />
                    <b className="_10">€</b>
                </div>


                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea ref="_description" name="beschreibung" maxLength={500} placeholder="ein paar Details zu Ihrem Angebot"></textarea>

                <Label htmlFor="bild" text="Bild" />
                <form encType="multipart/form-data" method="POST">
                    <input name="bild" type="file" accept="image/*" />
                </form>
                <button className="left popup_button" onClick={() => this.createOffer()}>Einstellen</button>
                <button className="rigth popup_button" onClick={() => this.hidePopup()}>Abbrechen</button>

            </div >
        )
    }
}
module.exports = Popup