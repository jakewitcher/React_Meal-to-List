import React from 'react';
import { shallow } from 'enzyme';
import GroceryItem from '../../components/grocery/GroceryItem';
import { groceryItems } from '../fixtures/grocery';

let item, deleteGroceryItem, wrapper;

beforeEach(() => {
    item = {
        itemName: groceryItems[0].itemName,
        amount: groceryItems[0].amount,
        unit: groceryItems[0].unit,
        id: groceryItems[0].id,
    };
    deleteGroceryItem = jest.fn();
    wrapper = shallow(
        <GroceryItem 
            item={item}
            deleteGroceryItem={deleteGroceryItem}
        />
    );
});

test('should render GroceryItem correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should delete grocery item by id', () => {
    wrapper.find('i').simulate('click');
    expect(deleteGroceryItem).toHaveBeenLastCalledWith(item.id);
});