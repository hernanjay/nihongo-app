export function getloginState() {
    return JSON.parse(localStorage.getItem('loginState'));
}

export function setloginState(state) {
    localStorage.setItem('loginState', JSON.stringify(state));
}