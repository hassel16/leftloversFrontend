import fetch from 'isomorphic-fetch'
import {token} from './Token'


    
const APICall = {
    getURL(appendix) {
        if (token !== undefined) {
            return `https://leftloversgateway.azurewebsites.net/${appendix}?token=${token}`
        } else {
            return `https://leftloversgateway.azurewebsites.net/${appendix}`
        }
    },
    getRequest(appendix, postappendix = "") {
        if (postappendix === "") {
            return fetch(APICall.getURL(appendix))
        } else {
            if (token === undefined) {
                return fetch(APICall.getURL(appendix) + "?")
            } else {
                return fetch(APICall.getURL(appendix) + "&")
            }
        }
    },
    postRequest(appendix, body) {
        return fetch(APICall.getURL(appendix), {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
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

