import {exists} from './Token'
import {postRequest, getRequest} from './APICall'

class ChatForm{

    constructor(offerId,user2,titel,messageform){
        this.offerId = offerId;
        this.titel=titel;
        this.messageform=messageform
        this.userIds=[];
        this.setUser(user2);
        this.flag = true;
        this.setFlag = this.setFlag.bind(this)
    }

    setUser(user2){
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
                    this.userIds.push(responseJSON.userid);
                    this.userIds.push(user2);
                })
        }
    }

    setFlag() {
        this.flag = false
    }

    isNotNull(string) {
        if (string === "" || !string || string === null) {
            return false
        } else {
            return true
        }
    }

    newChat(){
        postRequest("ChatService/chat", JSON.stringify(this))
        .then(response => response.json)
        .then(responseJSON => {
            console.log("postrequest mit offer: " + JSON.stringify(offer))
            console.log("request: " + JSON.stringify(responseJSON))
            return responseJSON;
        })
        .catch(error => console.error(error))
    }
    
}
module.exports = ChatForm;