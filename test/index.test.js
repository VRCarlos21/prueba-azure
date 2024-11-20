const suma = require('../index');

test('Suma de 2 + 3 debe ser 5', () => {
    expect(suma(2, 3)).toBe(5);
});

test('Suma de -1 + 1 debe ser 0', () => {
    expect(suma(-1, 1)).toBe(0);
});

