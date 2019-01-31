import { ActionCreator } from "redux";
import { Grocery, GroceryActions } from "./types";

export const onAddGrocery: ActionCreator<GroceryActions> = ({
  name = "",
  itemList = [],
  groceryListMeals = {}
}: Grocery = {}) => ({
  type: "@@grocery/ON_ADD_GROCERY",
  grocery: {
    name,
    itemList,
    groceryListMeals
  }
});

export const onDeleteGrocery: ActionCreator<GroceryActions> = (
  id: string = ""
) => ({
  type: "@@grocery/ON_DELETE_GROCERY",
  id
});

export const onEditGrocery: ActionCreator<GroceryActions> = ({
  name = "",
  id = "",
  itemList = [],
  groceryListMeals = {}
}: Grocery = {}) => ({
  type: "@@grocery/ON_EDIT_GROCERY",
  grocery: {
    id,
    name,
    itemList,
    groceryListMeals
  }
});

export const onSetGrocery: ActionCreator<GroceryActions> = () => ({
  type: "@@grocery/ON_SET_GROCERY"
});
