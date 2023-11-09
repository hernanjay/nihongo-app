import User from "../Model/userModel";

const admin = new User('1', 'admin', 'admin', 'admin@awsys-i.com', []);
const users = [admin];

export function getUser(id) {
    for (const user of users) {
        if (user.id === id) {
            return user;
        }
    }
}

export function createUser(userName, passWord, email) {
    const studentSheet = [];
    const userId = String(users.length + 1);
    const newUser = new User(userId, userName, passWord, email, studentSheet);
    users.push(newUser);
    return newUser;
}

export function loginUser(userName, passWord) {
    for (const user of users) {
        if (user.userName === userName && user.passWord === passWord) {
            return user;
        }
    }
    return 404;
}