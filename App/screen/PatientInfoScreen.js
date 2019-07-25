import React from 'react'
import {Text, View} from 'react-native';

import BoxHeader from "../component/BoxHeader";
import FormPatient from "../component/FormPatient";

class PatientInfoScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View>
                <BoxHeader title={'Silahkan Masukkan Data Pasien'}/>
                <FormPatient />
            </View>
        )
    }
}

export default PatientInfoScreen
