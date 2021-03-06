export const token = sessionStorage.getItem("token")

export const exists = () => (token !== undefined && token !== " Bearer undefined" && token !== null)

export const inOrOut = () => {
    console.log("token: " + token)
    const inorout = document.getElementsByClassName("in_or_out")[0]
            if (exists()) {
                inorout.textContent = "Abmelden"
            } else {
                inorout.textContent = "Anmelden"
            }
            inorout.addEventListener("click", () => {
                if (exists()) {
                    sessionStorage.removeItem("token")
                    sessionStorage.removeItem("user")
                }
            })
}
