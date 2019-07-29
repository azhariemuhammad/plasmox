import React from 'react'
import {StyleSheet} from 'react-native'
import {Content, Container, Card, CardItem, Body, Text} from "native-base";
import BoxHeader from "../component/BoxHeader";
import CardOption from "../component/CardOption";

class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Container>
                <BoxHeader title={'Pilih Tipe Pelaporan '}/>
                <Content>
                    <CardOption title={"ACD"} body={"Active Case Detection"}/>
                    <CardOption title={"PCD"} body={"Passive Case Detection"}/>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({

});


export default HomeScreen
