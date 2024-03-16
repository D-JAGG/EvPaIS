// math.test.js
const sum = require('./math'); // Asegúrate de que esto coincida con el nombre de tu archivo real

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
