import React from 'react'
import {Text, View} from 'react-native';

import BoxHeader from "../component/BoxHeader";
import FormPatient from "../component/FormPatient";
import {baseService} from "../services";

class PatientInfoScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    async handlePost(caseInfo) {
        console.log(caseInfo)
        await baseService().login().then(res => {
            console.log(res)

        })
        await baseService().postCaseInformation(caseInfo).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <View>
                <BoxHeader title={'Silahkan Masukkan Data Pasien'}/>
                <FormPatient post={(caseInfo) => this.handlePost(caseInfo)} />
            </View>
        )
    }
}

export default PatientInfoScreen
