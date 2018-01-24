const initialState = {
  currentUser: {},
  token: "",
  error: ""
};

const user = (state=initialState, action) => {
  switch(action.type) {
    case "REGISTER_USER_SUCCESS":
      return { ...state, currentUser: action.user };
    case "LOGIN_USER_SUCCESS":
      return { ...state, token: action.token, currentUser: action.user, error: "" };
    case "LOGIN_USER_FAILURE":
      return { ...state, error: action.err }
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default user;