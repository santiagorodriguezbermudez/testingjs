import capitalize from '../javascript/capitalize';

test('hello should equal Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});