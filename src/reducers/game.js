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
  return state;
};

export default game;