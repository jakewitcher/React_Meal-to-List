import { Reducer } from "redux";
import { MealState, MealActions } from "./types";

const mealDefaultState: MealState = {
  mealList: []
};

const mealReducer: Reducer<MealState> = (state = mealDefaultState, action) => {
  switch (action.type) {
    case "@@meal/ADD_MEAL":
      return {
        ...state,
        mealList: [...state.mealList, action.meal]
      };

    case "@@meal/DELETE_MEAL":
      const newMealList = state.mealList.filter(({ id }) => id !== action.id);
      return {
        mealList: newMealList
      };

    case "@@meal/EDIT_MEAL":
      const editedMealList = state.mealList.map(meal => {
        if (meal.id === action.meal.id) {
          meal = action.meal;
          return meal;
        }
        return meal;
      });
      return {
        mealList: editedMealList
      };

    case "@@meal/SET_MEAL":
      return {
        mealList: action.meals
      };

    default:
      return state;
  }
};

export default mealReducer;
