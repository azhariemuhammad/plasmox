import React from 'react'
import {Container, Content} from "native-base";

import BoxHeader from "../component/BoxHeader";
import FormPatient from "../component/FormPatient";
import {baseService} from "../services";

class PatientInfoScreen extends React.Component {

    async handlePost(caseInfo) {
        await baseService().postCaseInformation(caseInfo).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        })
    }

    render() {
        return (
            <Container>
                <BoxHeader title={'Silahkan Masukkan Data Pasien'}/>
                <Content>
                    <FormPatient post={(caseInfo) => this.handlePost(caseInfo)}/>
                </Content>
            </Container>
        )
    }
}

export default PatientInfoScreen
