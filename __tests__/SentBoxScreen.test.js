import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import SentboxScreen from "../App/screen/SentboxScreen";


it("should render SentboxScreen component and compare with snapshot", () => {
    const wrapper = shallow(<SentboxScreen/>)
    expect(wrapper).toMatchSnapshot()
});
