import { Action } from "redux";
import { Item } from "../item/types";

export interface MealState {
  mealList: Meal[];
}

export interface Meal {
  name?: string;
  itemList?: Item[];
  id?: string;
}

export interface OnAddMealAction extends Action {
  type: "@@meal/ON_ADD_MEAL";
  meal: Meal;
}

export interface OnDeleteMealAction extends Action {
  type: "@@meal/ON_DELETE_MEAL";
  id: string;
}

export interface OnEditMealAction extends Action {
  type: "@@meal/ON_EDIT_MEAL";
  meal: Meal;
}

export interface OnSetMealAction extends Action {
  type: "@@meal/ON_SET_MEAL";
}

export type MealActions =
  | OnAddMealAction
  | OnDeleteMealAction
  | OnEditMealAction
  | OnSetMealAction;
