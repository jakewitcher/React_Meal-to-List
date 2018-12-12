import React from 'react';
import { shallow } from 'enzyme';
import MealItems from '../../components/meal/MealItems';
import { mealsList } from '../fixtures/meal';

test('should render MealItems correctly', () => {
    const mealName = mealsList[0].name;
    const itemList = mealsList[0].itemList;
    const wrapper = shallow(<MealItems mealName={mealName} itemList={itemList} />);
    expect(wrapper).toMatchSnapshot();
});

