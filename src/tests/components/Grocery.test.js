import React from 'react';
import { shallow } from 'enzyme';
import { Grocery } from '../../components/grocery/Grocery';
import { groceryLists } from '../fixtures/grocery';


let name, id, wrapper, onDeleteGroceryAsync;

beforeEach(() => {
    name = groceryLists[0].name;
    id = groceryLists[0].id;
    onDeleteGroceryAsync = jest.fn();
    wrapper = shallow(<Grocery name={name} id={id} onDeleteGroceryAsync={onDeleteGroceryAsync}/>);
});

test('should render Grocery correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should delete grocery list by id', () => {
    wrapper.find('i').at(1).simulate('click');
    expect(onDeleteGroceryAsync).toHaveBeenLastCalledWith(id);
});