import querystring from 'querystring';
import axios from 'axios';

import config from '@config';

axios.defaults.baseURL = config.api.base_url;

const calls = {
	list: async function(queryParam) {
		const response = await axios.get('/v1/calls?' + querystring.stringify({
			...queryParam
		}));
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result || [];
	},
};


export default calls;
