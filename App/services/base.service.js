import createRestApiClient from '../utils/createRestApiClient';

const apiEndpoint = "http://localhost:8000"

export default () => {
    const client = createRestApiClient().withConfig({baseURL: apiEndpoint});
    return {
        login: () => client.request({
            method: 'POST',
            url: '/auth'
        })
    }
}
