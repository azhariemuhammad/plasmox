import React from 'react'
import {Content, Container} from "native-base";

import BoxHeader from "../component/BoxHeader";
import CardOption from "../component/CardOption";
import {baseService} from "../services";
import {setUserDetail} from "../utils/storeUserDetail";



class HomeScreen extends React.Component {

    state={
        facilityName: '',
        facilityLevel: null,
    }

    componentDidMount() {
        this.fetchUserDetail()
    }

    async fetchUserDetail() {
        await baseService().getUserDetail().then(res => {
            if (res.data.health_facility_name) {
                const {health_facility_name, facility_level} = res.data
                setUserDetail(res.data)
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
                    <CardOption caseReportType={"acd"} title={"ACD"} body={"Active Case Detection"}/>
                    <CardOption caseReportType={"pcd"} title={"PCD"} body={"Passive Case Detection"}/>
                </Content>
            </Container>
        )
    }
}


export default HomeScreen
