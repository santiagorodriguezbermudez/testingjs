const CaesarCypher = (string, key = null) => {
  let newString = '';
  let asciiCode;
  let newCharacter;

  if (typeof string !== 'string') {
    throw new Error('Parameters not included');
  }
  if (key == null) {
    newString = string;
  } else {
    [...string].forEach((character) => {
      if (character.match(/^[A-Z]+$/)) {
        asciiCode = character.charCodeAt;
        asciiCode = ((key - 65) % 26) + 65;
        newCharacter = String.fromCharCode(asciiCode);
        newString += newCharacter;
      } else if (character.match(/^[a-z]+$/)) {
        asciiCode = character.charCodeAt;
        asciiCode = ((key - 90) % 26) + 90;
        newCharacter = String.fromCharCode(asciiCode);
        newString += newCharacter;
      } else {
        newString += character;
      }
    });
  }
  return newString;
};

export default CaesarCypher;