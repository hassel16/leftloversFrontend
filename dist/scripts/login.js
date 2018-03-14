window.addEventListener("load", () => {
    const button_anmelden = document.getElementById("anmelde_button")
    button_anmelden.addEventListener("click", () => {
        const input_user = document.getElementById("login_benutzer")
        const input_password = document.getElementById("login_passwort")
        alert(input_user.value + input_password.value)
    })
})