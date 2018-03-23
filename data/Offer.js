class Offer {
    constructor(city, designation, category, price, description) {
        this.city = city
        this.designation = designation
        this.category = category
        this.price = price
        this.description = description

        this.isNotNull = this.isNotNull.bind(this)
        this.checkPrice = this.checkPrice.bind(this)
    }
    isNotNull(string) {
        if (string === "" || !string || string === null) {
            return false
        } else {
            return true
        }
    }
    checkPrice () {
        const regex = /^(?!0\.00)[1-9]*(\,\d\d)?$/
        return regex.test(this.price)
    }
}
module.exports = Offer