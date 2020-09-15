import CaesarCypher from './caesar-cypher';

test('With key of 2 abcd should be cdef', () => {
  expect(CaesarCypher('abcd', 2)).toBe('cdef');
});

test('Without a key abcd should be abcd', () => {
  expect(CaesarCypher('abcd')).toBe('abcd');
});

test('With key a -2 abcd should be yzab', () => {
  expect(CaesarCypher('abcd', -2)).toBe('yzab');
});

test('With key a 3 aBcD should be dEfG', () => {
  expect(CaesarCypher('aBcD', 3)).toBe('dEfG');
});

test('With key a 3 @aB.c D! should be @dE.f G!', () => {
  expect(CaesarCypher('@aB.c D!', 3)).toBe('@dE.f G!');
});

test('Numbers should not change', () => {
  expect(CaesarCypher('4567', 3)).toBe('4567');
});

test('Throw an error if there is invalid parameters', () => {
  expect(CaesarCypher()).toThrow('Parameters not included');
});
