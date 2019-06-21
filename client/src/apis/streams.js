import axios from 'axios';

export const databaseURL = axios.create({
    baseURL: 'http://localhost:3001'
    // baseURL: 'http://192.168.1.21:3001'
});

export const streamURL = 'http://localhost:8000';
// export const streamURL = 'http://192.168.1.21:8000';
