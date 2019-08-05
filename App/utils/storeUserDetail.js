import AsyncStorage from "@react-native-community/async-storage";

export const setUserDetail = async (userDetail) => {
    try {
        await AsyncStorage.setItem('userDetail', JSON.stringify(userDetail))
    } catch (e) {
        console.log('something when wrong', e)
    }
}

export const getUserDetail = async () => {
    try {
        const userDetail = await AsyncStorage.getItem('userDetail')
        if (userDetail) {
            return JSON.parse(userDetail)
        }
    } catch (e) {
        console.log('something when wrong', e)
    }
}
