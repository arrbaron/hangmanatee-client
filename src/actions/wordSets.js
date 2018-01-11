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
    fetch(`http://localhost:8080/api/wordset/${currentUser}/`, {
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
  return dispatch => {
    fetch(`http://localhost:8080/api/wordset/${currentUser}/`) 
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
    fetch(`http://localhost:8080/api/wordset/${currentUser}/${id}`)
      .then(response => response.json())
      .then(json => {
        dispatch(changeWordSetSuccess(json))
      })
      .catch(err => {
        console.log(err)
      })
  };
}