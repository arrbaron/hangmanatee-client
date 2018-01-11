import history from "../history";
import { getWordSet, clearSets } from "./wordSets";

const registerUserSuccess = user => ({
  type: "REGISTER_USER_SUCCESS",
  user
});

export const loginUserSuccess = (token, user) => ({
  type: "LOGIN_USER_SUCCESS",
  token,
  user
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
    .then(history.push("/login"))
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
    .then(dispatch(clearSets))
    .then(dispatch(getWordSet(username)))
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
    .then(history.push("/word-set/misc"))
    .catch(err => console.log(err))
  };
};