class Register {
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
        this.check_passwordLenghth = this.check_passwordLenghth.bind(this)
        this.same_passwords = this.same_passwords.bind(this)
        this.setFlag = this.setFlag.bind(this)
    }

    check_city() {

    }
    check_email() {

    }
    check_userName() {
        const regex = /^[a-zA-Z\d]{6,64}$/ // \d = Ziffern;
        return(regex.test(this.user))
    }
    check_passwordLenghth() {
        return (this.pw.length > 7)
    }
    same_passwords() {
        return (this.pw === this.pw_repeat)
    }
    setFlag() {
        this.flag = false
    }
}

module.exports = Register