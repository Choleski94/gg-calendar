import axios from 'axios';

import { ENTITIES } from '@constants';

const user = {
	fetchUser: (userId) => (
		axios.get(ENTITIES.USER + '/read/' + userId).then((res) => res.data.result)
	),
}

export default user;
