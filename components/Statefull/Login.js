import { Component } from "react"
class Login extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }
    submit(e) {


        const {_username, _password} = this.refs
        var xhttp = new XMLHttpRequest();
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("root").innerHTML = this.responseText;
          }
        
        let jdon = ``
        xhttp.open("GET", "http://localhost/OpenWeatherAPIService/test2/", true);
        xhttp.send();
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