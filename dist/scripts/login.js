import User from '../../data/User'
import {postRequest} from '../../data/APICall'

const login = () => {
    const input_user = document.getElementById("login_benutzer")
    const input_password = document.getElementById("login_passwort")


    postRequest("UAAService/login", {"username":"daniel","password":"password"}) //new User(input_user.value, input_password.value)
    .then(response => response.json())
    .then(responseJson => {
        console.log("responsetext: " + JSON.stringify(responseJson))
        return responseJson;
    })
    .catch(error => {
      return console.log(error);
    })
    
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