import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import DetailCase from "../App/screen/DetailCase";


it("should render DetailCase component and compare with snapshot", () => {
    const wrapper = shallow(<DetailCase/>)
    expect(wrapper).toMatchSnapshot()
});
