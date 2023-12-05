const repeatedLetter = (input) => {
  const arrayFromInput = input.toLowerCase().replace(/[^a-z0-9]/ig, '').split('');
  const uniqueLetters = [...new Set(arrayFromInput)];

  let theLargestValue = 0;
  let theMostRepeatedLetter = '';

  uniqueLetters.forEach(letter => {
    const currentValue = arrayFromInput.filter(a => a === letter).length;

    if(theLargestValue < currentValue) {
      theLargestValue = currentValue;
      theMostRepeatedLetter = letter;
    }
  })

  return theMostRepeatedLetter;
}

module.exports = repeatedLetter;