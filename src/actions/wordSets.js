import { API_BASE_URL } from "../config";

export const createWordSetSuccess = wordSet => ({
  type: "CREATE_WORDSET_SUCCESS",
  wordSet
});

export const getWordSetSuccess = wordSets => ({
  type: "GET_WORDSET_SUCCESS",
  wordSets
});

export const changeWordSetSuccess = wordSet => ({
  type: "CHANGE_WORDSET_SUCCESS",
  wordSet
});

export const getLastWordSetSuccess = wordSet => ({
  type: "GET_LAST_WORDSET_SUCCESS",
  wordSet
});

export const deleteWordSetSuccess = wordSet => ({
  type: "DELETE_WORDSET_SUCCESS",
  wordSet
});

export const clearSets = () => ({
  type: "CLEAR_SETS"
});

export const updateCurrentWordSet = wordSet => ({
  type: "UPDATE_CURRENT_WORDSET",
  wordSet
});

export const showTitleEdit = shouldShow => ({
  type: "SHOW_TITLE_EDIT",
  shouldShow
});

export const editTitleSuccess = (wordSet, id) => ({
  type: "EDIT_TITLE_SUCCESS",
  wordSet,
  id
});

export const createCardSuccess = card => ({
  type: "CREATE_CARD_SUCCESS",
  card
});

export const showCardEdit = (shouldShow, id) => ({
  type: "SHOW_CARD_EDIT",
  shouldShow,
  id
});

export const flipCard = (shouldShow, id) => ({
  type: "FLIP_CARD",
  shouldShow,
  id
});

export const editCardSuccess = (updatedCard, wordSetID, cardID) => ({
  type: "EDIT_CARD_SUCCESS",
  updatedCard,
  wordSetID,
  cardID
});

export const deleteCardSuccess = card => ({
  type: "DELETE_CARD_SUCCESS",
  card
});

export const createWordSet = currentUser => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => response.json())
    .then(json => {
      dispatch(createWordSetSuccess(json))
      dispatch(updateCurrentWordSet(json))
    })
    .catch(err => {
      console.log(err)
    })
  };
};

export const getWordSets = currentUser => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/all`) 
      .then(response => response.json())
      .then(json => {
        dispatch(getWordSetSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const getLastWordSet = currentUser => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/last`)
      .then(response => response.json(response))
      .then(json => {
        dispatch(updateCurrentWordSet(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const changeWordSet = id => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(updateCurrentWordSet(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
}

export const deleteWordSet = (id, currentUser) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        dispatch(deleteWordSetSuccess(json))
        dispatch(getLastWordSet(currentUser))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const editTitle = (newTitle, id) => {
  const title = newTitle;
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    })
      .then(response => response.json())
      .then(json => {
        dispatch(editTitleSuccess(json, id))
        dispatch(showTitleEdit(false))
        dispatch(updateCurrentWordSet(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const createCard = id => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${id}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(createCardSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const editCard = (showTerm, newText, wordSetID, cardID) => {
  const updatedData = showTerm ? { term: newText } : { definition: newText };

  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${wordSetID}/cards/${cardID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        dispatch(editCardSuccess(json, wordSetID, cardID))
        dispatch(showCardEdit(false, cardID))
        dispatch(flipCard(showTerm, cardID))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const deleteCard = (wordSetID, cardID) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${wordSetID}/cards/${cardID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then(json => {
        dispatch(deleteCardSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};