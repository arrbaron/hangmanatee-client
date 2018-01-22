const initialState = {
  currentWordSet: {
    title: "New Word Set",
    cards: [
      {
        term: "",
        definition: "",
        showEdit: false,
        showTerm: true
      }
    ]
  },
  sets: [],
  showTitleEdit: false
};

const wordSets = (state=initialState, action) => {
  switch(action.type) {
    case "UPDATE_CURRENT_WORDSET":
      return { ...state, currentWordSet: action.wordSet };
    case "CREATE_WORDSET_SUCCESS":
      return { ...state, sets: [...state.sets, action.wordSet] };
    case "GET_WORDSET_SUCCESS":
      if (action.wordSets.length > 0) {
        const latestSet = action.wordSets[action.wordSets.length - 1];
        return { ...state, currentWordSet: latestSet, sets: state.sets.concat(action.wordSets) };
      }
      return state;
    case "DELETE_WORDSET_SUCCESS":
      if (action.wordSet) {
        return { ...state, sets: state.sets.filter(set => set._id !== action.wordSet._id) };
      }
      return state;
    case "CLEAR_SETS":
      return { ...state, currentWordSet: {}, sets: []};
    case "SHOW_TITLE_EDIT":
      return { ...state, showTitleEdit: action.shouldShow };
    case "EDIT_TITLE_SUCCESS":
      return { ...state, sets: state.sets.map(set => set._id === action.wordSet._id ? action.wordSet : set)};
    case "CREATE_CARD_SUCCESS":
    return {
       ...state, 
       currentWordSet: {
         ...state.currentWordSet,
         cards: [ ...state.currentWordSet.cards, action.card],
       },
        sets: state.sets.map(set => set._id === state.currentWordSet._id ? { ...set, cards: [...set.cards, action.card] } : set)
    }
    case "SHOW_CARD_EDIT":
      return {
        ...state,
        currentWordSet: {
          ...state.currentWordSet,
          cards: state.currentWordSet.cards.map(card => card._id === action.id ? { ...card, showEdit: action.shouldShow } : card)
        }
      };
    case "FLIP_CARD":
      return {
        ...state,
        currentWordSet: {
          ...state.currentWordSet,
          cards: state.currentWordSet.cards.map(card => card._id === action.id ? { ...card, showTerm: action.shouldShow } : card)
        }
      };
    case "EDIT_CARD_SUCCESS":
      return {
        ...state,
        currentWordSet: {
          ...state.currentWordSet,
          cards: state.currentWordSet.cards.map(card => card._id === action.cardID ? Object.assign(card, action.updatedCard) : card)
        }
      };
    case "DELETE_CARD_SUCCESS":
      return {
        ...state,
        currentWordSet: {
          ...state.currentWordSet,
          cards: state.currentWordSet.cards.filter(card => card._id !== action.card._id)
        }
      };
    default:
      return state;
  }
};

export default wordSets;