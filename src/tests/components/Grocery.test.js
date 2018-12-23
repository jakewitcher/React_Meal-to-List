import React from 'react';
import { shallow } from 'enzyme';
import { Grocery } from '../../components/grocery/Grocery';
import { groceryLists } from '../fixtures/grocery';


let name, id, wrapper, onDeleteGrocery;

beforeEach(() => {
    name = groceryLists[0].name;
    id = groceryLists[0].id;
    onDeleteGrocery = jest.fn();
    wrapper = shallow(<Grocery name={name} id={id} onDeleteGrocery={onDeleteGrocery} />);
});

test('should render Grocery correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should delete grocery list by id', () => {
    wrapper.find('i').at(1).simulate('click');
    expect(onDeleteGrocery).toHaveBeenLastCalledWith(id);
});