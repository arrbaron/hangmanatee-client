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
  sets: [],
  showTitleEdit: false
};

const wordSets = (state=initialState, action) => {
  switch(action.type) {
    case "CREATE_WORDSET_SUCCESS":
      return { ...state, currentWordSet: action.wordSet, sets: [...state.sets, action.wordSet] };
    case "GET_WORDSET_SUCCESS":
      console.log(action.wordSet);
      if (action.wordSet.length > 0) {
        const latestSet = action.wordSet[action.wordSet.length - 1];
        return { ...state, currentWordSet: latestSet, sets: state.sets.concat(action.wordSet) };
      }
      return state;
    case "GET_LAST_WORDSET_SUCCESS":
      console.log(action.wordSet);
      if (action.wordSet) {
        return { ...state, currentWordSet: action.wordSet };
      }
      console.log("last wordset doesn't exist");
      return state;
    case "CHANGE_WORDSET_SUCCESS":
      return { ...state, currentWordSet: action.wordSet };
    case "DELETE_WORDSET_SUCCESS":
      console.log(action.wordSet);
      if (action.wordSet) {
        return { ...state, sets: state.sets.filter(set => set._id !== action.wordSet._id) };
      }
      console.log("nothing to delete");
      return state;
    case "CLEAR_SETS":
      console.log("clearing sets");
      return { ...state, currentWordSet: {}, sets: []};
    case "SHOW_TITLE_EDIT":
      console.log("show title edit");
      return { ...state, showTitleEdit: action.shouldShow };
    case "EDIT_TITLE_SUCCESS":
      console.log("EDIT TITLE SUCCESS");
      return { ...state, sets: state.sets.map(set => set._id === action.wordSet._id ? action.wordSet : set), currentWordSet: action.wordSet};
    default:
      return state;
  }
};

export default wordSets;