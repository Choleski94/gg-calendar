import React from 'react';
import { useRouter } from 'next/router';

import api from '@api';
import {
	SUPPORTED_JOB_SECTIONS,
	SUPPORTED_JOB_STATUSES,
	SUPPORTED_JOB_PRIORITIES,
} from '@constants/jobs';
import mockJob from '@mocks/jobs';
import { hasPrimary } from '@utils'; 
import Table from '@components/Table';
import Modal from '@components/Modal';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';

const DEFAULT_JOBS_TABLE_HEADER = [
	// { key: 'id', label: 'ID' }, // FOR DEBUGGING PURPOSES ONLY
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phones' },
	{ key: 'email', label: 'Emails' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'status', label: 'Status' },
	{ key: 'priority', label: 'Priority' },
	{ key: 'notes', label: 'Notes' },
];

const CUSTOMER_SECTIONS = {
	ADD: 'ADD',
	VIEW: 'VIEW',
}

export const JobsCTA = ({ onClick }) => (
	<a className="btn btn-primary" href="#add-service-location" onClick={onClick}>
		<i className="bi bi-hammer me-1" /> Create new job
	</a>
);

const Jobs = ({ hasActiveCta = false, toggleCta = () => null }) => {
	const router  = useRouter();

	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchCustomerLocations = async () => {
		setLoading(true);
		setOptions(mockJob.list);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchCustomerLocations();
	}, []);

	const handleCustomerClick = (invoiceId = '') => {
		setShowModal(true);
	};

	const toggleModal = () => {
		setShowModal(false);
		if (hasActiveCta) {
			toggleCta();
		}
	};

	const activeSection = React.useMemo(() => {
		let res = CUSTOMER_SECTIONS.VIEW;

		if (hasActiveCta) {
			res = CUSTOMER_SECTIONS.ADD;
			setShowModal(true);
		}

		return res;
	}, [ hasActiveCta ]);

	const handleJobClick = (e, payload) => {
		if (Boolean(payload?.id)) {
			return router.push({
				pathname: '/jobs',
				query: { id: payload?.id }
			});
		}
	};

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{showModal && (
				<Modal onCloseRequest={toggleModal}>
					{activeSection === CUSTOMER_SECTIONS.VIEW && (
						'ServiceLocationView'
					)}
					{activeSection === CUSTOMER_SECTIONS.ADD && (
						'ServiceLocationCreate'
					)}
				</Modal>
			)}
			<Table
				withFilter
				height="63vh"
				elementsPerPage={300}
				onRowClick={handleJobClick}
				searchPlaceholder="Search jobs"
				headers={DEFAULT_JOBS_TABLE_HEADER}
				data={new Array(6).fill(options[3]).map((payload, idx = 0) => ({
					'id': 123,
					'name': (
						<span className="d-flex align-items-center">
							<div>
								<span className="d-block h5 text-inherit mb-0">
									{payload?.firstName} {payload?.lastName}
									{payload?.isPrimary && (
										<>
											&nbsp;
											<i className="bi-patch-check-fill text-primary" />
										</>
									)}
									{payload?.isBlacklist && (
										<>
											&nbsp;
											<i className="bi-patch-exclamation-fill text-danger" />
										</>
									)}
								</span>
								{payload?.position && (
									<span className="d-block fs-5 text-body">
										{payload?.position}
									</span>
								)}
							</div>
						</span>
					),
					'phone': (
						payload?.phones && payload?.phones.length ? (
							payload?.phones.map(({ isPrimary, type, extension, value }) => (
								<div>
									{value}
									{extension && extension.length && (
										<>
											, ext. {extension}
										</>
									)}
									&nbsp;
									{type === SUPPORTED_PHONE_TYPES.HOME && (
										<small className="font-italic">
											(Home)
										</small>
									)}
									{type === SUPPORTED_PHONE_TYPES.MOBILE && (
										<small className="font-italic">
											(Mobile)
										</small>
									)}
									{type === SUPPORTED_PHONE_TYPES.OFFICE && (
										<small className="font-italic">
											(Office)
										</small>
									)}
									&nbsp;
									{hasPrimary(isPrimary, payload?.phones.length) && (
										<small className="font-italic">
											&nbsp;
											<i className="bi-patch-check-fill text-success" />
										</small>
									)}
								</div>
							))
						) : 'N/A'
					),
					'email': (
						payload?.emails && payload?.emails.length ? (
							payload?.emails.map(({ isPrimary, value }) => (
								<div>
									{value}
									{hasPrimary(isPrimary, payload?.emails.length) && (
										<>
											&nbsp;
											<i className="bi-patch-check-fill text-success" />
										</>
									)}
								</div>
							))
						) : 'N/A'
					),
					'address': (
						<small>
							{payload?.contact?.address}
						</small>
					),
					'unit': (
						<small className="text-uppercase">
							{payload?.contact?.unit}
						</small>
					),
					'city': (
						<small>
							{payload?.contact?.city}, {payload?.contact?.state}
						</small>
					),
					'zip': (
						<small>
							{payload?.contact?.zip}
						</small>
					),
					'status': (
						<small>
							{payload?.status === SUPPORTED_JOB_STATUSES.OPEN && (
								'Open'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.ON_HOLD && (
								'On Hold'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.REOPENED && (
								'Reopened'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.SCHEDULED && (
								'Scheduled'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.COMPLETED && (
								'Completed'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.CANCELLED && (
								'Cancelled'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.FOLLOW_UP && (
								'Follow Up'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.RESCHEDULED && (
								'Rescheduled'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.IN_PROGRESS && (
								'In Progress'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.PENDING_APPROVAL && (
								'Pending Approval'
							)}
							{payload?.status === SUPPORTED_JOB_STATUSES.WAITING_FOR_PARTS && (
								'Waiting For Parts'
							)}
						</small>
					),
					'priority': (
						<>
							{payload?.priority === SUPPORTED_JOB_PRIORITIES.URGENT && (
								<span className="badge text-danger">
									<span className="legend-indicator bg-danger"/>
									Urgent
								</span>
							)}
							{payload?.priority === SUPPORTED_JOB_PRIORITIES.HIGH && (
								<span className="badge text-warning">
									<span className="legend-indicator bg-warning"/>
									High
								</span>
							)}
							{payload?.priority === SUPPORTED_JOB_PRIORITIES.NORMAL && (
								<span className="badge text-success">
									<span className="legend-indicator bg-success"/>
									Normal
								</span>
							)}
							{payload?.priority === SUPPORTED_JOB_PRIORITIES.LOW && (
								<span className="badge text-dark">
									<span className="legend-indicator bg-dark"/>
									Low
								</span>
							)}
						</>
					),
					'notes': (
						<small>
							{(payload?.notes && payload?.notes.length ? payload?.notes[0].value : '')}
						</small>
					),
				}))}
			/>
		</div>
	);
};

export default Jobs;
