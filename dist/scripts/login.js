import User from '../../data/User'
import {postRequest} from '../../data/APICall'
import {create_div, remove_div} from '../../data/Factory'

const login = () => {
    let sauber = true
    const input_user = document.getElementById("login_benutzer")
    const input_password = document.getElementById("login_passwort")

    if (input_user.value === "" || !input_user.value) {
        create_div(input_user, "! Gib einen Benutzernamen an")
        sauber = false
    } else {
        remove_div("! Gib einen Benutzernamen an")
    }

    if (input_password.value === "" || !input_password.value) {
        create_div(input_password, "! Gib ein Passwort an")
        sauber = false
    } else {
        remove_div("! Gib ein Passwort an")
    }
    if (sauber) {
        postRequest("UAAService/login", JSON.stringify(new User(input_user.value, input_password.value))) 
        .then(response => {
            console.log("headers: " + response.headers.get("authorization"))
            if (response.status !== 200) {
                create_div(input_password, "! Benutzername oder Passwort falsch")
            } else {
                remove_div("! Benutzername oder Passwort falsch")
            }
            return response.json()
        })
        .then(responseJson => {
            console.log("responsetext: " + JSON.stringify(responseJson))
            return responseJson;
        })
        .catch(error => {
          return console.log(error);
        })
    }
}

window.addEventListener("load", () => {
    const button_anmelden = document.getElementById("anmelde_button")
    const last_input = document.getElementById("login_passwort")

    button_anmelden.addEventListener("click", () => login())
    last_input.addEventListener("keypress", (e) => {
        const key = e.keyCode;
        if (key === 13) { // 13 is enter
          login()
        }
    })
})