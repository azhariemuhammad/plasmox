import React from 'react'
import {Alert} from 'react-native'

import {removeToken} from "../utils/storeToken";

const AlertLogout = (props) => {
    const handleGoToLoginScreen = () => {
        removeToken()
        return props.navigate('Auth')

    }
    return (
        Alert.alert(
            'Keluar',
            'Apakah kamu yakin untuk keluar Akun',
            [
                {
                    text: 'Batalkan',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => handleGoToLoginScreen()},
            ],
            {cancelable: false},
        )
    )


}

export default AlertLogout

