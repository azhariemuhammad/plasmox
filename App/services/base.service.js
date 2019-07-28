import createRestApiClient from '../utils/createRestApiClient';
import {getToken} from "../utils/storeToken";

const apiEndpoint = "http://127.0.0.1:8000"
const token = getToken()

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        login: (dataUser) => client.request({
            method: 'POST',
            url: '/auth/',
            data: dataUser
        }),
        postCaseInformation: (dataCase) => {
          return client.request({
              method: 'POST',
              withCredentials: true,
              headers: {
                  'content-type': 'application/json',
                  "Access-Control-Allow-Origin": "*",
                  'Authorization': 'JWT' + token },
              url: '/case-information-list/',
              data: dataCase
          })
        }
    }
}
