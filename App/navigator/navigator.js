import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

import HomeScreen from "../screen/HomeScreen";
import PatientInfoScreen from "../screen/PatientInfoScreen";
import LoginScreen from "../screen/LoginScreen";
import DetailCase from "../screen/DetailCase";
import SentBoxScreen from "../screen/SentBoxScreen";

const AppStack = createStackNavigator({
    HomeScreen: {screen: HomeScreen},
    PatientInfoScreen: {screen: PatientInfoScreen},
    SentBoxScreen: {screen: SentBoxScreen},
    DetailCase: {screen: DetailCase},
});

const AuthStack = createStackNavigator({
    loginScreen: {screen: LoginScreen, navigationOptions: {header: null}}
})

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {App: AppStack, Auth: AuthStack},
        {initialRouteName: 'Auth'}
    )
);

export default AppNavigator;
