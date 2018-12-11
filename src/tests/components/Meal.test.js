import React from 'react';
import { shallow } from 'enzyme';
import { Meal } from '../../components/meal/Meal';
import { mealsList } from '../fixtures/meal';

test('should render Meal correctly', () => {
    const id = mealsList[0].id;
    const name = mealsList[0].name;
    const wrapper = shallow(<Meal name={name} id={id} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render Meal correctly', () => {
    const id = mealsList[0].id;
    const name = mealsList[0].name;
    const deleteMeal = jest.fn();
    const wrapper = shallow(<Meal name={name} id={id} deleteMeal={deleteMeal} />);
    wrapper.find('i').at(1).simulate('click');
    expect(deleteMeal).toHaveBeenLastCalledWith(id);
});