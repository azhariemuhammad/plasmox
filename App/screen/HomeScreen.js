import React from 'react'
import {StyleSheet} from 'react-native'
import {Content, Container, Card, CardItem, Body, Text, Button} from "native-base";
import BoxHeader from "../component/BoxHeader";
import CardOption from "../component/CardOption";
import SentBoxScreen from "./SentBoxScreen";
import {baseService} from "../services";


class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    state={
        facilityName: '',
        facilityLevel: null
    }

    async componentDidMount() {
        await baseService().getUserDetail().then(res => {
            console.log(res.data)
            if (res.data.health_facility_name) {
                const {health_facility_name, facility_level} = res.data
                this.setState({facilityName: health_facility_name, facilityLevel: facility_level})
            }
        }).catch(e => {
            console.log('Somenthing went wrong', e)
        })
    }

    render() {
        return (
            <Container>
                <BoxHeader title={this.state.facilityName}/>
                <Content>
                    <CardOption title={"ACD"} body={"Active Case Detection"}/>
                    <CardOption title={"PCD"} body={"Passive Case Detection"}/>
                    {(this.state.facilityLevel === '1') ?
                        <Text style={styles.btnLink} onPress={
                            () => this.props.navigation.navigate('SentBoxScreen')
                        }>Lihat Laporan Terkirim</Text>
                        :
                        <Text style={styles.btnLink} onPress={
                            () => this.props.navigation.navigate('SentBoxScreen')
                        }>Lihat Laporan Diterima</Text>
                    }

                </Content>

            </Container>
        )
    }
}


const styles = StyleSheet.create({
    btnLink: {
        color: '#226597',
        marginTop: 20
    }
});


export default HomeScreen
