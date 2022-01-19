const redux = require("redux");
const CreateStore = redux.createStore;
const initialState = {
  user: "Guest",
};

const rootReducer = (state = initialState, action) => {
  //console.log("inside root reducer");
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

const store = CreateStore(rootReducer);
console.log(store.getState());

//Subscribe
store.subscribe(() => {
  console.log("Subscription::::", store.getState());
});

//Dispatching
store.dispatch({ type: "CHANGE_USER", payload: { user: "Adil" } });
//console.log(store.getState());
store.dispatch({ type: "LOGOUT" });
//console.log(store.getState());

//Subscribe
store.subscribe(() => {
  console.log(store.getState());
});
