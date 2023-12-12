import { useDispatch } from 'react-redux';

import { erp } from '@store/erp/actions';

const useMail = ({ entity }) => {
	const dispatch = useDispatch();

	const send = (id) => {
		const jsonData = { id };
		dispatch(erp.mail({ entity, jsonData }));
	};

	return { send };
}

export default useMail;
