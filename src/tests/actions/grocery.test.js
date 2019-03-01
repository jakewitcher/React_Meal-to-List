import {
  onAddGrocery,
  onDeleteGrocery,
  onEditGrocery,
  onSetGrocery
} from "../../store/grocery/actions";

const itemList = [
  { name: "bacon", amount: 2, unit: "pounds" },
  { name: "waffles", amount: 12, unit: "items" }
];
const name = "Monday Meals";
const groceryListMeals = { abcid: 2, defid: 1 };
const id = "123wasd";

test("should generate add grocery action object", () => {
  const action = onAddGrocery({ name, itemList, groceryListMeals });
  expect(action).toEqual({
    type: "@@grocery/ON_ADD_GROCERY",
    grocery: {
      name,
      itemList,
      groceryListMeals
    }
  });
});

test("should generate delete grocery action object", () => {
  const action = onDeleteGrocery(id);
  expect(action).toEqual({
    type: "@@grocery/ON_DELETE_GROCERY",
    id
  });
});

test("should generate edit grocery action object", () => {
  const action = onEditGrocery({ name, itemList, id, groceryListMeals });
  expect(action).toEqual({
    type: "@@grocery/ON_EDIT_GROCERY",
    grocery: {
      id,
      name,
      itemList,
      groceryListMeals
    }
  });
});

test("should generate set grocery action object", () => {
  const action = onSetGrocery();
  expect(action).toEqual({
    type: "@@grocery/ON_SET_GROCERY"
  });
});
