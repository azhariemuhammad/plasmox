import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import InboxScreen from "../App/screen/InboxScreen";


it("should render InboxScreen component and compare with snapshot", () => {
    const wrapper = shallow(<InboxScreen/>)
    expect(wrapper).toMatchSnapshot()
});
