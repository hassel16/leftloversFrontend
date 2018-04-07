import {inOrOut} from '../../data/Token'
import {wakeMeUp} from '../../data/APICall'

wakeMeUp()
window.addEventListener("load", () => {
    inOrOut()
})

