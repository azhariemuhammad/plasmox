import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'
import {baseService} from "../services";
import {getToken, setToken} from "../utils/storeToken";



const LoginScreen = (props) => {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("082248467118")
    const [password, setPassword] = useState("12345qwe")

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
        await baseService().login(dataUser).then(res => {
            setToken(res.data.token)
            props.navigation.navigate(res.data.token ? 'App' : 'Auth');

        }).catch(e => {
            console.log('Somenthing went wrong', e)
        })
    }

    return (
        <View>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder="Email/Telepon"
                placeholderTextColor="black"
                autoCapitalize="none"
                value={phone || ""}
                onChangeText={handleChangePhoneOrEmail}
            />
            <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="black"
                autoCapitalize="none"
                secureTextEntry={true}
                value={password || ""}
                onChangeText={handlePassword}
            />

            <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.button}
            >
                <Text> Masuk </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
})

export default LoginScreen
