import React from 'react'
import {Container, Content} from "native-base";

import BoxHeader from "../component/BoxHeader";
import FormPatient from "../component/FormPatient";
import Toaster from '../component/Toaster'
import {baseService} from "../services";

class PatientInfoScreen extends React.Component {
    state = {
        isLoading: false,
        districts: [],
        subDistrict: []

    }

    async componentDidMount() {
        /* getDistricts should be based on user's city_id */
        await baseService().getDistricts().then(res => {
            if (res.data) {
                this.setState({districts: res.data})
            }
        }).catch(e => {
            console.log(e)
            Toaster({err: true, text: 'Gagal mendapatakan data kabupaten'})
        })
    }

    async handleGetSubDistrictByDistrictId(districtId) {
        await baseService().getSubDistrict(districtId).then(res => {
            if (res.data) {
                this.setState({subDistrict: res.data})
            }
        }).catch(e => {
            console.log(e)
            Toaster({err: true, text: 'Gagal mendapatakan data kelurahan'})
        })
    }

    async handlePost(caseInfo) {
        this.setState({isLoading: true})
        await baseService().postCaseInformation(caseInfo).then(res => {
            this.setState({isLoading: false})
            Toaster({err: false, text: 'Sukses mengirim laporan'})
            const id = res.headers.location
            this.props.navigation.navigate('DetailCase', {caseId: id})
        }).catch(e => {
            console.log(e)
            this.setState({isLoading: false})
            Toaster({err: true, text: 'Gagal mengirim laporan'})
        })
    }

    render() {
        const {navigation} = this.props;
        const caseReportType = navigation.getParam('caseReportType');

        return (
            <Container>
                <BoxHeader title={'Silahkan Masukkan Data Pasien'}/>
                <Content>
                    <FormPatient
                        isLoading={this.state.isLoading}
                        caseReportType={caseReportType}
                        districts={this.state.districts}
                        subDistrict={this.state.subDistrict}
                        post={(caseInfo) => this.handlePost(caseInfo)}
                        handleGetSubDistByDistId={(districtId) => this.handleGetSubDistrictByDistrictId(districtId)}
                    />
                </Content>
            </Container>
        )
    }
}

export default PatientInfoScreen
