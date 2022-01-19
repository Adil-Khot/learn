const initialState = {
  user: "Guest",
};

const reducer = (state = initialState, action) => {
  if (action.type === "CHANGE_USER") {
    return {
      ...state,
      user: action.payload.user,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

export default reducer;
