import AsyncStorage from "@react-native-community/async-storage";

export const setToken = async (token) => {
    try {
        await AsyncStorage.setItem('token', token)
    } catch (e) {
        console.log('something when wrong', e)
    }
}

export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            return token
        }
    } catch (e) {
        console.log('something when wrong', e)
    }
}
