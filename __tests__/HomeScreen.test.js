import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import HomeScreen from "../App/screen/HomeScreen";



it("should render HomeScreen and compare with snapshot", () => {
    const wrapper = shallow(<HomeScreen/>)
    expect(wrapper).toMatchSnapshot()
})
