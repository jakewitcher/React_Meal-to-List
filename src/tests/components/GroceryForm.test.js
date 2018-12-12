import React from 'react';
import { shallow } from 'enzyme';
import GroceryForm from '../../components/grocery/GroceryForm';
import { mealsList } from '../fixtures/meal'

let title, 
    groceryName, 
    groceryNameChange, 
    selectedMeal,
    selectedMealChange,
    addMealToList,
    updateGrocery, 
    resetGrocery,
    meals,
    wrapper;

beforeEach(() => {
    title = 'grocery';
    groceryName = 'Monday Meals';
    selectedMeal = mealsList[0];
    meals = { mealList: mealsList };
    groceryNameChange = jest.fn();
    selectedMealChange = jest.fn();
    addMealToList = jest.fn();
    updateGrocery = jest.fn();
    resetGrocery = jest.fn();
    wrapper = shallow(
        <GroceryForm 
            title ={title}
            meals={meals}
            groceryName ={groceryName}
            groceryNameChange={groceryNameChange}
            selectedMeal={selectedMeal}
            selectedMealChange ={selectedMealChange}
            addMealToList={addMealToList}
            updateGrocery={updateGrocery}
            resetGrocery={resetGrocery}
        />
    );
});

test('should render GroceryForm correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should set grocery name', () => {
    const value = { target: { value: groceryName }};
    wrapper.find('input').at(0).simulate('change', value);
    expect(groceryNameChange).toHaveBeenLastCalledWith(value);
});

test('should set selected meal', () => {
    const value = { target: { value: selectedMeal }};
    wrapper.find('select').simulate('change', value);
    expect(selectedMealChange).toHaveBeenLastCalledWith(value);
});

test('should add selected meal items to grocery list', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(addMealToList).toHaveBeenCalled();
});

test('should add or edit grocery list and reset state', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(updateGrocery).toHaveBeenCalled();
    expect(resetGrocery).toHaveBeenCalled();
});