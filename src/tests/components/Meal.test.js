import React from "react";
import { shallow } from "enzyme";
import { Meal } from "../../components/Meal";
import { mealsList } from "../fixtures/meal";

let id, name, itemList, onDeleteMeal, wrapper;

beforeEach(() => {
  id = mealsList[0].id;
  name = mealsList[0].name;
  itemList = mealsList[0].itemList;
  onDeleteMeal = jest.fn();
  wrapper = shallow(
    <Meal name={name} id={id} itemList={itemList} onDeleteMeal={onDeleteMeal} />
  );
});

test("should render Meal correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should delete meal by id", () => {
  wrapper
    .find("i")
    .at(1)
    .simulate("click");
  expect(onDeleteMeal).toHaveBeenLastCalledWith(id);
});
