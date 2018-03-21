const Factory = {
    create_div(big_sister, textContent) {
        if (big_sister.nextElementSibling.nodeName !== "DIV") {
            let user_error_div = document.createElement("div")
            user_error_div.classList.add("error_div")
            user_error_div.setAttribute("id", textContent)
            user_error_div.textContent = textContent
            big_sister.parentNode.insertBefore(user_error_div, big_sister.nextSibling)
        }
    },
    remove_div(id){
        if (document.getElementById(id)) {
            document.getElementById(id).parentNode.removeChild(document.getElementById(id))
        }
    }
}
module.exports = Factory