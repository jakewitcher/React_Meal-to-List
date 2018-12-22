import React from 'react';
import { shallow } from 'enzyme';
import { MealDetailsPage } from '../../containers/MealDetailsPage';
import { mealsList } from '../fixtures/meal';

test('should correctly render MealDetailsPage', () => {
    const meal = mealsList[0]
    const wrapper = shallow(<MealDetailsPage 
        meal={meal}
    />);
    expect(wrapper).toMatchSnapshot();
});