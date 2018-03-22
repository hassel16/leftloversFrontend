
import React from 'react'
import { render } from 'react-dom'
import TBody from '../../components/Statefull/TBody'
import Popup from '../../components/Statefull/Popup'
import Ergebnis from '../../components/Statefull/Ergebnis'

window.React = React


window.addEventListener("load", () => {
    render(
        <TBody />,
        document.getElementById('react_table') //root
    )

    render(
        <Ergebnis />,
        document.getElementById("such_list")
    )
    
    document.getElementById("lebensmittel_einstellen").addEventListener("click", () => {
        render(
            <Popup />,
            document.getElementById("such_einstellungen")
        )
        document.getElementById('light').style.display = 'block'
        document.getElementById('fade').style.display = 'block'
    })


})



