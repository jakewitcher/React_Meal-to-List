import { ActionCreator } from "redux";
import { ItemActions } from "./types";

export const onAddItem: ActionCreator<ItemActions> = (name: string = "") => ({
  type: "@@item/ON_ADD_ITEM",
  name
});

export const onSetItem: ActionCreator<ItemActions> = () => ({
  type: "@@item/ON_SET_ITEM"
});
