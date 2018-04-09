import {exists} from './Token'
import {postRequest, getRequest} from './APICall'

class MessageForm{

    constructor(text){
        this.text=text;
        this.userId="";
        this.setUser();
        this.flag = true;
        this.setFlag = this.setFlag.bind(this)
    }

    setUser(){
        if (exists()) {
            getRequest("UAAService/resolve")
                .then(response => {
                    if (response.status >= 200 || response.status <= 300) {
                        return response.json()
                    } else {
                        return new Error(response.status)
                    }
                })
                .then(responseJSON => {
                    this.userId = responseJSON.userid;
                })
        }
    }

    isNotNull(string) {
        if (string === "" || !string || string === null) {
            return false
        } else {
            return true
        }
    }

    setFlag() {
        this.flag = false
    }
    
    newMessage(chatid){
        postRequest(`ChatService/chat/${chatid}`, JSON.stringify(this))
        .then(response => response.json)
        .then(responseJSON => {
            return responseJSON
        })
        .catch(error => console.error(error))
    }
    
}module.exports=MessageForm;