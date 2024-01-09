import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import { ENTITY_ROLE } from '@constants/access';
import formatMessage from '@utils/formatMessage';
import { Table, Modal, Forms } from '@components';
import { trimString, formatOptionValueType } from '@utils';
import { ENTITY_INVITE, DEFAULT_TABLE_HEADER, DEFAULT_ACTIVE_HEADER_KEYS } from '@constants/invites';

import { parseOptions } from './Invites.helpers';

const parseSelectOptionValues = () => null;

const pagination = {};

const Invites = () => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ roleObj, setRoleObj ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ inviteOptions, setInviteOptions ] = React.useState([]);

	React.useMemo(() => {
		setData({ company: 'reparation' });
	}, []);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchRoles = () => {
		setLoading(true);

		request.list({ entity: ENTITY_ROLE }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setRoleObj(
					data?.result?.reduce((agg, payload) => Object.assign(agg, {
						[payload?._id]: payload?.name,
					}), {})
				);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const fetchInvites = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_INVITE, options }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setInviteOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		Promise.all([
			fetchRoles(),
			fetchInvites()
		]);
	}, []);

	const handleSubmit = (payload) => {
		setShowModal(false);

		setLoading(true);

		request.create({ entity: ENTITY_INVITE, jsonData: payload }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setShowModal(false);
				fetchInvites();
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const onModalClose = () => {
		setShowModal(false);
	}

	const onInviteMemberClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const onViewMemberClick = (e, { id }) => {
		e.preventDefault();
		return setModalSection('VIEW');
	};

	const renderInviteEmployee = (
		<button 
			type="button" 
			onClick={onInviteMemberClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Invite
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderInviteEmployee}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewMemberClick}
				searchPlaceholder="Search invites"
				data={parseOptions(inviteOptions, roleObj)}
				defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
			/>
			{showModal ? (
				<Modal title="Invite users" size="md" centered onCloseRequest={onModalClose}>
					<Forms.InviteUser
						setData={handleSubmit}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default Invites;
