let Register = class {
    constructor(city, email, user, pw, pw_repeat) {
        this.city = city
        this.email = email
        this.user = user
        this.pw = pw
        this.pw_repeat = pw_repeat
        this.flag = true

        
        this.check_city = this.check_city.bind(this)
        this.check_email = this.check_email.bind(this)
        this.check_userName= this.check_userName.bind(this)
        this.check_passwordLenghth = this.check_passwordLength.bind(this)
        this.same_passwords = this.same_passwords.bind(this)
        this.setFlag = this.setFlag.bind(this)
        
    }

    check_city() {

    }
    check_email() {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return(regex.test(this.email.toLowerCase()))
    }
    check_userName() {
        const regex = /^[a-zA-Z\d]{6,64}$/ // \d = Ziffern;
        return(regex.test(this.user))
    }
    check_passwordLength() {
        return (this.pw.length > 7)
    }
    same_passwords() {
        return (this.pw === this.pw_repeat)
    }
    setFlag() {
        this.flag = false
    }
}

window.addEventListener("load", () => {
    const button_registrieren = document.getElementById("submit_button")
    button_registrieren.addEventListener("click", () => {
        const input_city  = document.getElementById("city")
        const input_email  = document.getElementById("email")
        const input_user  = document.getElementById("uname")
        const input_password  = document.getElementById("psw")
        const input_password_repeat  = document.getElementById("psw_repeat")

        let register = new Register(input_city.value, input_email.value, input_user.value, input_password.value, input_password_repeat.value)
        
        
        const create_div = (big_sister, textContent) => {
            if (big_sister.nextElementSibling.nodeName !== "DIV") {
                let user_error_div = document.createElement("div")
                user_error_div.classList.add("error_div")
                user_error_div.setAttribute("id", textContent)
                user_error_div.textContent = textContent
                big_sister.parentNode.insertBefore(user_error_div, big_sister.nextSibling)
            }
        }
        
        const remove_div = id => {
            if (document.getElementById(id)) {
                document.getElementById(id).parentNode.removeChild(document.getElementById(id))
            }
        }
        
        console.log("register: " + register)

        /*
        if (!register.check_city()) {
            register.setFlag()
        }
        */
        
        if (!register.check_userName()) {
            register.setFlag()
            create_div(input_user, "! Ungültiger Benutzername")
            input_user.value = ""
        } else {
            remove_div("! Ungültiger Benutzername")
        }

        if (!register.check_email()) {
            register.setFlag()
            create_div(input_email, "! Ungültige E-Mail Adresse")
        } else {
            remove_div("! Ungültige E-Mail Adresse")
        }

        if (!register.check_passwordLength()) {
            register.setFlag()
            create_div(input_password, "! Ungültiges Passwort")
            input_password.value = ""
            input_password_repeat.value = ""
        } else {
            remove_div("! Ungültiges Passwort")
        }

        if (!register.same_passwords()) {
            register.setFlag()
            create_div(input_password_repeat, "! Passwörter sind nicht identisch")
            input_password.value = ""
            input_password_repeat.value = ""
        } else {
            remove_div("! Passwörter sind nicht identisch")
        }
        
       
        if (register.flag) {
            alert("alles fine")
            //schicke die ajax weg
        }
    })
})