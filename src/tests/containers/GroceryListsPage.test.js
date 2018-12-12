import React from 'react';
import { shallow } from 'enzyme';
import { GroceryListsPage } from '../../containers/GroceryListsPage';
import { groceriesList } from '../fixtures/grocery';

test('should render MealListsPage correctly', () => {
    const groceryLists = { groceryList: groceriesList };
    const wrapper = shallow(<GroceryListsPage groceryLists={groceryLists} />);
    expect(wrapper).toMatchSnapshot();
});