import React from 'react'
import {View, TextInput, Text} from 'react-native'
import {Container, Header, DatePicker, Form, Item, Picker, Icon} from 'native-base';


class FormPatient extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            gender: "",
            age: null,
            address: "",
            disease_type: "",
            classification_case: "",
            chosenDate: ""
        }
    }

    render() {
        return (
            <View>
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
                        placeholder="Select your SIM"
                        placeholderStyle={{color: "#bfc6ea"}}
                        placeholderIconColor="#007aff"
                    >
                        <Picker.Item label="Laki-Laki" value="1"/>
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
                    >
                        <Picker.Item label="PF" value="pf"/>
                        <Picker.Item label="PV" value="pv"/>
                        <Picker.Item label="PO" value="po"/>
                        <Picker.Item label="PM" value="pm"/>
                    </Picker>
                </Item>
                <Text>Klasifikasi Kasus</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Imported / Indigenous"
                    value={+this.state.classification_case}
                    onChangeText={(classification_case) => this.setState({classification_case: classification_case})}
                />
                <Text>
                    Waktu Pelaporan
                </Text>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="DD MM YY"
                    textStyle={{ color: "green" }}
                    onDateChange={(chosenDate) => this.setState({chosenDate: chosenDate})}
                    disabled={false}
                />
            </View>
        )

    }
}

export default FormPatient
