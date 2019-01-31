import { onAddItem, onSetItem } from "../../store/item/actions";

test("should generate add item action object", () => {
  const name = "bacon";
  const action = onAddItem(name);
  expect(action).toEqual({
    type: "ON_ADD_ITEM",
    name
  });
});

test("should generate set action object", () => {
  const action = onSetItem();
  expect(action).toEqual({
    type: "ON_SET_ITEM"
  });
});
