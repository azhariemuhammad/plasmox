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
        login: async (dataUser) => {
            return await axios.post(
                'auth/',
                dataUser,
                await optionHeadersAsync()
            )
        },
        getAllCaseInformation: async () => {
            return await axios.request(
                `case-information-list/`,
                await optionHeadersAsync()
            )
        },
        getCaseInformation: async (id) => {
            return await axios.request(
                `case-information-list/${id}`,
                await optionHeadersAsync()
            )
        },
        postCaseInformation: async (dataCase) => {
            return await axios.post(
                `case-information-list/`,
                dataCase,
                await optionHeadersAsync()
            )
        },
        getUserDetail: async () => {
            return await axios.request(
                `user-detail/`,
                await optionHeadersAsync()
            )
        },
    }
}
