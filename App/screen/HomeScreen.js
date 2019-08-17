import React, {useEffect, useState} from 'react'
import {Content, Container} from "native-base";

import BoxHeader from "../component/BoxHeader";
import CardOption from "../component/CardOption";
import {getUserDetail} from "../utils/storeUserDetail";


const HomeScreen = () => {

    const [userDetail, setUserDetail] = useState({
        address: "",
        email: "",
        first_name: "",
        health_facility_name: "",
        last_name: "",
        phone_number: "",
    })

    useEffect(() => {
        async function _getUserDetail() {
            const userDetail = await getUserDetail()
            if (Object.keys(userDetail).length > 1) {
                setUserDetail(userDetail)
            }
        }
        _getUserDetail()
    }, [])

    return (
        <Container>
            <BoxHeader title={userDetail.health_facility_name}/>
            <Content>
                <CardOption caseReportType={"acd"} title={"ACD"} body={"Active Case Detection"}/>
                <CardOption caseReportType={"pcd"} title={"PCD"} body={"Passive Case Detection"}/>
            </Content>
        </Container>
    )

}


export default HomeScreen
