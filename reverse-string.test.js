import reverseString from './reverse-string';

test('world should equal dlrow', () => {
  expect(reverseString('world')).toBe('dlrow');
});