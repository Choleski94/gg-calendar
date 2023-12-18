import axios from 'axios';

const getTimestamp = () => new Date().getTime();

const user = {
	fetchUser: () => (
		axios.post(`/login?timestamp=${getTimestamp()}`, credentials).then((res) => res.data.result)
	),
}

export default user;
