
const feindHoertMit = (opfer) => {
    opfer.addEventListener("input", () => {
        let dropdown = document.getElementsByTagName("select")[0]
        let current_category = dropdown.options[dropdown.selectedIndex].value
        switch(current_category) {
            case "all":
            break
            case "vegetables":
            break
            case "cereals":
            break
            case "drinks":
            break
            case "meat":
            break
            case "fish":
            break
            case "milk_products":
            break
            case "fruits":
            break
        }
        /*
        fetch("https://leftloversgateway.azurewebsites.net/UAAService/login", { //URL muss angepasst werden
            method: "POST",
            body: JSON.parse(opfer.value), //JSON.stringify

            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => response.json())
            .then(responseJson => {
                console.log("responsetext: " + JSON.stringify(responseJson))
                return responseJson;
            })
            .catch(error => {
                return console.log(error);
            })
            */
    })
}

window.addEventListener("load", () => {
    feindHoertMit(document.getElementById("angebot_suchen"))
})