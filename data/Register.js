class Register {
    constructor(city, email,username, password, password_repeat) {
        this.city = city
        this.email = email
        this.username = username
        this.password = password
        this.password_repeat = password_repeat
        this.flag = true

        this.check_email = this.check_email.bind(this)
        this.check_username = this.check_username.bind(this)
        this.check_passwordLenghth = this.check_passwordLength.bind(this)
        this.same_passwords = this.same_passwords.bind(this)
        this.setFlag = this.setFlag.bind(this)

    }

    check_email() {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return (regex.test(this.email.toLowerCase()))
    }
    check_username() {
        const regex = /^[a-zA-Z\d]{6,64}$/ 
        return (regex.test(this.username))
    }
    check_passwordLength() {
        return (this.password.length > 7)
    }
    same_passwords() {
        return (this.password === this.password_repeat)
    }
    setFlag() {
        this.flag = false
    }
}
module.exports = Register