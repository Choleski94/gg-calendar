import querystring from 'querystring';
import axios from 'axios';

import config from '@config';

axios.defaults.baseURL = config.api.base_url;

const jobs = {
	list: async function(queryParam) {
		const response = await axios.get(`/v1/jobs?` + querystring.stringify({
			'page': 500,
			'per-page': 50,
			...queryParam
		}));
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result?.items || [];
	},
	listTaskByJobs: async function(queryParam) {
		const response = await axios.get(`/v1/jobs/tasks?` + querystring.stringify({
			'page': 500,
			'per-page': 50,
			...queryParam
		}));
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result?.items || [];
	},
	get: async function(jobId) {
		const response = await axios.get(`/v1/jobs/${jobId}`);
		if (response.status >= 400) {
			throw new Error('Network response was not ok');
		}
		return response?.data?.result || {};
	},
};


export default jobs;
