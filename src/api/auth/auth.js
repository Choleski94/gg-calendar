import axios from 'axios';

import { API_BASE_URL } from '@config/serverApiConfig';

const getTimestamp = () => new Date().getTime();

axios.defaults.baseURL = API_BASE_URL;

const auth = {
	login: async (credentials) => {
		axios.defaults.withCredentials = true;

		const timestamp = getTimestamp();

		return await axios.post(`login?timestamp=${timestamp}`, credentials);
	},
	register: async (credentials) => {
		axios.defaults.withCredentials = true;

		const timestamp = getTimestamp();

		return await axios.post(`register?timestamp=${timestamp}`, credentials);
	},
	logout: async () => {
		axios.defaults.withCredentials = true;

		if (typeof window !== 'undefined') {
			window.localStorage.clear();
		}

		const timestamp = getTimestamp();

		return await axios.post(`logout?timestamp=${timestamp}`);
	},
}

export default auth;
