import React from 'react';
import { shallow } from 'enzyme';
import { Meal } from '../../components/meal/Meal';
import { mealsList } from '../fixtures/meal';

let id, name, onDeleteMealAsync, wrapper;

beforeEach(() => {
    id = mealsList[0].id;
    name = mealsList[0].name;
    onDeleteMealAsync = jest.fn();
    wrapper = shallow(<Meal name={name} id={id} onDeleteMealAsync={onDeleteMealAsync} />);
});

test('should render Meal correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should delete meal by id', () => {
    wrapper.find('i').at(1).simulate('click');
    expect(onDeleteMealAsync).toHaveBeenLastCalledWith(id);
});