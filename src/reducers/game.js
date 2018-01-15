const initialState = {
  status: "idle",
  playing: false,
  currentCard: {
    term: "",
    definition: ""
  },
  guesses: [],
  guessesLeft: 7,
  message: "Guess the word!",
  displayedWord: ["s", "e", "c", "r", "e", "t"]
};

const game = (state=initialState, action) => {
  switch(action.type) {
    case "START_GAME":
      const card = action.currentWordSet.cards.find(card => card._id === action.cardID);
      return { ...state, status: "playing", playing: true, currentCard: card, guesses: [], guessesLeft: 7, displayedWord: action.displayedWord };
    case "CORRECT_GUESS":
      return {
        ...state,
        displayedWord: action.newDisplayedWord,
        guesses: [ ...state.guesses, action.letter ]
      };
    case "INCORRECT_GUESS":
      return {
        ...state,
        guesses: [ ...state.guesses, action.letter ],
        guessesLeft: action.guessesLeft
      };
    case "GAME_OVER":
      return { ...state, status: action.status};
    default:
      return state;
  }
};

export default game;