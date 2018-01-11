const initialState = {
  currentWordSet: {
    title: "New Word Set",
    cards: [
      {
        term: "",
        definition: ""
      }
    ]
  },
  sets: []
};

const wordSets = (state=initialState, action) => {
  switch(action.type) {
    case "CREATE_WORDSET_SUCCESS":
      console.log(action.wordSet);
      // return { ...state, data: [...state.data, action.wordSet] };
      return { ...state, currentWordSet: action.wordSet, sets: [...state.sets, action.wordSet] };
    case "GET_WORDSET_SUCCESS":
      console.log(action.wordSet);
      if (action.wordSet.length > 0) {
        const latestSet = action.wordSet[action.wordSet.length - 1];
        console.log(action.wordSet);
        return { ...state, currentWordSet: latestSet, sets: state.sets.concat(action.wordSet) };
      }
      break;
    case "CLEAR_SETS":
      // state.currentWordSet = {};
      // state.sets = [];
      // state.sets.length = 0;
      console.log("clearing sets");
      return { ...state, currentWordSet: {}, sets: []};
      // return state;
    default:
      return state;
  }
};

export default wordSets;