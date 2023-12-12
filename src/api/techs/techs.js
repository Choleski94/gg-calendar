import axios from 'axios';

import config from '@config';

axios.defaults.baseURL = config.api.base_url;

const techs = {
	list: async function() {
		const response = await axios.get('/v1/techs');
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result?.items || [];
	},
	listCapacity: async function() {
		const response = await axios.get('/v1/techs/capacity');
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result || {};
	},
	updateCapacity: async function(payload) {
		const response = await axios.put('/v1/techs/capacity', payload);
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result || {};
	},
};


export default techs;
