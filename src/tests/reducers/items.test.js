import itemsReducer from "../../store/item/reducers";
import { itemsList } from "../fixtures/items";

test("should set default state", () => {
  const state = itemsReducer(undefined, { type: "@@INIT" });
  expect(state.itemsAll).toEqual([]);
});

test("should add item", () => {
  const item = itemsList[0];
  const name = itemsList[0].name;
  const id = itemsList[0].id;

  const action = { type: "ADD_ITEM", name, id };
  const state = itemsReducer(undefined, action);
  expect(state.itemsAll).toEqual([item]);
});

test("should set initial state for items in Redux store", () => {
  const items = itemsList;
  const action = { type: "SET_ITEM", items };
  const state = itemsReducer(undefined, action);
  expect(state.itemsAll).toEqual(items);
});
