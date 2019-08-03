import React, {useState, useEffect} from 'react'
import {Container, Content, H3} from "native-base";

import ListCase from "../component/ListCase";
import {baseService} from "../services";
import BoxHeader from "../component/BoxHeader";

const SentBoxScreen = () => {

    const [cases, setCases] = useState([]);

    useEffect(() => {
        async function getCaseInfo() {
            await baseService().getAllCaseInformation().then(result => {
                setCases(result.data)
            }).catch(e => {
                setCases([])
            })

        }

        getCaseInfo();
    }, []);

    return (
        <Container>
            <BoxHeader title={'Pustu Desa A'}/>
            <H3 style={{marginTop: 16, marginBottom: 16, padding:8}}>Laporan Terkirim</H3>
            <ListCase data={cases}/>
        </Container>
    )
}
export default SentBoxScreen
