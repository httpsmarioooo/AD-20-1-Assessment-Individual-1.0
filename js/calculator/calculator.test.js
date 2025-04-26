const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - (-10) to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 4 / 4 to equal 1',() =>{
  expect(calculator.divide(4, 4)).toBe(1);
})

test('divide 10 / 8 to equal 1,25',() =>{
  expect(calculator.divide(10, 8)).toBe(1.25);
})


test('divide() debe lanzar un error si el divisor es 0', () => {
  expect(() => divide(10, 0)).toThrow('No se puede dividir entre 0');
});

test('multiply 986324 * 423689 to equal ',() =>{
  expect(calculator.multiply(986324, 423689)).toBe(417894629236);
})

test('multiply 4 * 4 to equal ',() =>{
  expect(calculator.multiply(4, 4)).toBe(16);
})