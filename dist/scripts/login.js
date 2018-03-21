import User from '../../data/User'
import fetch from 'isomorphic-fetch'

const login = () => {
    const input_user = document.getElementById("login_benutzer")
    const input_password = document.getElementById("login_passwort")

    console.log(JSON.stringify(new User(input_user.value, input_password.value)))
    /*
    fetch("https://leftloversgateway.azurewebsites.net/UAAService/login", { //oder andere url
        method: "POST",
        body: (new User(input_user.value, input_password.value)), //JSON.stringify
    
        //JSON.stringify(new User(input_user.value, input_password.value)),
        headers: {
            "Content-Type": "application/json"
        }
        
    })
    */
   fetch("https://leftloversgateway.azurewebsites.net/UAAService/login", {
       method: "POST",
       body: //new User(input_user.value, input_password.value),
            {"username":"daniel","password":"password"}, // für philipp
       headers: {
           "content-type": "application/json"
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