import fetch from 'isomorphic-fetch'
import {token, exists} from './Token'


    
const APICall = {
    getURL(appendix) {
            return `https://leftloversgateway.azurewebsites.net/${appendix}`

    },
    headerToken(line=false) {
        if (line === false) {
            if (exists()) {
                return {headers:(new Headers({
                    "Authorization": token
                }))}
            }
        } else {
            if (exists()) {
                return new Headers({
                    "content-type": "application/json",
                    "Authorization": token
                })
            } else {
                return new Headers({
                    "content-type": "application/json"
                })
            }
        }
    },
    getRequest(appendix, postappendix = "") {
        if (postappendix === "") {
            return fetch(APICall.getURL(appendix), APICall.headerToken())
        } else {
            return fetch((APICall.getURL(appendix) + "?" + postappendix), APICall.headerToken())
        }
    },
    postRequest(appendix, body) {
        return fetch(APICall.getURL(appendix), {
            method: "POST",
            headers: APICall.headerToken(true),
            /*
            headers: {
                "content-type": "application/json",
                //"Authorization": token
            },
            */
            body: body
        })
    },
    checkForExceptions(response) {
        if (response.status >= 200 && response.status <= 300) {
            console.log(response.headers)
        } else {
            console.error(response)
        }
    },
    wakeMeUp() {
        APICall.getRequest("AngebotsService/health")
            .then(response => response.json())
            .then(responseJSON => {
                console.log(JSON.stringify(responseJSON))
            })
            .catch(error => console.error(error))

            APICall.getRequest("UAAService/health")
            .then(response => response.json())
            .then(responseJSON => {
                console.log(JSON.stringify(responseJSON))
            })
            .catch(error => console.error(error))

            APICall.getRequest("StandortService/health")
            .then(response => response.json())
            .then(responseJSON => {
                console.log(JSON.stringify(responseJSON))
            })
            .catch(error => console.error(error))
    }
}

module.exports = APICall//, asyncRequest}

