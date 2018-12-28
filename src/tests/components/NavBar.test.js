import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/NavBar';

test('should render NavBar correctly', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
});