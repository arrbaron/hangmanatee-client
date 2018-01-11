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

export const clearSets = () => ({
  type: "CLEAR_SETS"
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