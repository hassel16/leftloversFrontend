
import React from 'react'
import { render } from 'react-dom'
import TBody from '../../components/Statefull/TBody'
window.React = React
//bei input change muss currentcategory ausgewählt werden

 
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

window.addEventListener("load", () => {
    render(
        <TBody />,
        document.getElementById('react_table') //root
    )
    /*
    document.getElementById("lebensmittel_einstellen").addEventListener("click", () => {
        render(

        )
    })
    */
})



