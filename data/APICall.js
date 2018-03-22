import fetch from 'isomorphic-fetch'

const APICall = {
    getURL(appendix) {
        return `https://leftloversgateway.azurewebsites.net/${appendix}`
    },
    getRequest(appendix) {
        return fetch(APICall.getURL(appendix))
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
        if (response.status === 201) {
            console.log(response.headers)
        } else if (response.status === 400) {

        } else {
            console.error(response)
        }
    }
}
module.exports = APICall

