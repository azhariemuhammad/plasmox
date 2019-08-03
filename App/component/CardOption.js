import React from 'react'
import { withNavigation } from 'react-navigation';
import {CardItem, Body, Title, Card, Text} from "native-base";
import {StyleSheet, TouchableOpacity} from "react-native";

const CardOption = (props) => {

    const handleGoTo  = () => {
        props.navigation.navigate('PatientInfoScreen', {caseReportType: props.caseReportType})
    }
    return (
        <TouchableOpacity onPress={() => handleGoTo()}>
            <Card>
                <CardItem header>
                    <Title>{props.title}</Title>
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

export default  withNavigation(CardOption)
