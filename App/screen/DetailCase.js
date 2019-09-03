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

    const {
        name, address,
        gender, isPregnant,
        age, diseaseType, 
        classificationCase,
        patientContact,
        reporter
    } = caseInfo
    return (
        <Container>
            <Content>
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Nama</Text>
                    <Text style={styles.textBody}>{name}</Text>
                </View>
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Alamat</Text>
                    <Text style={styles.textBody}>{address}</Text>
                </View>
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Jenis Kelamin</Text>
                    <Text style={styles.textBody}>{gender}</Text>
                </View>
                {
                    (gender === 'Women' && age > 17 ) &&
                    <View style={styles.inputHeight}>
                        <Text style={styles.textSecondary}>Sedang Hamil</Text>
                        <Text style={styles.textBody}>{(isPregnant) ? 'Ya' : 'Tidak'}</Text>
                    </View>
                }
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Umur</Text>
                    <Text style={styles.textBody}>{age}</Text>
                </View>
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Tipe Malaria</Text>
                    <Text style={styles.textBody}>{diseaseType}</Text>
                </View>
                <View style={styles.inputHeight}>
                    <Text style={styles.textSecondary}>Kontak Pasien</Text>
                    <Text style={styles.textBody}>{patientContact}</Text>
                </View>
                <View style={{height: 70, marginBottom: 20}}>
                    <Text style={styles.textSecondary}>Pelapor</Text>
                    <Text style={styles.textBody}>{reporter}</Text>
                </View>
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
        height: 70,
    },
    textBody: {
        padding: 8
    },
    wrapperDetail: {
        flex: 1
    }
})

export default DetailCase
