import React from 'react'
import {View, TextInput, Text, StyleSheet} from 'react-native'
import {Container, Content, DatePicker, Form, Item, Picker, Button} from 'native-base';


class FormPatient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "",
            age: 12,
            address: "",
            disease_type: "",
            classification_case: "",
            chosenDate: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        this.props.post(this.state)
    }

    render() {
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const date = new Date().getDate()
        const disease_type = [
            {name: 'Falciparum', code: 'pf'},
            {name: 'Vivax', code: 'pv'},
            {name: 'Malarie', code: 'pm'},
            {name: 'Ovale', code: 'po'}
        ]
        const classification_case = [{name: 'Imported', code: 'imp'}, {name: 'Indigenous', code: 'ind'}]

        return (
            <View>
                <Form>
                    <Text>Nama Pasien</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Jhon Doe"
                        value={this.state.name}
                        onChangeText={(name) => this.setState({name: name})}
                    />
                    <Text>Alamat</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Jhon Doe"
                        value={this.state.address}
                        onChangeText={(address) => this.setState({address: address})}
                    />
                    <Text>Jenis Kelamin</Text>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Laki-laki / Perempuan"
                            placeholderStyle={{color: "#bfc6ea"}}
                            placeholderIconColor="#007aff"
                            onValueChange={value => {
                                this.setState({gender: value})
                            }}
                        >
                            <Picker.Item label="Laki-laki" value="1"/>
                            <Picker.Item label="Perempuan" value="2"/>
                        </Picker>
                    </Item>
                    <Text>Umur</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Tahun"
                        value={this.state.age}
                        onChangeText={(age) => this.setState({age: age})}
                        keyboardType={'numeric'}
                    />
                    <Text>Tipe Malaria</Text>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            placeholderStyle={{color: "#bfc6ea"}}
                            placeholderIconColor="#007aff"
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
                    <Text>Klasifikasi Kasus</Text>
                    <Item picker>
                        <Picker
                            mode="dropdown"
                            placeholder="Select your SIM"
                            placeholderStyle={{color: "#bfc6ea"}}
                            placeholderIconColor="#007aff"
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
                    <Text>
                        Waktu Pelaporan
                    </Text>
                    <DatePicker
                        defaultDate={new Date(year, month, date)}
                        minimumDate={new Date(year, 1, 1)}
                        maximumDate={new Date(year, 12, 31)}
                        locale={"id"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="DD MM YY"
                        textStyle={{color: "green"}}
                        onDateChange={(chosenDate) => this.setState({chosenDate: chosenDate})}
                        disabled={false}
                    />
                    <Button onPress={this.handleSubmit} style={styles.btnSubmit}>
                        <Text style={styles.textWhite}>Kirim</Text>
                    </Button>
                </Form>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    btnSubmit: {
        backgroundColor: '#113F67',
        height: 52,
        width: 343,
        color: 'white',
        justifyContent: 'center'
    },
    textWhite: {
        color: 'white'
    },
    textCenter: {
        textAlign: 'center'
    }
})

export default FormPatient
