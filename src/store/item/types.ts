import { Action } from "redux";

export interface ItemAll {
  name: string;
  id: string;
}

export interface Item {
  amount: number;
  itemName: string;
  unit: string;
}

export interface onAddItemAction extends Action {
  type: "@@item/ON_ADD_ITEM";
  name: string;
}

export interface onSetItemAction extends Action {
  type: "@@item/ON_SET_ITEM";
}

export type ItemActions = onAddItemAction | onSetItemAction;
