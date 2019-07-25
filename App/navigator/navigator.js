import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "../screen/HomeScreen";
import PatientInfoScreen from "../screen/PatientInfoScreen";

const MainNavigator = createStackNavigator({
    // Home: {screen: HomeScreen},
    PatienInfo: {screen: PatientInfoScreen}
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
