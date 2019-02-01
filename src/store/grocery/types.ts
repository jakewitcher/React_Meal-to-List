import { Action } from "redux";
import { Item } from "../item/types";

// grocery state
export interface GroceryState {
  groceryList: Grocery[];
}

export interface Grocery {
  name?: string;
  id?: string;
  itemList?: Item[];
  groceryListMeals?: GroceryMeals;
}

export interface GroceryMeals {
  [propName: string]: number;
}

// grocery actions
export interface OnAddGroceryAction extends Action {
  type: "@@grocery/ON_ADD_GROCERY";
  grocery: Grocery;
}

export interface OnDeleteGroceryAction extends Action {
  type: "@@grocery/ON_DELETE_GROCERY";
  id: string;
}

export interface OnEditGroceryAction extends Action {
  type: "@@grocery/ON_EDIT_GROCERY";
  grocery: Grocery;
}

export interface OnSetGroceryAction extends Action {
  type: "@@grocery/ON_SET_GROCERY";
}

export type GroceryActions =
  | OnAddGroceryAction
  | OnDeleteGroceryAction
  | OnEditGroceryAction
  | OnSetGroceryAction;
