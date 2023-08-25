const initialState = {
  budget: 0
};

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_BUDGET":
      return {
        ...state,
        budget: action.payload
      };
    default:
      return state;
  }
};

export default budgetReducer;
