const initialState = {
  playing: false,
  category: "verbs",
  currentCard: {
    term: "undulate",
    definition: "to move like a wave"
  },
  guesses: ["a", "e", "g"],
  guessesLeft: 4
};

const game = (state=initialState, action) => {
  switch(action.type) {
    case "START_GAME":
      const card = action.currentWordSet.cards.find(card => card._id === action.cardID);
      return { ...state, playing: true, currentCard: card, guesses: [], guessesLeft: 0 };
    default:
      return state
  }
};

export default game;