import { combineReducers, Dispatch, Reducer } from "redux";

import mealReducer from "./meal/reducers";
import itemsReducer from "../store/item/reducers";
import groceryReducer from "./grocery/reducers";
import authReducer from "./auth/reducers";
import { MealState } from "./meal/types";
import { ItemState } from "../store/item/types";
import { GroceryState } from "./grocery/types";
import { AuthState } from "./auth/types";

export interface ApplicationState {
  meals: MealState;
  items: ItemState;
  groceryLists: GroceryState;
  auth: AuthState;
}

export const reducers = combineReducers({
  meals: mealReducer,
  items: itemsReducer,
  groceryLists: groceryReducer,
  auth: authReducer
});
