import ArrayAnalysis from './array_analysis';

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('Average should be 5.5', () => {
  expect(ArrayAnalysis(testArray).objectContaining({
    average: 5.5,
  }));
});

test('Minimum should be 1', () => {
  expect(ArrayAnalysis(testArray).objectContaining({
    minimum: 1,
  }));
});

test('Maximum should be 10', () => {
  expect(ArrayAnalysis(testArray).objectContaining({
    maximum: 10,
  }));
});

test('Length should be 10', () => {
  expect(ArrayAnalysis(testArray).objectContaining({
    length: 10,
  }));
});
