import React, {useState} from 'react'
import {View, TextInput, StyleSheet, ActivityIndicator} from 'react-native'
import {Content, Button, Text, Container} from "native-base";

import {baseService} from "../services";
import {setToken} from "../utils/storeToken";
import Toaster from "../component/Toaster";
import {getUserDetail, setUserDetail} from "../utils/storeUserDetail";


const LoginScreen = (props) => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleChangePhoneOrEmail = (phone) => {
        setPhone(phone)
    };

    const handlePassword = (pass) => {
        setPassword(pass)
    }

    const handleSubmit = async () => {
        // TODO:
        // handle login by email
        const dataUser = {
            phone: phone,
            password: password
        }
        setIsLoading(true)

        await baseService().login(dataUser).then(res => {
            console.log(res)
            setToken(res.data.token)
            getUserDetail()
        }).catch(e => {
            console.log('Somenthing went wrong', e)
            Toaster({err: true, text: 'Pastikan telepon atau sandi anda benar'})
            setIsLoading(false)
        })
    }

    const getUserDetail = async () => {
        await baseService().getUserDetail().then(detail => {
            setUserDetail(detail.data)
            setIsLoading(false)
            props.navigation.navigate(detail.data ? 'App' : 'Auth');
        }).catch(e => {
            console.log('Something went wrong', e)
        })
    }

    return (
        <Container>
            <View style={styles.cardImage}>
            </View>
            <Content>
                <View style={styles.inputWrapper}>
                    <Text>Telepon</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="08XXXXX"
                        placeholderTextColor="#bfc6ea"
                        autoCapitalize="none"
                        value={phone || ""}
                        onChangeText={handleChangePhoneOrEmail}
                        style={styles.inputText}
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text>Sandi</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Sandi"
                        placeholderTextColor="#bfc6ea"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        value={password || ""}
                        onChangeText={handlePassword}
                        style={styles.inputText}
                    />
                </View>
                <View style={styles.wrapperBtn}>
                    <Button
                        onPress={() => handleSubmit()}
                        style={styles.btnSubmit}
                    >
                        <Text> Masuk </Text>
                        {(isLoading) &&
                        <ActivityIndicator/>
                        }
                    </Button>
                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    btnSubmit: {
        height: 52,
        justifyContent: 'center',
    },
    wrapperBtn: {
        marginTop: 30
    },
    cardImage: {
        height: 284,
        backgroundColor: '#226597'
    },
    inputWrapper: {
        height: 70,
        marginTop: 8,
        marginBottom: 16
    },
    inputText: {
        backgroundColor: '#ECF0F3',
        marginTop: 2
    }
})

export default LoginScreen
