import React from 'react';
import { shallow } from 'enzyme';
import GroceryItems from '../../components/grocery/GroceryItems';
import { groceryLists } from '../fixtures/grocery';

test('should render MealItems correctly', () => {
    const groceryName = groceryLists[0].name;
    const itemList = groceryLists[0].items;
    const wrapper = shallow(<GroceryItems mealName={groceryName} itemList={itemList} />);
    expect(wrapper).toMatchSnapshot();
});