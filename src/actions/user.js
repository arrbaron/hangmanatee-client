const registerUserSuccess = user => ({
  type: "REGISTER_USER_SUCCESS",
  user
});

export const loginUserSuccess = token => ({
  type: "LOGIN_USER_SUCCESS",
  token
});

export const registerUser = (username, password) => {
  return (dispatch) => {
    fetch("http://localhost:8080/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => dispatch(registerUserSuccess(json)))
    .catch(err => console.log(err))
  };
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(json => {
      const { authToken } = json;
      localStorage.setItem("token", authToken);
      dispatch(loginUserSuccess(authToken))
    })
    .catch(err => console.log(err))
  };
};