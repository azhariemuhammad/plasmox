import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View} from "react-native";


const CustomInputText = (props) => {
    return (
        <View style={styles.inputHeight}>
            <Text style={styles.textSecondary}>Nama Pasien</Text>
            <TextInput
                style={{height: 40}}
                placeholder="Jhon Doe"
                value={this.state.name}
                onChangeText={(name) => this.setState({name: name})}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    btnSubmit: {
        height: 52,
        justifyContent: 'center',
    },
    textWhite: {
        color: 'white'
    },
    textCenter: {
        textAlign: 'center'
    },
    textSecondary: {
        color: '#000000',
        fontSize: 18
    },
    inputHeight: {
        height: 'auto',
        marginTop: 16
    },
    wrapperBtn: {
        marginTop: 20
    }
})
export default CustomInputText
