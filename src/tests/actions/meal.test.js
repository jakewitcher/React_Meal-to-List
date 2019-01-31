import {
  onAddMeal,
  onDeleteMeal,
  onEditMeal,
  onSetMeal
} from "../../store/meal/actions";

const itemList = [
  { name: "bacon", amount: 2, unit: "pounds" },
  { name: "waffles", amount: 12, unit: "items" }
];
const name = "breakfast";
const id = "123wasd";

test("should generate new meal action object", () => {
  const action = onAddMeal({ name, itemList });
  expect(action).toEqual({
    type: "ON_ADD_MEAL",
    meal: {
      name,
      itemList
    }
  });
});

test("should generate delete meal action object", () => {
  const action = onDeleteMeal(id);
  expect(action).toEqual({
    type: "ON_DELETE_MEAL",
    id
  });
});

test("should generate edit meal action object", () => {
  const action = onEditMeal({ name, id, itemList });
  expect(action).toEqual({
    type: "ON_EDIT_MEAL",
    meal: {
      id,
      name,
      itemList
    }
  });
});

test("shouldl generate set meal action object", () => {
  const action = onSetMeal();
  expect(action).toEqual({
    type: "ON_SET_MEAL"
  });
});
