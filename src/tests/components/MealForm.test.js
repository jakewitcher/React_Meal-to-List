import React from 'react';
import { shallow } from 'enzyme';
import MealForm from '../../components/meal/MealForm';
import { mealItems } from '../fixtures/meal';

let title, 
    mealName, 
    mealNameChange, 
    itemName, 
    itemNameChange, 
    amount, 
    amountChange, 
    unit, 
    unitChange, 
    addItem,
    itemList,
    mealId,
    updateMeal, 
    resetMeal,
    wrapper;

    beforeEach(() => {
        title = 'meal';
        mealName = 'breakfast';
        itemName = 'bacon';
        amount = 5;
        unit = 'pounds';
        itemList = mealItems;
        mealId = 1;
        mealNameChange = jest.fn();
        itemNameChange = jest.fn();
        amountChange = jest.fn();
        unitChange = jest.fn();
        addItem = jest.fn();
        updateMeal = jest.fn();
        resetMeal = jest.fn();
        wrapper = shallow(
            <MealForm 
                title ={title}
                mealName ={mealName}
                itemName={itemName}
                amount={amount}
                unit={unit}
                mealNameChange={mealNameChange}
                itemNameChange={itemNameChange}
                amountChange={amountChange}
                unitChange={unitChange}
                addItem={addItem}
                updateMeal={updateMeal}
                resetMeal={resetMeal}
            />
        );
    });

    test('should render MealForm correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should set meal name', () => {
        const value = { target: { value: mealName }};
        wrapper.find('input').at(0).simulate('change', value);
        expect(mealNameChange).toHaveBeenLastCalledWith(value);
    });

    test('should set item name', () => {
        const value = { target: { value: itemName }};
        wrapper.find('input').at(1).simulate('change', value);
        expect(itemNameChange).toHaveBeenLastCalledWith(value);
    });

    test('should set item amount', () => {
        const value = { target: { value: amount }};
        wrapper.find('input').at(2).simulate('change', value);
        expect(amountChange).toHaveBeenLastCalledWith(value);
    });

    test('should set item unit', () => {
        const value = { target: { value: unit }};
        wrapper.find('select').simulate('change', value);
        expect(unitChange).toHaveBeenLastCalledWith(value);
    });

    test('should add item to meal item list', () => {
        wrapper.find('button').at(0).simulate('click');
        expect(addItem).toHaveBeenCalled();
    });

    test('should add or edit meal and reset state', () => {
        wrapper.find('button').at(1).simulate('click');
        expect(updateMeal).toHaveBeenCalled();
        expect(resetMeal).toHaveBeenCalled();
    });