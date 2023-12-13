import axios from 'axios';

import config from '@config';

const getTimestamp = () => new Date().getTime();

const auth = {
	login: async (credentials) => {
		axios.defaults.baseURL = config.api.base_url;

		const timestamp = getTimestamp();

		return await axios.post(`/login?timestamp=${timestamp}`, credentials, { withCredentials: true });
	},
	register: async (credentials) => {
		axios.defaults.baseURL = config.api.base_url;

		const timestamp = getTimestamp();

		return await axios.post(`/register?timestamp=${timestamp}`, credentials, { withCredentials: true });
	},
	logout: async () => {
		axios.defaults.withCredentials = true;
		axios.defaults.baseURL = config.api.base_url;

		if (typeof window !== 'undefined') {
			window.localStorage.clear();
		}

		const timestamp = getTimestamp();

		return await axios.post(`/logout?timestamp=${timestamp}`);
	},
}

export default auth;
