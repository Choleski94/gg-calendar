import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { trimString, formatOptionValueType } from '@utils';
import { Card, Table, Counter, Modal, Forms } from '@components';
import { ENTITY_WORKFORCE, DEFAULT_TABLE_HEADER, DEFAULT_ACTIVE_HEADER_KEYS } from '@constants/workforce';

import { parseOptions } from './WorkforceOverview.helpers';

const parseSelectOptionValues = () => null;

const pagination = {};

const WorkforceOverview = () => {
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
		fetchEmployeeMembers();
	}, []);

	const handleSubmit = (payload) => {
		setLoading(true);

		request.create({ entity: ENTITY_WORKFORCE, jsonData: payload }).then((data) => {
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
			<div className="row">
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={18} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 5.0%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={11} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-success text-success p-1">
										<i className="bi-graph-up" /> 1.2%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Innactive members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={16} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Pending Invites
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={16} />
									</span>
								</div>
								<div className="col-auto">
									<span className="badge bg-soft-danger text-danger p-1">
										<i className="bi-graph-down" /> 2.8%
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderInviteEmployee}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewMemberClick}
				searchPlaceholder="Search workforce"
				data={parseOptions(employeeOptions)}
				defaultActiveKeys={DEFAULT_ACTIVE_HEADER_KEYS}
			/>

			{showModal ? (
				<Modal title="Invite users" size="md" centered onCloseRequest={onModalClose}>
					<Forms.InviteUser
						// data={data}
						// handleSubmit={handleSubmit}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default WorkforceOverview;
