export const startGame = (cardID, displayedWord, currentWordSet) => {
  return ({
    type: "START_GAME",
    cardID,
    currentWordSet,
    displayedWord
  });
};

export const correctGuess = (newDisplayedWord, letter) => ({
  type: "CORRECT_GUESS",
  newDisplayedWord,
  letter
});

export const incorrectGuess = (letter, guessesLeft) => ({
  type: "INCORRECT_GUESS",
  letter,
  guessesLeft
});

export const gameOver = status => ({
  type: "GAME_OVER",
  status
});