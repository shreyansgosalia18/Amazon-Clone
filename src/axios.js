import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://backend-clone-amazon.herokuapp.com/'  //The API (cloud function) URL
});

export default instance;