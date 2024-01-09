import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import { Table, Forms } from '@components';
import formatMessage from '@utils/formatMessage';
import { ENTITY_WORKFORCE, DEFAULT_TABLE_HEADER, DEFAULT_ACTIVE_HEADER_KEYS } from '@constants/workforce';

import { parseOptions } from './Members.helpers';

const parseSelectOptionValues = () => null;

const pagination = {};

const Members = () => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ employeeOptions, setEmployeeOptions ] = React.useState([]);

	React.useMemo(() => {
		setData({ company: 'reparation' });
	}, []);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchWorkforce = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_WORKFORCE, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setEmployeeOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		fetchWorkforce();
	}, []);

	const onWorkforceMemberClick = (e, { id }) => {
		e.preventDefault();
		return setModalSection('VIEW');
	};

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				headers={DEFAULT_TABLE_HEADER}
				searchPlaceholder="Search member"
				onRowClick={onWorkforceMemberClick}
				data={parseOptions(employeeOptions)}
				defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
			/>
		</div>
	);
};

export default Members;
