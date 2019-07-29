import React from 'react'
import { withNavigation } from 'react-navigation';
import {CardItem, Body, Card, Text} from "native-base";
import {StyleSheet, TouchableOpacity, View} from "react-native";

const CardOption = (props) => {

    const handleGoTo  = () => {
        props.navigation.navigate('PatienInfoScreen')
    }
    return (
        <TouchableOpacity onPress={() => handleGoTo()}>
            <Card>
                <CardItem header>
                    <Text>{props.title}</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        {props.body}
                    </Text>
                </CardItem>
            </Card>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({});

export default  withNavigation(CardOption)
