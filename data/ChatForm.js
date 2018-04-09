import {exists} from './Token'
import {MessageForm} from './MessageForm'
import {postRequest, getRequest} from './APICall'

class ChatForm{

    constructor(offerId,titel,messagetext,userIds){
        this.offerId = offerId;
        this.titel=titel;
        this.messageform= {
            text:messagetext,
            userId:undefined
        }
        this.userIds=[];
        this.flag = true;
        this.setFlag = this.setFlag.bind(this)
    }

    setUser(user2,callback){
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
                    this.messageform.userId=responseJSON.userid;
                    callback();
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
            console.log("postrequest mit offer: " + JSON.stringify(this))
            console.log("request: " + JSON.stringify(responseJSON))
            return responseJSON;
        })
        .catch(error => console.error(error))
    }
    
}
module.exports = ChatForm;