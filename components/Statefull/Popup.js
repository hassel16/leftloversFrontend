import { Component } from 'react'
import { render } from 'react-dom'
import Kategorie from '../Stateless/Kategorie'
import Label from '../Stateless/Label'
import Offer from '../../data/Offer'
import { create_div, remove_div } from '../../data/Factory'
import {postRequest, getRequest} from '../../data/APICall'
import City from '../../data/City'
import fetch from 'isomorphic-fetch'
import {token, exists} from '../../data/Token'

class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_city: undefined, 
            current_category: "Verschiedenes",
            current_category_id: 9,
            current_image: undefined,
            current_user: undefined
        }
        this.newCategory = this.newCategory.bind(this)
        this.createOffer = this.createOffer.bind(this)
    }
    hidePopup() {
        const { _light } = this.refs
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }
    newCategory(e) {
        const select = e.target
        this.setState({ current_category: e.target.value, current_category_id: select.options[select.selectedIndex].getAttribute("kategorieid") })
    }
    uploadFile(event) {
        console.log("file attached")
        function progress(response) {
            var reader = response.body.getReader();
            var decoder = new TextDecoder();
            var decodedValue;
            
            function update() {//https://codepen.io/eitanp461/pen/NdPNmX
              return reader.read().then(function(result) {
                if (result.done) {
                  return (JSON.parse(decodedValue));
                }
                decodedValue = decoder.decode(result.value || new Uint8Array, {
                  stream: true
                });
                return update();      
              });
            }
            return update();
          }
        const url = "https://api.cloudinary.com/v1_1/ddxe8dxnw/upload"
        const preset = "sh14oc9q"
        const file = event.target.files[0]
        let formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", preset)
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(progress)
        .then(response => {
            console.log("Link zum Bild auf cloudinary: " + response.secure_url)
            this.setState({current_image: response.secure_url})
            return response
        })  
        .catch(error => console.error(error))
        

    }
    createOffer() {
        const { _city, _designation, _description, _preis, _euro } = this.refs
        let offer = new Offer(this.state.current_city, _designation.value, this.state.current_category, this.state.current_category_id, _preis.value, _description.value, this.state.current_image)
        if (!offer.isNotNull(offer.city) && this.state.current_city === undefined) {
            create_div(_city, "! Bitte wählen Sie eine Stadt aus")
            offer.setFlag()
        } else {
            remove_div("! Bitte wählen Sie eine Stadt aus")
        }
        if (!offer.isNotNull(offer.titel)) {
            create_div(_designation, "! Bitte geben Sie ihrem Angebot einen Titel")
            offer.setFlag()
        } else {
            remove_div("! Bitte geben Sie ihrem Angebot einen Titel")
        }
        if (!offer.isNotNull(offer.preis)) {
            create_div(_euro, "! Bitte geben Sie einen Preis für Ihr Angebot an")
            offer.setFlag()
        } else {
            remove_div("! Bitte geben Sie einen Preis für Ihr Angebot an")
        }
        if (!offer.checkPrice()) {
            create_div(_euro, "! Bitte geben Sie einen validen Preis ein")
            offer.setFlag()
        } else {
            remove_div("! Bitte geben Sie einen validen Preis ein")
        }
        if (offer.flag) {
            offer.user.userid = this.state.current_user
            postRequest("AngebotsService/Angebot", JSON.stringify(offer))
                .then(response => response.json)
                .then(responseJSON => {
                    console.log("postrequest mit offer: " + JSON.stringify(offer))
                    console.log("request: " + JSON.stringify(responseJSON))
                    return responseJSON
                })
                .catch(error => console.error(error))
            this.hidePopup()
        }
    }
    componentDidMount() {
        let { _city } = this.refs
        const acc = new google.maps.places.Autocomplete(_city, {
            componentRestrictions: { country: 'de' }
        })

        google.maps.event.addListener(acc, 'place_changed', () => {
            const place = acc.getPlace()
            this.setState({ current_city: new City(place, _city.value) })
        })
        document.getElementById("fade").onclick = () => this.hidePopup()
        
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
                    this.setState({current_city: responseJSON.city})
                    this.setState({current_user: responseJSON.userid})
                    _city.value = this.state.current_city.name_details
                })
        }

    }
    render() {
        return (
            <div className="popup" id="light" ref="_light">

                <Label htmlFor="city" text="Stadt" />
                <input type="text" ref="_city" placeholder="Suche deine Stadt" name="city" id="city" required />{/*defaultValue*/}

                <Label htmlFor="bezeichnung" text="Bezeichnung" />
                <input type="text" ref="_designation" placeholder="Was inserierst du?" name="bezeichnung" id="bezeichnung" required />

                <Label htmlFor="kategorie" text="Kategorie" />
                <Kategorie onNewCategory={this.newCategory} />

                <Label htmlFor="preis" text="Preis" />
                <div className="_100">
                    <input className="_90" ref="_preis" type="number" min="0" name="preis" id="check" placeholder="0.00" required />
                    <b ref="_euro" className="_10">€</b>
                    <span></span>
                </div>


                <Label htmlFor="beschreibung" text="Beschreibung" />
                <textarea ref="_description" name="beschreibung" maxLength={500} placeholder="ein paar Details zu Ihrem Angebot"></textarea>

                <Label htmlFor="bild" text="Bild" />
                <form encType="multipart/form-data" method="POST">
                    <input name="bild" type="file" accept="image/*" ref="_fileUpload" onChange={(event) => this.uploadFile(event)}/>
                </form>
                <button className="left popup_button" onClick={() => this.createOffer()}>Einstellen</button>
                <button className="rigth popup_button" onClick={() => this.hidePopup()}>Abbrechen</button>

            </div >
        )
    }
}
module.exports = Popup