import React from 'react';
import { shallow } from 'enzyme';
import { GroceryPage } from '../../containers/GroceryPage';
import { mealsList } from '../fixtures/meal';

test('should render MealPage correctly', () => {
    const meals = { mealList: mealsList };
    const wrapper = shallow(<GroceryPage meals={meals} />);
    expect(wrapper).toMatchSnapshot();
});