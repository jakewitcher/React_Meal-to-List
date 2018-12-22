import React from 'react';
import { shallow } from 'enzyme';
import { GroceryDetailsPage } from '../../containers/GroceryDetailsPage';
import { groceryLists } from '../fixtures/grocery';

test('should correctly render GroceryDetailsPage', () => {
    const grocery = groceryLists[0]
    const wrapper = shallow(<GroceryDetailsPage 
        grocery={grocery}
    />);
    expect(wrapper).toMatchSnapshot();
});