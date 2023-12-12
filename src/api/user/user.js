import axios from 'axios';

import config from '@config';

axios.defaults.baseURL = config.api.base_url;

const user = {
	// GUEST
	login: credentials => axios.post(`/v1/users/auth`, credentials, { withCredentials: true })
		.then(({ data }) => data?.result),
	// confirm: token =>
	//   axios.post(`/v1/users/confirm`, { token }).then(({ data }) => data?.result),
	// resetPassword: data =>
	//   axios.post(`/v1/users/recover`, data).then(({ data }) => data?.result),
	updateCurrentUser: user =>
		axios.put(`/v1/users/update`, { user }).then(({ data }) => data?.result),
	fetchCurrentUser: () =>
		axios.get(`/v1/users/account`).then(({ data }) => data?.result),
};

export default user;
