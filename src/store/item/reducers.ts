import { Reducer } from "redux";
import { ItemState } from "./types";

const itemsAllDefaultState: ItemState = {
  itemsAll: []
};

const itemsReducer: Reducer<ItemState> = (
  state = itemsAllDefaultState,
  action
) => {
  switch (action.type) {
    case "@@item/ADD_ITEM":
      state.itemsAll.push({
        name: action.name,
        id: action.id
      });
      return state;
    case "@@item/SET_ITEM":
      return {
        itemsAll: action.items
      };
    default:
      return state;
  }
};

export default itemsReducer;
