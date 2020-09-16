const ArrayAnalysis = (array) => {
  if(array.some((elem) => typeof elem === 'string')) {
    throw new Error('The array contains a string');
  }

  const average = array.reduce((a, b) => a + b) / array.length;
  const maximum = Math.max(...array);
  const minimum = Math.min(...array);
  const length = array.length;

  return { average, maximum, minimum, length}
};

export default ArrayAnalysis;
