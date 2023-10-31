const initialize = require('./testInit');

describe('Initialization', () => {
    test('Check if true', () => {
        expect(initialize(true)).toBe(true);
    });

    test('Check if false', () => {
        expect(initialize(false)).toBe(false);
    });
}); 