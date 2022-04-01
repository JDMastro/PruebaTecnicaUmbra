import Axios, { AxiosResponse } from 'axios';

const axios = Axios.create({
	baseURL: `https://jsonplaceholder.typicode.com`,
	timeout: 15000,
	headers : {"Content-Type": "application/json"},
});

export const instance = axios;

export const responseBody = (response: AxiosResponse) => response.data;
