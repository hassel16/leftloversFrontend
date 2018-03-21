import Register from '../../data/Register'
import City from '../../data/City'
import {postRequest} from '../../data/APICall'
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
    const create_div = (big_sister, textContent) => {
        if (big_sister.nextElementSibling.nodeName !== "DIV") {
            let user_error_div = document.createElement("div")
            user_error_div.classList.add("error_div")
            user_error_div.setAttribute("id", textContent)
            user_error_div.textContent = textContent
            big_sister.parentNode.insertBefore(user_error_div, big_sister.nextSibling)
        }
    }

    const remove_div = id => {
        if (document.getElementById(id)) {
            document.getElementById(id).parentNode.removeChild(document.getElementById(id))
        }
    }



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
            const long_name = global.address_components.filter(x => x.types[0] === "locality")[0].long_name // :)
            const lat = global.geometry.location.lat() //entweder stringify oder toString!
            const lng = global.geometry.location.lng()
            register.city = new City(long_name, lat, lng)
            console.log("stadt mit stadtobjekt" + JSON.stringify(register))
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
        postRequest("UAAService/signup", register)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                console.log("responsetext: " + JSON.stringify(responseJson))
                return responseJson;
            })
            .catch(error => {
                return console.error(error);
            })

    }
}

window.addEventListener("load", () => {
 
    const acc = new google.maps.places.Autocomplete(document.getElementById("city"), {
        //types: ['(cities)'],
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
