import axios from 'axios';

// const getBearer = (token = '') => {
//     const bearer = token ? `Bearer ${token}` : '';
//     return bearer;
// };

export function api() {
    return axios.create({
        baseURL: 'http://vm-tes-mon-navios.westus2.cloudapp.azure.com:5000',
        headers: {
            // Authorization: getBearer(token),
            'Content-Type': 'application/json-patch+json',
        },
    });
}

export function handleRequestError(error) {
    if (error.response) {
      console.group(`[${error.response.status}]`, `${error.response.data.title}`);
      console.log(error.response.data.detail);
      console.log(error.response);
      console.groupEnd();
    } else {
      console.log(error);
    }
  }
  
  export function handleRequestSuccess(response) {
    console.group(`Successful Request @ ${Date.now()}`);
    console.log('response', response);
    console.groupEnd();
    return response;
  }