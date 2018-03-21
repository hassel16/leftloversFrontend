import fetch from 'isomorphic-fetch'

const APICall = {
    getURL(appendix) {
        return `https://leftloversgateway.azurewebsites.net/${appendix}`
    },
    getRequest(appendix) {
        return(APICall.getURL(appendix))
        //return fetch(this.getURL(appendix))
    },
    postRequest(appendix, body) {
        return fetch(APICall.getURL(appendix), {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: body
        })
    }
}
module.exports = APICall

