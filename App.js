import React from 'react';
import {StyleProvider, Root} from "native-base";
import getTheme from './native-base-theme/components'

import AppNavigator from "./App/navigator/navigator";
import platform from "./native-base-theme/variables/platform";

const App = () => {
    return (
        <Root>
            <StyleProvider style={getTheme(platform)}>
                <AppNavigator/>
            </StyleProvider>
        </Root>
    );
};

export default App;
