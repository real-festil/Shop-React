import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://someshop-628a3.firebaseio.com/'
})

export default instance;