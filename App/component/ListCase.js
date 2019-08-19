import React from 'react'
import {FlatList, TouchableOpacity, View, StyleSheet} from 'react-native'
import {Content, Text, H3} from "native-base";
import {withNavigation} from "react-navigation";


const ListCase = (props) => {

    const keyExtractor = (item) => item.id.toString();

    const formatDate = (dt) => {
        const options = {year: '2-digit', month: 'long', day: 'numeric'}
        return new Date(dt).toDateString(('id-ID', options))
    }
    const handleNavigateTo = (item) => {
        props.navigation.navigate('DetailCase', {caseId: item.id})
    }

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => handleNavigateTo(item)} style={styles.ListItem}>
            <Content>
                <View style={styles.flexBetween}>
                    <Text style={styles.title}>{item.caseReportType.toUpperCase()}</Text>
                    <Text>{formatDate(item.created)}</Text>
                </View>
                <Text>Pasien {item.name}, {item.patientContact}... </Text>
            </Content>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={props.data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    )
}


const styles = StyleSheet.create({
    ListItem: {
        height: 90,
        borderBottomColor: '#d1d1d1',
        borderBottomWidth: 1,
    },
    title: {
        color: '#226597',
        paddingBottom: 8
    },
    flexBetween: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default withNavigation(ListCase)
