const initialState = {
  test: "",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export { appReducer };
