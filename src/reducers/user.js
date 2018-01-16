const initialState = {
  currentUser: {},
  token: ""
};

const user = (state=initialState, action) => {
  switch(action.type) {
    case "REGISTER_USER_SUCCESS":
      console.log(action.user);
      return { ...state, currentUser: action.user };
    case "LOGIN_USER_SUCCESS":
      return { ...state, token: action.token, currentUser: action.user };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};

export default user;