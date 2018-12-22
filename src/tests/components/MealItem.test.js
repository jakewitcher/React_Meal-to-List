import React from 'react';
import { shallow } from 'enzyme';
import MealItem from '../../components/meal/MealItem';
import { mealItems } from '../fixtures/meal';

let item, deleteMealItem, itemToEdit, wrapper;

beforeEach(() => {
    item = {
        itemName: mealItems[0].itemName,
        amount: mealItems[0].amount,
        unit: mealItems[0].unit,
    };
    deleteMealItem = jest.fn();
    itemToEdit = jest.fn();
    wrapper = shallow(
        <MealItem 
            item={item}
            deleteMealItem={deleteMealItem}
            itemToEdit={itemToEdit}
        />
    );
});

test('should render MealItem correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should delete meal item by id', () => {
    wrapper.find('i').at(1).simulate('click');
    expect(deleteMealItem).toHaveBeenLastCalledWith(item.itemName);
});

test('should select meal item to edit by id', () => {
    wrapper.find('i').at(0).simulate('click');
    expect(itemToEdit).toHaveBeenLastCalledWith(item.itemName);
});