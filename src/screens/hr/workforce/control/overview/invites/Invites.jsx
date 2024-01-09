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

const Invites = ({ fetchInvites, inviteOptions, roleObj }) => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	React.useMemo(() => {
		setData({ company: 'reparation' });
	}, []);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

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

	const handleDeleteRole = (inviteId) => {
		setLoading(true);

		request.delete({ entity: ENTITY_INVITE, id: inviteId }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				fetchInvites();
			}
		}).catch((error) => {
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

	const renderInviteUser = (
		<button 
			type="button" 
			onClick={onInviteMemberClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Invite
		</button>
	);

	const onDelete = (e, inviteId) => {
		e.preventDefault();
		handleDeleteRole(inviteId);
	}

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<Table
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderInviteUser}
				headers={DEFAULT_TABLE_HEADER}
				searchPlaceholder="Search invites"
				defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
				data={parseOptions(inviteOptions, roleObj, onDelete)}
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
