import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { Table, Modal, Forms } from '@components';
import { trimString, formatOptionValueType } from '@utils';
import { ENTITY_EMPLOYEE, DEFAULT_TABLE_HEADER, DEFAULT_ACTIVE_HEADER_KEYS } from '@constants/employees';

import { parseOptions } from './Members.helpers';

const parseSelectOptionValues = () => null;

const pagination = {};

const Members = ({ setModalSection }) => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ employeeOptions, setEmployeeOptions ] = React.useState([]);

	React.useMemo(() => {
		setData({ company: 'reparation' });
	}, []);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchEmployeeMembers = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_EMPLOYEE, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setEmployeeOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		fetchEmployeeMembers();
	}, []);

	const handleSubmit = (payload) => {
		setLoading(true);

		request.create({ entity: ENTITY_EMPLOYEE, jsonData: payload }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setShowModal(false);
				fetchEmployeeMembers();
			}
		}).catch(() => {
			setLoading(false);
		});

	}

	const onModalClose = () => {
		setShowModal(false);
	}

	const onAddMemberClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const onViewMemberClick = (e, { id }) => {
		e.preventDefault();
		return setModalSection('VIEW');
	};

	const renderAddEmployee = (
		<button 
			type="button" 
			onClick={onAddMemberClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Add new employee
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{/*
			<EmployeeMetrics 
				options={employeeOptions}
			/>
			*/}
			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderAddEmployee}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewMemberClick}
				searchPlaceholder="Search employees"
				data={parseOptions(employeeOptions)}
				defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
			/>
			{showModal ? (
				<Modal title="Add new employee" size="lg" centered onCloseRequest={onModalClose}>
					<Forms.Contact
						withNote
						isEmployee
						data={data}
						handleSubmit={handleSubmit}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default Members;
