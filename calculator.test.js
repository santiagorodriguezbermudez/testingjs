import calculator from './calculator';

test('Add 2 + 5 should be equal to 7', () => {
  expect(calculator.add(2, 5)).toBe(7)
})

test('Substract 2 - 5 should be equal to -3', () => {
  expect(calculator.sub(2, 5)).toBe(-3)
})

test('Multiply 2 * 5 should be equal to 10', () => {
  expect(calculator.mult(2, 5)).toBe(10)
})

test('Divide 2 / 5 should be equal to 0.4', () => {
  expect(calculator.div(2, 5)).toBe(0.4)
})

test('Divide 2 / 0 should return NaN', () => {
  expect(calculator.div(2, 0)).toBe(NaN)
})

test('Divide 0 / 5 should be 0', () => {
  expect(calculator.div(0, 5)).toBe(0)
})
