import { Component } from "react"
import fetch from 'isomorphic-fetch'
class Login extends Component {
    constructor(props) {
        super(props)
        //this.submit = this.submit.bind(this)
        this.state = {
            loading: false,
            antwort: "leer"
        }
    }
    /*
    submit(e) {


        const {_username, _password} = this.refs
        var xhttp = new XMLHttpRequest();
        if (this.readyState == 4 && this.status == 200) {
           document.getElementById("root").innerHTML = this.responseText;
          }
        };
        let jdon = ``
        xhttp.open("GET", "http://localhost/OpenWeatherAPIService/test2/", true);
        xhttp.send();
        /*
        let ajax = new XMLHttpRequest()
        alert(`Username: ${_username.value}\nPassword: ${_password.value}`)
        
}*/
    componentDidMount() {
        this.setState({loading:true})
        //response.type = "json"?
        fetch('https://leftloversgateway.azurewebsites.net/APIGateway') //,{method: 'post', headers: {'Content-Type':'application'json'}} https://stackoverflow.com/questions/34772753/how-to-parse-json-after-exception-handling-promise-with-isomorphic-fetch
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(antwort => {
                console.log(antwort)
                return this.setState({antwort, loading:false})
            })
    }
    render() {
            /*
            <form onSubmit={this.submit}> {/*{e=>e.preventDefault()}
                <label for="user-name">Benutzername</label>
                <input type="text" name="username" ref="_username" required />

                <label for="password">Passwort</label>
                <input type="password" name="password" ref="_password" required />  

                <button>Anmelden</button>           
            </form>
            */
            const {antwort, loading} = this.state
            return (loading)?
                <div>Loading Response..</div>:
                <div>{antwort}</div>
    }
}
module.exports = Login