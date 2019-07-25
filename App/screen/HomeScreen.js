import React from 'react'
import {Text, View} from 'react-native';
import BoxHeader from "../component/BoxHeader";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View>
                <BoxHeader title={'Pilih Tipe Pelaporan '}/>
            </View>
        )
    }
}

export default HomeScreen
