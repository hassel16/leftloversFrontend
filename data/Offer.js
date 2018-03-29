class Offer {
    constructor(city, titel, kategorie, preis, description, fotourl) {
        this.city = {
            city
        }
        this.titel = titel
        this.kategorie = {
            titel: kategorie
        }
        this.foto = {
            fotourl: fotourl
        }
        this.preis = preis
        this.description = description
        this.flag = true

        this.isNotNull = this.isNotNull.bind(this)
        this.checkPrice = this.checkPrice.bind(this)
        this.setFlag = this.setFlag.bind(this)
    }
    isNotNull(string) {
        if (string === "" || !string || string === null) {
            return false
        } else {
            return true
        }
    }
    checkPrice () {
        const regex = /^\d{1,8}([\.]\d{2})?$/ ///^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\,[0-9]{2})?$/
        return regex.test(this.preis)
    }
    setFlag() {
        this.flag = false
    }
}
module.exports = Offer