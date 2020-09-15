import capitalize from './capitalize';

test('hello should equal Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});