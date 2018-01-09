const initialState = {
  currentUser: {},
  token: ""
};

const user = (state=initialState, action) => {
  switch(action.type) {
    case "REGISTER_USER_SUCCESS":
      window.location = "http://localhost:3000/login";
      return { ...state, currentUser: action.user };

    case "LOGIN_USER_SUCCESS":
    window.location = "http://localhost:3000/word-set/misc"
    return { ...state, token: action.token };
      default:
      return state;
  }
};

export default user;