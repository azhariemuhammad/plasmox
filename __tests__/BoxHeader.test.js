import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import BoxHeader from "../App/component/BoxHeader";



it("should render BoxHeader component and compare with snapshot", () => {
    const val = "Dinas Kesehatan Buru"
    const wrapper = shallow(<BoxHeader title={val}/>)
    expect(wrapper).toMatchSnapshot()
});
