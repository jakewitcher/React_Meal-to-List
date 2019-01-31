import { combineReducers, Dispatch, Reducer } from "redux";

import mealReducer from "./meal/reducers";
import itemsReducer from "../store/item/reducers";
import groceryReducer from "./grocery/reducers";
import authReducer from "./auth/reducers";

export const reducers = combineReducers({
  meals: mealReducer,
  items: itemsReducer,
  groceryLists: groceryReducer,
  auth: authReducer
});
