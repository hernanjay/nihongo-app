//Tester Name Here

const loginButton = require('./testInit');
const registerBut = require('../../src/Logic/Controller/registerController');

describe('Initialization', () => {
    test('Check if user is valid and returns 200', () => {
    });

    test('User validation returns 404 if user does not exist', () => {
        expect(loginButton('wrongUsername', 'wrongPass123')).toBe(404);
    });

    test('Username validation returns 404 if username incorrect', () => {
        expect(loginButton('wrongUsername', 'admin')).toBe(404);
    });

    test('Password validation returns 404 if password incorrect', () => {
        expect(loginButton('admin', 'wrongPass123')).toBe(404);
    });


    test('Other handled errors returns 500', () => {
        expect(loginButton(true, 123123)).toBe(500);
    });
}); 