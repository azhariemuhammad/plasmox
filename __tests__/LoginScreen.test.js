import 'react-native';
import React from 'react';
import {create} from 'react-test-renderer';

import LoginScreen from "../App/screen/LoginScreen";


it("should render LoginScreen and compare with snapshot", async () => {
    const tree = create(<LoginScreen/>).toJSON()
    expect(tree).toMatchSnapshot()
})
