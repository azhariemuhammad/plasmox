import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Content, Container, Title} from "native-base";

const BoxHeader = (props) => {

    return (
         <View style={styles.flex1}>
             <Title>{props.title}</Title>
         </View>
    )
}

const styles = StyleSheet.create({
    flex1: {
        backgroundColor: '#F3F9FB',
        height: 92,
        justifyContent: 'center'
    }
})

export default BoxHeader
