import axios from 'axios'

import {getToken} from "../utils/storeToken";

const apiEndpoint = "http://127.0.0.1:8000/"

const optionHeadersAsync = async () => {
    let accessToken = "";
    const credential = await getToken();
    if (credential) {
        accessToken = credential;
    }
    return {
        baseURL: apiEndpoint,
        headers: {
            Authorization: `JWT ${accessToken}`,
            "Content-Type": 'application/json',
        }
    }
};

export default () => {
    return {
        login: (dataUser) => axios.request({
            method: 'POST',
            url: 'auth/',
            data: dataUser,
            baseURL: apiEndpoint
        }),
        postCaseInformation: async (dataCase) => {
            return await axios.post(
                `case-information-list/`,
                dataCase,
                await optionHeadersAsync()
            )
        }
    }
}
