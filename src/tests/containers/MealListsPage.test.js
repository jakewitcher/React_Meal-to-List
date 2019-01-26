import React from "react";
import { shallow } from "enzyme";
import { MealListsPage } from "../../containers/MealListsPage";
import { mealsList } from "../fixtures/meal";

test("should render MealListsPage correctly", () => {
  const meals = { mealList: mealsList };
  const wrapper = shallow(<MealListsPage meals={meals} />);
  expect(wrapper).toMatchSnapshot();
});
