import React, {useState, useEffect} from 'react'
import {Container, Text, Content, H3} from "native-base";
import {ActivityIndicator, RefreshControl} from "react-native";

import ListCase from "../component/ListCase";
import {baseService} from "../services";
import BoxHeader from "../component/BoxHeader";
import {getUserDetail} from "../utils/storeUserDetail";


const InboxScreen = () => {

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
            if (Object.keys(userDetail).length > 1) {
                setUserDetail(userDetail)
            }
        }
        userDetail()
    }, [])

    async function getCaseInfo() {
        await baseService().getInbox().then(result => {
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
            <H3 style={{marginTop: 16, marginBottom: 16, padding:8}}>Laporan Diterima</H3>
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
                        <ListCase data={cases} isInbox={true}/>
                        :
                        <Text>Belum ada laporan...</Text>

                }
            </Content>
        </Container>
    )
}
export default InboxScreen
