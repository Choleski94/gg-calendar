import React from 'react';
import { useSelector } from 'react-redux';

import api from '@api';
import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { selectUser } from '@store/selectors/user';
import { Card, Forms, Input, Modal } from '@components';

const DEFAULT_DELETE_ACCOUNT_DATA = {
	password: '',
	shouldDeleteAccount: false
};

const InformationSettings = () => {
	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ payload, setPayload ] = React.useState({ ...DEFAULT_DELETE_ACCOUNT_DATA });

	const userData = useSelector(selectUser);

	const { id: userId } = userData;

	const fecthUserData = () => {
		request.read({ entity: 'user', id: userId }).then((response) => {
			setLoading(false);

			if (response.success === true) {
				setPayload({
					photo: response?.result?.photo,
					zip: response?.result?.zip,
					unit: response?.result?.unit,
					color: response?.result?.color,
					buzzer: response?.result?.buzzer,
					address: response?.result?.address,
					lastName: response?.result.lastName,
					birthday: response?.result?.birthday,
					firstName:response?.result?.firstName,
					city: response?.result?.city,
					email: response?.result?.email,
					phone: response?.result?.phone,
					state: response?.result?.state,
					gender: response?.result?.gender,
					country: response?.result?.country,
					position: response?.result?.position,
					department: response?.result?.department,
					languages: response?.result?.languages,
				});
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	React.useEffect(() => {
		fecthUserData();
	}, []);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
	};

	const onChange = (e) => setPayload({
		...payload,
		[e.target.name]: e.target.value,
	});

	const onCheckChange = (e) => setPayload({
		...payload,
		[e.target.name]: JSON.parse(e.target.checked)
	});

	const validateDelete = (payload) => {
		const errs = {};

		// Check for empty input(s).
		if (!payload.password) {
			errs.password = errorMessages.empty;
		}

		if (!payload.shouldDeleteAccount) {
			errs.shouldDeleteAccount = 'Need to be check';
		}

		return errs;
	}

	const handleSubmit = (payload) => {
		const entity = 'user/update/' + userId;

		request.patch({ entity, jsonData: payload }).then((response) => {
			setLoading(false);
			// if (response.success === true) {
			// 	console.log('Done....');
			// }
		}).catch(() => {
			setLoading(false);
		});
	}

	const onDeleteSubmit = (e) => {
		// Check if we have error(s).
		const errs = validateDelete(payload);

		setErrors(errs);

		if (Object.keys(errs).length) return null;

		request.delete({ entity: 'user', id: userId, jsonData: payload }).then((response) => {
			setLoading(false);

			if (response.success === true) {
				setPayload({ ...payload, ...DEFAULT_DELETE_ACCOUNT_DATA });
				setShowModal(false);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const onDeleteClick = (e) => {
		e.preventDefault();

		if (!showModal) {
			setErrors({})
			setShowModal(true);
			setPayload({ ...payload, ...DEFAULT_DELETE_ACCOUNT_DATA });
		}
	}

	const onModalClose = () => setShowModal(false);

	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>
						General Settings
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Forms.Contact 
						withPhoto
						data={payload}
						handleSubmit={handleSubmit}
					/>
				</Card.Body>
			</Card>
			<br />
			<br />
			<Card>
				<Card.Header>
					<Card.Title>
						Delete your account
					</Card.Title>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						When you delete your account, you lose access to Tigado account 
						services, and we permanently delete your personal data. 
					</Card.Text>
					<div className="d-flex justify-content-end gap-3">
						<button type="submit" className="btn btn-outline-danger" onClick={onDeleteClick}>
							Delete
						</button>
					</div>
				</Card.Body>
			</Card>
			{showModal ? (
				<Modal title="Delete your account" size="md" centered onCloseRequest={onModalClose}>
					<Card.Text>
						When you delete your account, you lose access to Tigado
						account services, and we permanently delete your personal
						data.
						{/*  You can cancel the deletion for 14 days. */}
					</Card.Text>
					<div className="mt-4 mb-4">
						<Input
							id="password"
							type="password"
							name="password"
							onChange={onChange}
							error={errors?.password}
							value={payload?.password}
							placeholder="Enter current password"
							className="form-control form-control-lg"
						/>
					</div>
					<div className="mb-1">
						<Input
							defaultValue
							type="checkbox"
							onChange={onCheckChange}
							id="shouldDeleteAccount"
							name="shouldDeleteAccount"
							className="form-check-input"
							error={errors?.shouldDeleteAccount}
							value={payload?.shouldDeleteAccount}
							label="Confirm that I want to delete my account"
						/>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-danger" onClick={onDeleteSubmit}>
							Delete
						</button>
					</div>
				</Modal>
			) : null}
		</>
	);
}

export default InformationSettings;
