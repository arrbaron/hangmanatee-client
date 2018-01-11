import { API_BASE_URL } from "../config";

export const createWordSetSuccess = wordSet => ({
  type: "CREATE_WORDSET_SUCCESS",
  wordSet
});

export const getWordSetSuccess = wordSet => ({
  type: "GET_WORDSET_SUCCESS",
  wordSet
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

export const showTitleEdit = shouldShow => ({
  type: "SHOW_TITLE_EDIT",
  shouldShow
});

export const editTitleSuccess = (wordSet, id) => ({
  type: "EDIT_TITLE_SUCCESS",
  wordSet,
  id
});

export const createWordSet = (currentUser) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({currentUser})
    })
    .then(response => response.json())
    .then(json => {
      dispatch(createWordSetSuccess(json))
    })
    .catch(err => {
      console.log(err)
    })
  };
};

export const getWordSets = currentUser => {
  console.log(API_BASE_URL);
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/`) 
      .then(response => response.json())
      .then(json => {
        dispatch(getWordSetSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const getLastWordSet = (currentUser) => {
  console.log(API_BASE_URL);
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/last`)
      .then(response => response.json(response))
      .then(json => {
        dispatch(getLastWordSetSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
};

export const changeWordSet = (id, currentUser) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(changeWordSetSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
}

export const deleteWordSet = (id, currentUser) => {
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ currentUser })
    })
      .then(response => response.json())
      .then(json => {
        dispatch(deleteWordSetSuccess(json))
        dispatch(getLastWordSet(currentUser))
      })
      .then(() => console.log(currentUser))
      .catch(err => {
        console.log(err)
      })
  };
};

export const editTitle = (newTitle, id, currentUser) => {
  console.log(newTitle);
  const title = newTitle;
  return dispatch => {
    fetch(`${API_BASE_URL}/wordset/${currentUser}/${id}`, {
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
      })
      .catch(err => {
        console.log(err)
      })
  };
};