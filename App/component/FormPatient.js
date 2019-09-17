import React from 'react'
import {View, TextInput, Text, StyleSheet, ActivityIndicator} from 'react-native'
import {Form, Item, Picker, Button} from 'native-base';

import Validators from "../services/validateFormPatient.service";


class FormPatient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "1",
            age: '',
            address: "",
            disease_type: "pf",
            classification_case: "",
            is_pregnant: false,
            patient_contact: "",
            case_report_type: this.props.caseReportType,
            province: "1",
            city: "1",
            district: "",
            sub_district: "",

            errors: {
                name: false,
                age: false,
                address: false,
                patient_contact: false,
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleGender(value) {
        if (value == '1') {
            this.setState({gender: value, is_pregnant: false})
        } else {
            this.setState({gender: value})
        }
    }

    handleGetSubDistricts() {
        this.props.handleGetSubDistByDistId(this.state.district)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.district !== this.state.district) {
            this.handleGetSubDistricts()
        }
    }

    handleOnChange(val, stateName) {
        this.setState({[stateName]: val}, () => {
            this.handleValidation(stateName)
        })
    }

    handleValidation(stateName) {
        let newErrors = this.state.errors
        newErrors[stateName] = Validators.checkNullChars(this.state[stateName])
        this.setState({errors: newErrors})
    }

    isValidForm() {
        const {name, age, address, patient_contact} = this.state.errors
        return (name === false) && (age === false) && (address === false) && (patient_contact === false)
    }

    handleSubmit() {
        const {errors} = this.state
        Object.keys(errors).map(item => {
            if (!errors[item]) {
                this.handleValidation(item)
            }
        })
        if (this.isValidForm()) {
            this.props.post(this.state)
            this.setState({name: '', gender: '1', address: '', is_pregnant: false, patient_contact: ''})
        } else {
            console.log('not valid')
        }
    }

    render() {
        const gender = [{name: 'Laki-laki', code: '1'}, {name: 'Perempuan', code: '2'}]
        const disease_type = [
            {name: 'Falciparum', code: 'pf'},
            {name: 'Vivax', code: 'pv'},
            {name: 'Malarie', code: 'pm'},
            {name: 'Ovale', code: 'po'}
        ]

        const classification_case = [{name: 'Imported', code: 'imp'}, {name: 'Indigenous', code: 'ind'}]
        const {errors} = this.state
        return (
            <View style={{flex: 1, marginBottom: 50}}>
                <Form>
                    <View style={styles.inputHeight}>
                        <View style={styles.flexRow}>
                            <Text style={styles.textSecondary}>Nama Pasien</Text>
                            {(errors.name) && <Text style={styles.textWarning}>* Wajib diisi</Text>}
                        </View>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Jhon Doe"
                            value={this.state.name}
                            onChangeText={(name) => this.handleOnChange(name, 'name')}
                        />

                    </View>
                    <View style={styles.inputHeight}>
                        <View style={styles.flexRow}>
                            <Text style={styles.textSecondary}>Alamat</Text>
                            {(errors.address) && <Text style={styles.textWarning}>* Wajib diisi</Text>}
                        </View>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Jalan Ciputat Raya"
                            value={this.state.address}
                            onChangeText={(address) => this.handleOnChange(address, 'address')}
                        />
                    </View>
                    {(this.props.districts) &&
                    <View style={styles.inputHeight}>
                        <Text style={styles.textSecondary}>Kecamatan</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Sirimau"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.district}
                                onValueChange={(value) => this.setState({district: value})}
                            >
                                {this.props.districts.map((type, idx) => {
                                    return (
                                        <Picker.Item key={idx} label={type.name} value={type.id}/>
                                    )
                                })}
                            </Picker>
                        </Item>
                    </View>
                    }

                    {(this.props.subDistrict) &&
                        <View style={styles.inputHeight}>
                            <Text style={styles.textSecondary}>Desa / Kelurahan</Text>
                            <Item picker>
                                <Picker
                                    mode="dropdown"
                                    placeholder="Amahusu"
                                    placeholderStyle={{color: "#bfc6ea"}}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.sub_district}
                                    onValueChange={(value) => this.setState({sub_district: value})}
                                >
                                    {this.props.subDistrict.map((type, idx) => {
                                        return (
                                            <Picker.Item key={idx} label={type.name} value={type.id}/>
                                        )
                                    })}
                                </Picker>
                            </Item>
                        </View>
                    }

                    <View style={styles.inputHeight}>
                        <Text style={styles.textSecondary}>Jenis Kelamin</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Laki-laki / Perempuan"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.gender}
                                onValueChange={(value) => this.handleGender(value)}
                            >
                                {gender.map((type, idx) => {
                                    return (
                                        <Picker.Item key={idx} label={type.name} value={type.code}/>
                                    )
                                })}
                            </Picker>
                        </Item>
                    </View>

                    {(this.state.gender === "2") &&
                    <View style={styles.inputHeight}>
                        <Text style={styles.textSecondary}>Hamil</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Hamil / Tidak Hamil"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.is_pregnant}
                                onValueChange={value => {
                                    this.setState({is_pregnant: value})
                                }}
                            >
                                <Picker.Item label="Negatif" value={false}/>
                                <Picker.Item label="Positif" value={true}/>
                            </Picker>
                        </Item>
                    </View>
                    }

                    <View style={styles.inputHeight}>
                        <View style={styles.flexRow}>
                            <Text style={styles.textSecondary}>Umur</Text>
                            {(errors.age) && <Text style={styles.textWarning}>* Wajib diisi</Text>}
                        </View>
                        <TextInput
                            style={{height: 40}}
                            placeholder="Tahun"
                            value={this.state.age}
                            onChangeText={(age) => this.handleOnChange(age, 'age')}
                            keyboardType={'numeric'}
                        />
                    </View>

                    <View style={styles.inputHeight}>
                        <Text style={styles.textSecondary}>Tipe Malaria</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholder="Tipe Malaria"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.disease_type}
                                onValueChange={value => {
                                    this.setState({disease_type: value})
                                }}
                            >
                                {disease_type.map((type, idx) => {
                                    return (
                                        <Picker.Item key={idx} label={type.name} value={type.code}/>
                                    )
                                })}
                            </Picker>
                        </Item>
                    </View>

                    <View style={styles.inputHeight}>
                        <View style={styles.flexRow}>
                            <Text style={styles.textSecondary}>Kontak Pasien</Text>
                            {(errors.patient_contact) && <Text style={styles.textWarning}>* Wajib diisi</Text>}
                        </View>
                        <TextInput
                            style={{height: 40}}
                            placeholder="08xxx"
                            value={this.state.patient_contact}
                            onChangeText={(contact) => this.handleOnChange(contact, 'patient_contact')}
                            keyboardType={'numeric'}
                        />
                    </View>
                    <View style={styles.wrapperBtn}>
                        <Button
                            primary style={styles.btnSubmit}
                            onPress={this.handleSubmit}
                        >
                            <Text style={styles.textWhite}>Kirim</Text>
                            {(this.props.isLoading) &&
                            <ActivityIndicator style={{marginLeft: 16}}/>
                            }
                        </Button>
                    </View>
                </Form>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    btnSubmit: {
        height: 52,
        justifyContent: 'center',
    },
    textWhite: {
        color: 'white'
    },
    textCenter: {
        textAlign: 'center'
    },
    textSecondary: {
        color: '#000000',
        fontSize: 18
    },
    inputHeight: {
        height: 'auto',
        marginTop: 16
    },
    wrapperBtn: {
        marginTop: 20
    },
    textWarning: {
        color: 'red',
        fontSize: 14,
        paddingLeft: 8
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default FormPatient
