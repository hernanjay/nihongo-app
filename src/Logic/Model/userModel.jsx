export default class User {
    constructor(id, userName, passWord, email, studentSheet) {
        this.id = id;
        this.userName = userName;
        this.passWord = passWord;
        this.email = email;
        this.studentSheet = studentSheet;
    }

    getId() {
        return this.id;
    }

    getUserName() {
        return this.userName;
    }

    setUserName(value) {
        if (typeof value === 'string' || value instanceof String) {
            return this.userName = value;
        } else {
            return 400;
        }
    }

    getPassWord() {
        return this.passWord;
    }

    setPassWord(value) {
        if (typeof value === 'string' || value instanceof String) {
            return this.passWord = value;
        } else {
            return 400;
        }
    }

    getEmail() {
        return this.userName;
    }

    setEmail(value) {
        if ((typeof value === 'string' || value instanceof String) && value.endsWith('@awsys-i.com')) {
            return this.email = value;
        } else {
            return 400;
        }
    }
}