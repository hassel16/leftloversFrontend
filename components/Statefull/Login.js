import { Component } from "react"
import LoginModel from "./LoginModel"
class Login extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {


        const {_username, _password} = this.refs
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               alert(xhttp.responseText);
            }else{
                alert(this.status)
            }
        };
        let login = new Login(_username.value,_password.value)
        xhttp.open("POST", "http://localhost/OpenWeatherAPIService/test2?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJsZWZ0bG92ZXJzX3d3aTE2QjMiLCJpYXQiOjE1MjA1MDYzODF9.FV3_c-XICWAt1TcAjJB9Z0OVbchjCbFUWfhSBcZtJ2w", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(login));
        /*
        let ajax = new XMLHttpRequest()
        alert(`Username: ${_username.value}\nPassword: ${_password.value}`)
        */
    }
    render() {
        return (
            <form onSubmit={this.submit}> {/*{e=>e.preventDefault()*/}
                <label for="user-name">Benutzername</label>
                <input type="text" name="username" ref="_username" required />

                <label for="password">Passwort</label>
                <input type="password" name="password" ref="_password" required />  

                <button>Anmelden</button>           
            </form>
        )
    }
}
module.exports = Login