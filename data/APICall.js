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
    }
}
// export const asyncRequest = async () => {
//     const response = await fetch("https://leftloversgateway.azurewebsites.net/AngebotsService/Angebot?angebotstitel=k")
//     const json = await response.json()
//     return json
// }
module.exports = APICall//, asyncRequest}

