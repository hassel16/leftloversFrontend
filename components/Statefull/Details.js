import Label from "../Stateless/Label"
import Kategorie from "../Stateless/Kategorie"

const Details = ({ergebnis}) => {
    const {titel, description, createdatetime, kategorie, preis, foto, user, standort} = ergebnis
    
    return (
        <div className="popup" id="light_details">

            <Label htmlFor="city" text="Stadt" />
            <input type="text" name="city" id="city_details" value={standort.long_name} readOnly/>

            <Label htmlFor="bezeichnung" text="Bezeichnung" />
            <input type="text" name="bezeichnung" id="bezeichnung_details" value={titel} readOnly/>
            {/*
            <Label htmlFor="kategorie" text="Kategorie" />
            <Kategorie />
            */}
            <Label htmlFor="preis" text="Preis" />
            <div className="_100">
                <input className="_90" type="number" min="0" name="preis" step="0.01" id="check_details" value={preis} readOnly/>
                <b className="_10">€</b>
                <span></span>
            </div>


            <Label htmlFor="beschreibung" text="Beschreibung" />
            <textarea name="beschreibung" value={description} readOnly></textarea>

            <Label htmlFor="bild" text="Bild" />
            {/*
            <form encType="multipart/form-data" method="POST">
                <input name="bild" type="file" accept="image/*"  onChange={(event) => this.uploadFile(event)}/>
            </form>
            */}
            <button className="left popup_button" onClick={() => console.log("kontaktieren")}>Kontaktieren</button>
            <button className="rigth popup_button" onClick={() => console.log("abbrevchen")}>Abbrechen</button>

        </div >
    )
}
module.exports = Details