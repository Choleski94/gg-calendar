import axios from 'axios';

const getTimestamp = () => new Date().getTime();

const auth = {
	login: (credentials) => (
		axios.post(`/login?timestamp=${getTimestamp()}`, credentials).then((res) => res.data.result)
	),
	register: (credentials) => (
		axios.post(`/register?timestamp=${getTimestamp()}`, credentials).then((res) => res.data.result)
	),
	logout: () => (
		axios.post(`/logout?timestamp=${getTimestamp}`).then((res) => res.data)
	),
}

export default auth;
