import React from "react";
import { shallow } from "enzyme";
import { MealPage } from "../../containers/MealPage";

test("should render MealPage correctly", () => {
  const wrapper = shallow(<MealPage />);
  expect(wrapper).toMatchSnapshot();
});
