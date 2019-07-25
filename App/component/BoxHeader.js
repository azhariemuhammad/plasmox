import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxHeader = (props) => {

    return (
         <View style={styles.flex1}>
             <Text style={styles.textCenter}>{props.title}</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    flex1: {
        backgroundColor: '#F3F9FB',
        height: 92,
        justifyContent: 'center'
    },
    textCenter: {
        textAlign: 'center'
    }
})

export default BoxHeader
