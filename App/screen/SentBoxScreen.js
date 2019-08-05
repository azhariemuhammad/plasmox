import React, {useState, useEffect} from 'react'
import {Container, Content, H3} from "native-base";

import ListCase from "../component/ListCase";
import {baseService} from "../services";
import BoxHeader from "../component/BoxHeader";
import {getUserDetail} from "../utils/storeUserDetail";

const SentBoxScreen = () => {

    const [cases, setCases] = useState([]);
    const [userDetail, setUserDetail] = useState({
        address: "",
        email: "",
        first_name: "",
        health_facility_name: "",
        last_name: "",
        phone_number: ""
    })

    useEffect(() => {
        async function getCaseInfo() {
            await baseService().getAllCaseInformation().then(result => {
                setCases(result.data)
            }).catch(e => {
                setCases({})
            })

        }

        getCaseInfo();
    }, []);

    useEffect(() => {
        function userDetail() {
            getUserDetail().then(detail => {
                setUserDetail(detail)
            }).catch(e => {
                console.log('Something went wrong', e)
            })
        }

        userDetail()
    }, [])

    return (
        <Container>
            <BoxHeader title={userDetail.health_facility_name}/>
            <H3 style={{marginTop: 16, marginBottom: 16, padding:8}}>Laporan Terkirim</H3>
            <ListCase data={cases}/>
        </Container>
    )
}
export default SentBoxScreen
