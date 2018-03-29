class City {
    constructor(city, input) {
        if (city !== undefined) {
            this.long_name = city.address_components.filter(x => x.types[0] === "locality")[0].long_name // :)
            this.lat = city.geometry.location.lat()
            this.lng = city.geometry.location.lng()
            this.name_details = input
        } else if(typeof city === 'string') {
            //city wurde nicht geändert
        }

    }
}
module.exports = City