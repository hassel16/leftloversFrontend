import User from '../../data/User'
import fetch from 'isomorphic-fetch'

window.addEventListener("load", () => {
    const button_anmelden = document.getElementById("anmelde_button")
    button_anmelden.addEventListener("click", () => {
        const input_user = document.getElementById("login_benutzer")
        const input_password = document.getElementById("login_passwort")

        console.log(JSON.stringify(new User(input_user.value, input_password.value)))
        fetch("https://leftloversgateway.azurewebsites.net/UAAService/login", { //oder andere url
            method: "POST",
            body: (new User(input_user.value, input_password.value)), //JSON.stringify
        
            //JSON.stringify(new User(input_user.value, input_password.value)),
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

    })
})