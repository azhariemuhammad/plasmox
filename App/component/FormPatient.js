import React from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'
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
            classification_case: "imp",
            // chosenDate: "",
            is_pregnant: false,
            patient_contact: "",
            case_report_type: this.props.caseReportType,
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
        const {name, age, address, patient_contact } = this.state.errors
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
                        <Text style={styles.textSecondary}>Klasifikasi Kasus</Text>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.classification_case}
                                onValueChange={value => {
                                    this.setState({classification_case: value})
                                }}
                            >
                                {classification_case.map((caseItem, idx) => {
                                    return (
                                        <Picker.Item key={idx} label={caseItem.name} value={caseItem.code}/>
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
