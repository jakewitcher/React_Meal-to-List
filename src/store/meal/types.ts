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

export interface onAddMealAction extends Action {
  type: "@@meal/ON_ADD_MEAL";
  meal: {
    name: string;
    itemList: Item[];
  };
}

export interface onDeleteMealAction extends Action {
  type: "@@meal/ON_DELETE_MEAL";
  id: string;
}

export interface onEditMealAction extends Action {
  type: "@@meal/ON_EDIT_MEAL";
  meal: {
    id: string;
    name: string;
    itemList: Item[];
  };
}

export interface onSetMealAction extends Action {
  type: "@@meal/ON_SET_MEAL";
}

export type MealActions =
  | onAddMealAction
  | onDeleteMealAction
  | onEditMealAction
  | onSetMealAction;
