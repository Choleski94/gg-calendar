import axios from 'axios';

const getTimestamp = () => new Date().getTime();

const auth = {
	login: (credentials) => (
		axios.post(`/login?timestamp=${getTimestamp()}`, credentials).then((data) => data.result)
	),
	register: (credentials) => (
		axios.post(`/register?timestamp=${getTimestamp()}`, credentials).then((data) => data.result)
	),
	logout: () => (
		axios.post(`/logout?timestamp=${getTimestamp}`).then((data) => data.result)
	),
}

export default auth;
