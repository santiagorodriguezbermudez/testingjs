import ceasarCypher from '.ceasar-cypher';

test('With key of 2 abcd should be cdef', () => {
  expect(ceasarCyper('abcd', 2)).toBe('cdef');
});

test('Without a key abcd should be abcd', () => {
  expect(ceasarCyper('abcd')).toBe('abcd');
});

test('With key a -2 abcd should be yzab', () => {
  expect(ceasarCyper('abcd', -2)).toBe('yzab');
});

test('With key a 3 aBcD should be dEfG', () => {
  expect(ceasarCyper('aBcD', 3)).toBe('dEfG');
});

test('With key a 3 @aB.c D! should be @dE.f G!', () => {
  expect(ceasarCyper('@aB.c D!', 3)).toBe('@dE.f G!');
});

test('Numbers should not change', () => {
  expect(ceasarCyper('4567', 3)).toBe('4567');
});

test('Trow an error if there is invalid parameters', () => {
  expect(ceasarCyper()).toThrow('Parameters not included');
});
