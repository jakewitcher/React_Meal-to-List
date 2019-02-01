import { Action } from "redux";

export interface ItemState {
  itemsAll: ItemAll[];
}

export interface ItemAll {
  name: string;
  id: string;
}

export interface Item {
  amount: number;
  itemName: string;
  unit: string;
}

export interface OnAddItemAction extends Action {
  type: "@@item/ON_ADD_ITEM";
  name: string;
}

export interface OnSetItemAction extends Action {
  type: "@@item/ON_SET_ITEM";
}

export type ItemActions = OnAddItemAction | OnSetItemAction;
