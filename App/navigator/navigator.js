import React from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-ionicons'

import HomeScreen from "../screen/HomeScreen";
import PatientInfoScreen from "../screen/PatientInfoScreen";
import LoginScreen from "../screen/LoginScreen";
import DetailCase from "../screen/DetailCase";
import SentboxScreen from "../screen/SentboxScreen";
import InboxScreen from "../screen/InboxScreen";
import {Button, Text} from "native-base";
import AlertLogout from "../component/AlertLogout";
import AuthLoadingScreen from "../screen/AuthLoadingScreen";


const headerRight = (navigation) => (
    <Button style={{
        backgroundColor: '#ffff', shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0,
        elevation: 0
    }}
            onPress={() => AlertLogout(navigation)} iconRight
    >
        <Text style={{color: 'black'}}>Keluar</Text>
        <Icon style={{color: 'black', marginRight: 8}} android='md-log-out'/>
    </Button>
)

const Sentbox = createStackNavigator({
    SentBoxScreen: {
        screen: SentboxScreen,
        navigationOptions: ({navigation}) => ({
            headerRight: headerRight(navigation)
        })
    },
    DetailCase: {screen: DetailCase},
});

const Inbox = createStackNavigator({
    Inbox: {
        screen: InboxScreen,
        navigationOptions: ({navigation}) => ({
            headerRight: headerRight(navigation)
        })},
    DetailCase: {screen: DetailCase},
});


const Home = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerRight: headerRight(navigation)
        })
    },
    PatientInfoScreen: {screen: PatientInfoScreen},
    DetailCase: {screen: DetailCase},
});

const TabNavigator = createBottomTabNavigator({
        Inbox: Inbox,
        Home: Home,
        Sentbox: Sentbox,
    },

    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `md-add-circle`;
                } else if (routeName === 'Sentbox') {
                    iconName = `md-mail`;
                } else if (routeName === 'Inbox') {
                    iconName = `md-mail-open`;
                }
                return <Icon android={iconName} color={focused ? '#226597' : '#d1d1d1'}/>;
            },
        }),
        tabBarOptions: {
            showLabel: false
        },
        initialRouteName: 'Home',
    }
);


const AuthStack = createStackNavigator({
    loginScreen: {screen: LoginScreen, navigationOptions: {header: null}}
})

const AuthLoading = createStackNavigator({
    authLoadingScreen: {screen: AuthLoadingScreen, navigationOptions: {header: null}}
})

const AppNavigator = createAppContainer(
    createSwitchNavigator(
        {App: TabNavigator, Auth: AuthStack, Loading: AuthLoading },
        {initialRouteName: 'Loading'}
    )
);

export default AppNavigator;
