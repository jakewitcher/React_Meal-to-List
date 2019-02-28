import { ActionCreator } from "redux";
import { Meal, MealActions } from "./types";

export const onAddMeal: ActionCreator<MealActions> = ({
  name = "",
  itemList = []
}: Meal = {}) => ({
  type: "@@meal/ON_ADD_MEAL",
  meal: {
    name,
    itemList
  }
});

export const onDeleteMeal: ActionCreator<MealActions> = (id: string = "") => ({
  type: "@@meal/ON_DELETE_MEAL",
  id
});

export const onEditMeal: ActionCreator<MealActions> = ({
  name = "",
  itemList = [],
  id = ""
}: Meal = {}) => ({
  type: "@@meal/ON_EDIT_MEAL",
  meal: {
    id,
    name,
    itemList
  }
});

export const onSetMeal: ActionCreator<MealActions> = () => ({
  type: "@@meal/ON_SET_MEAL"
});
