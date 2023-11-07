function loginButton(userName, passWord) {
    if (userName === "admin" && passWord === "admin") {
        return 200;
    } else if (userName !== "admin" || passWord !== "admin") {
        return 404;
    } else {
        return 500;
    }
}

module.exports = loginButton;