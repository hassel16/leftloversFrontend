import { Component } from 'react'
import { render } from 'react-dom'
import ChatForm from '../../data/ChatForm'
import Label from '../Stateless/Label'
import MessageForm from '../../data/MessageForm'
import { create_div, remove_div } from '../../data/Factory'
import fetch from 'isomorphic-fetch'
import {token, exists} from '../../data/Token'

class PopupChat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current_titel: undefined, 
            current_text: undefined, 
            current_user: undefined,
            current_angebotsid:undefined
        }
        this.createChat = this.createChat.bind(this)
    }
    hidePopup() {
        const { _light } = this.refs
        _light.style.display = 'none';
        document.getElementById('fade').style.display = 'none'
    }

    createChat() {
        let angebotid = this.props.details[0];
        let userid = this.props.details[1];
        const { _chattitel, _nachrichttext} = this.refs;
            let chatForm = new ChatForm(angebotid,_chattitel.value,_nachrichttext.value);
            console.log(chatForm)
            if (!chatForm.isNotNull(chatForm.titel)) {
                create_div(_chattitel, "! Bitte geben Sie ihrer Nachricht einen Titel")
                chatForm.setFlag()
            } else {
                remove_div("! Bitte geben Sie ihrer Nachricht einen Titel")
            }
    
            if (!chatForm.isNotNull(chatForm.messageform.text)) {
                create_div(chatForm.messageform.text, "! Bitte schreibe eine Nachricht")
                chatForm.setFlag()
            } else {
                remove_div("! Bitte schreibe eine Nachricht")
            }
            if (chatForm.flag) {   
                    chatForm.setUser(userid,()=>{
                        chatForm.newChat();
                        this.hidePopup()
                    })
            }
    }

    render() {
         return (
            <div className="popup" id="light" ref="_light">

                <Label text="Titel" />
                <input type="text" ref="_chattitel"  placeholder="Titel deiner Nachricht?" name="titel" id="titel" required />


                <Label text="Text" />
                <textarea name="text" ref="_nachrichttext" rows="10" maxLength={1000} placeholder="Schreibe deine Nachricht"></textarea>

                <button className="left popup_button" onClick={() => this.createChat()}>Senden</button>
                <button className="rigth popup_button" onClick={() => this.hidePopup()}>Abbrechen</button>

            </div >
        )
    }
}
module.exports = PopupChat