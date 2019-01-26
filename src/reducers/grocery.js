const groceryDefaultState = [];

export default (state = { groceryList: groceryDefaultState }, action) => {
  switch (action.type) {
    case "ADD_GROCERY":
      return {
        ...state,
        groceryList: [...state.groceryList, action.grocery]
      };
    case "DELETE_GROCERY":
      const newGroceryList = state.groceryList.filter(
        ({ id }) => id !== action.id
      );
      return {
        groceryList: newGroceryList
      };

    case "EDIT_GROCERY":
      const editedGroceryList = state.groceryList.map(grocery => {
        if (grocery.id === action.grocery.id) {
          grocery = action.grocery;
          return grocery;
        }
        return grocery;
      });
      return {
        groceryList: editedGroceryList
      };
    case "SET_GROCERY":
      return {
        groceryList: action.lists
      };
    default:
      return state;
  }
};
