import history from "../history";
import { API_BASE_URL } from "../config";
import { getWordSets, clearSets, createWordSet } from "./wordSets";

const registerUserSuccess = user => {
  history.push("/login");
  return ({
    type: "REGISTER_USER_SUCCESS",
    user
  });
};

export const loginUserSuccess = (token, user) => {
  history.push("/word-set/misc");
  return ({
    type: "LOGIN_USER_SUCCESS",
    token,
    user
  });
};

export const loginUserFailure = err => ({
  type: "LOGIN_USER_FAILURE",
  err
});

export const logoutUser = () => ({
  type: "LOGOUT_USER"
});

export const registerUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/user/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(dispatch(clearSets))
    .then(json => dispatch(registerUserSuccess(json)))
    .then(() => dispatch(createWordSet(username)))
    // .then(history.push("/login"))
    .catch(err => console.log(err))
  };
};

export const loginUser = (username, password) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/auth/login`, {
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
      dispatch(loginUserSuccess(
        authToken,
        {
          username,
          firstName: "",
          lastName: ""
        }
      ))
    })
    .then(dispatch(clearSets))
    .then(dispatch(getWordSets(username)))
    // .then(history.push("/word-set/misc"))
    .catch(err => dispatch(loginUserFailure(err)))
  };
};