import mealReducer from "../../reducers/meal";
import { mealsList, dinnerEditItems } from "../fixtures/meal";

test("should set default state", () => {
  const state = mealReducer(undefined, { type: "@@INIT" });
  expect(state.mealList).toEqual([]);
});

test("should add meal", () => {
  const meal = mealsList[0];
  const action = { type: "ADD_MEAL", meal };
  const state = mealReducer(undefined, action);
  expect(state.mealList).toEqual([meal]);
});

test("should delete meal by id", () => {
  const id = 103;
  const action = { type: "DELETE_MEAL", id };
  const state = mealReducer({ mealList: mealsList }, action);
  expect(state.mealList).toEqual([mealsList[0], mealsList[1]]);
});

test("should not delete meal if id not found", () => {
  const id = 105;
  const action = { type: "DELETE_MEAL", id };
  const state = mealReducer({ mealList: mealsList }, action);
  expect(state.mealList).toEqual(mealsList);
});

test("should edit meal by id", () => {
  const name = "dinner";
  const id = 103;
  const dinnerEdit = { name, itemList: dinnerEditItems, id };
  const action = { type: "EDIT_MEAL", meal: dinnerEdit };
  const state = mealReducer({ mealList: mealsList }, action);
  expect(state.mealList[2]).toEqual(dinnerEdit);
});

test("should not edit meal if id not found", () => {
  const name = "dinner";
  const id = 105;
  const dinnerEdit = { name, itemList: dinnerEditItems, id };
  const action = { type: "EDIT_MEAL", meal: dinnerEdit };
  const state = mealReducer({ mealList: mealsList }, action);
  expect(state.mealList).toEqual(mealsList);
});

test("should set initial meal state for Redux store", () => {
  const meals = mealsList;
  const action = { type: "SET_MEAL", meals };
  const state = mealReducer(undefined, action);
  expect(state.mealList).toEqual(meals);
});
