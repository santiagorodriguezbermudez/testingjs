const getCaesarValue = (character, key, asciiFactor) => {
  let asciiCode;

  asciiCode = character.charCodeAt(0);
  asciiCode -= asciiFactor;
  asciiCode += key;
  asciiCode %= 26;
  if (asciiCode < 0) {
    asciiCode = 26 + asciiCode;
  }
  asciiCode += asciiFactor;

  return String.fromCharCode(asciiCode);
};

const CaesarCypher = (string, key = null) => {
  let newString = '';
  let asciiFactor;

  if (typeof string !== 'string') {
    throw new Error('Parameter is not a string');
  }
  if (key == null) {
    newString = string;
  } else {
    [...string].forEach((character) => {
      if (character.match(/^[A-Z]+$/)) {
        asciiFactor = 65;
        newString += getCaesarValue(character, key, asciiFactor);
      } else if (character.match(/^[a-z]+$/)) {
        asciiFactor = 97;
        newString += getCaesarValue(character, key, asciiFactor);
      } else {
        newString += character;
      }
    });
  }
  return newString;
};

export default CaesarCypher;