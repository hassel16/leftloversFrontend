
import React from 'react'
import { render } from 'react-dom'
import TBody from '../../components/Statefull/TBody'
import Popup from '../../components/Statefull/Popup'
import Ergebnis from '../../components/Statefull/Ergebnis'
import {inOrOut, exists} from '../../data/Token'

window.React = React


window.addEventListener("load", () => {
    inOrOut()
    render(
        <TBody />,
        document.getElementById('react_table') //root
    )

    render(
        <Ergebnis />,
        document.getElementById("such_list")
    )
    
    document.getElementById("lebensmittel_einstellen").addEventListener("click", () => {
        if (exists()) {
            render(
                <Popup />,
                document.getElementById("popup_anker") //such_einstellungen
            )
            document.getElementById('light').style.display = 'block'
            document.getElementById('fade').style.display = 'block'
        } else {
            alert("du musst dich anmelden, um dieses feature genießen zu können")
        }
    })
})



