import Register from '../../data/Register'
import City from '../../data/City'
import {postRequest} from '../../data/APICall'
import {remove_div, create_div} from '../../data/Factory'
//key: AIzaSyBUaYI1y3ig_ZVp5C57Sr633U7kl5Bnk0s

var global = undefined
const signup = () => {
    const input_city = document.getElementById("city")
    const input_email = document.getElementById("email")
    const input_user = document.getElementById("uname")
    const input_password = document.getElementById("psw")
    const input_password_repeat = document.getElementById("psw_repeat")


    let register = new Register("invalid city", input_email.value, input_user.value, input_password.value, input_password_repeat.value)
    console.log("frisch erzeugtes Registerobjekt: " + JSON.stringify(register))




    if (!input_city.value || input_city.value === "") {
        register.setFlag()
        create_div(input_city, "! Keine Stadt gesucht")
    } else {
        remove_div("! Keine Stadt gesucht")
        if (global === undefined || global === "") {
            register.setFlag()
            create_div(input_city, "! Keine Stadt aus den Vorschlägen ausgewählt")
        } else {
            remove_div("! Keine Stadt aus den Vorschlägen ausgewählt")
            register.city = new City(global, input_city.value)
            console.log(JSON.stringify(register))
        }
    }


    if (!register.check_username()) {
        register.setFlag()
        create_div(input_user, "! Ungültiger Benutzername")
        input_user.value = ""
    } else {
        remove_div("! Ungültiger Benutzername")
    }

    if (!register.check_email()) {
        register.setFlag()
        create_div(input_email, "! Ungültige E-Mail Adresse")
    } else {
        remove_div("! Ungültige E-Mail Adresse")
    }

    if (!register.check_passwordLength()) {
        register.setFlag()
        create_div(input_password, "! Ungültiges Passwort")
        input_password.value = ""
        input_password_repeat.value = ""
    } else {
        remove_div("! Ungültiges Passwort")
    }

    if (!register.same_passwords()) {
        register.setFlag()
        create_div(input_password_repeat, "! Passwörter sind nicht identisch")
        input_password.value = ""
        input_password_repeat.value = ""
    } else {
        remove_div("! Passwörter sind nicht identisch")
    }

    if (register.flag) {
        create_div(input_password_repeat, "einen Moment...", false)
        postRequest("UAAService/signup", JSON.stringify(register))
            .then(response => {
                remove_div("einen Moment...")
                console.log("status: " + response.status)
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.exception) {
                    if (JSON.stringify(responseJson.exception).includes("UsernameTakenException")) {
                        create_div(input_user, "! Benutzername ist bereits vergeben")
                        register.setFlag()
                    } else {
                        remove_div("! Benutzername ist bereits vergeben")
                    }
                    if (JSON.stringify(responseJson.exception).includes("EmailTakenException")) {
                        create_div(input_email, "! Email ist bereits vergeben")
                        register.setFlag()
                    } else {
                        remove_div("! Email ist bereits vergeben")
                    }
                } else {
                    remove_div("! Benutzername ist bereits vergebe")
                    remove_div("! Email ist bereits vergeben")
                }
                console.log("flag: " + register.flag)
                if(register.flag) {
                    console.log("Registrieren erfolgreich! Bitte melden Sie sich an")
                    window.location.href="./login.html"
                }
                return responseJson
            })
            .catch(error => {
                return console.error(error);
            })

    }
}

window.addEventListener("load", () => {
 
    const acc = new google.maps.places.Autocomplete(document.getElementById("city"), {
        componentRestrictions: { country: 'de' }
    })

    google.maps.event.addListener(acc, 'place_changed', () => {
        const place = acc.getPlace()
        global = place
    })
    const button_registrieren = document.getElementById("submit_button")
    button_registrieren.addEventListener("click", () => signup())

    const last_input = document.getElementById("psw_repeat")
    last_input.addEventListener("keypress", (e) => {
        const key = e.keyCode;
        if (key === 13) { // 13 is enter
          signup()
        }
    })
})
module.exports = {create_div, remove_div}
