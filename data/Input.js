class Input {
    constructor(titel, kategorie, city, radius) {
        this.titel = titel
        this.city = city
        this.kategorie = {
            titel: kategorie
        }
        this.radius = radius
    }
}
module.exports = Input