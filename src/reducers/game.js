const initialState = {
  status: "idle",
  currentCard: {
    term: "",
    definition: ""
  },
  guesses: [],
  guessesLeft: 7,
  message: "",
  displayedWord: ["s", "e", "c", "r", "e", "t"],
  answerChosen: false
};

const game = (state=initialState, action) => {
  switch(action.type) {
    case "START_GAME":
      const card = action.currentWordSet.cards.find(card => card._id === action.cardID);
      return { ...state, status: "playing", currentCard: card, guesses: [], guessesLeft: 7, displayedWord: action.displayedWord };
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
      return { ...state, status: action.status };
    case "CHOOSE_ANSWER":
      return { ...state, message: action.message, answerChosen: true };
    case "RESET_GAME":
      return Object.assign(state, initialState);
    default:
      return state;
  }
};

export default game;