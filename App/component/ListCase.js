import React from 'react'
import {FlatList, TouchableOpacity, View} from 'react-native'
import {Container, Content, List, ListItem, Text} from "native-base";


const ListCase = (props) => {

    const keyExtractor = (item, index) => item.id;

    const renderItem = ({item}) => (
        <TouchableOpacity>
            <View>
                <Text>Pasien {item.name},  Nomor Kontak: {item.patientContact} </Text>
            </View>
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

export default ListCase
