import { Reducer } from "redux";
import { GroceryState } from "./types";

const groceryDefaultState: GroceryState = {
  groceryList: []
};

const groceryReducer: Reducer<GroceryState> = (
  state = groceryDefaultState,
  action
) => {
  switch (action.type) {
    case "@@grocery/ADD_GROCERY":
      return {
        ...state,
        groceryList: [...state.groceryList, action.grocery]
      };
    case "@@grocery/DELETE_GROCERY":
      const newGroceryList = state.groceryList.filter(
        ({ id }) => id !== action.id
      );
      return {
        groceryList: newGroceryList
      };

    case "@@grocery/EDIT_GROCERY":
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
    case "@@grocery/SET_GROCERY":
      return {
        groceryList: action.lists
      };
    default:
      return state;
  }
};

export default groceryReducer;
