import React, {useState, useEffect} from 'react'
import {Container, Content, Text, H3} from "native-base";
import {ActivityIndicator, RefreshControl} from "react-native";

import ListCase from "../component/ListCase";
import {baseService} from "../services";
import BoxHeader from "../component/BoxHeader";
import {getUserDetail} from "../utils/storeUserDetail";


const SentboxScreen = () => {

    const [cases, setCases] = useState([]);
    const [userDetail, setUserDetail] = useState({
        address: "",
        email: "",
        first_name: "",
        health_facility_name: "",
        last_name: "",
        phone_number: ""
    })
    const [refreshing, setRefreshing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        getCaseInfo();
    }, []);

    useEffect(() => {
        async function userDetail() {
            const userDetail = await getUserDetail()
            if (userDetail) {
                setUserDetail(userDetail)
            }
        }

        userDetail()
    }, [])

    async function getCaseInfo() {
        await baseService().getSentbox().then(result => {
            setIsLoading(false)
            setRefreshing(false)
            setCases(result.data)
        }).catch(e => {
            setIsLoading(false)
            setRefreshing(false)
            setCases({})
        })
    }

    const _onRefresh = () => {
        setRefreshing(true)
        setIsLoading(true)
        getCaseInfo()

    }

    return (
        <Container>
            <BoxHeader title={userDetail.health_facility_name}/>
            <H3 style={{marginTop: 16, marginBottom: 16, padding:8}}>Laporan Terkirim</H3>
            <Content
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={_onRefresh}
                    />
                }
            >
                {(isLoading)
                    ?
                    <ActivityIndicator />
                    :
                    (cases.length > 1)
                        ?
                        <ListCase data={cases}/>
                        :
                        <Text>Belum ada laporan...</Text>
                }

            </Content>
        </Container>
    )
}
export default SentboxScreen
