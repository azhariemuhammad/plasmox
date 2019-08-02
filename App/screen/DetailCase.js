import React, {useState, useEffect} from 'react'
import {Container, Content, Text} from "native-base";

import {baseService} from "../services";
import {StyleSheet, View} from "react-native";

const DetailCase = (props) => {

    const [caseInfo, setCaseInfo] = useState({});

    useEffect(() => {
        const {navigation} = props;
        const caseId = navigation.getParam('caseId');

        async function getCaseInfo() {
            await baseService().getCaseInformation(caseId).then(result => {
                setCaseInfo(result.data)
            }).catch(e => {
                setCaseInfo({})
            })

        }

        getCaseInfo();
    }, []);

    const infoTypes = {
        address: "Alamat",
        age: "Umur",
        caseReportType: "Tipe Pelaporan",
        classificationCase: "Klasifikasi",
        diseaseType: "Tipe Malaria",
        gender: "Jenis Kelamin",
        isPregnant: 'Sedang Hamil',
        name: "Nama",
        patientContact: "Kontak Pasien",
        reporter: "Pengirim Laporan"
    }

    const translateText = (txt) => {
        return infoTypes[txt]
    }

    const renderItem = (title, name, idx) => {
        return (
            <View style={styles.inputHeight} key={idx}>
                <Text style={styles.textSecondary}>{translateText(title)}</Text>
                <Text>{name}</Text>
            </View>
        )
    }

    return (
        <Container>
            <Content>
                { (Object.keys(caseInfo).length > 1) &&
                    Object.keys(caseInfo).map((item, idx) => {
                        return (
                            renderItem(item, caseInfo[item],idx)
                        )
                    })
                }
            </Content>
        </Container>
    )
}


const styles = StyleSheet.create({
    textSecondary: {
        color: '#000000',
        fontSize: 18
    },
    inputHeight: {
        height: 'auto',
        marginTop: 16
    },
    wrapperDetail: {
        flex: 1,
        marginBottom: 30
    }
})

export default DetailCase
