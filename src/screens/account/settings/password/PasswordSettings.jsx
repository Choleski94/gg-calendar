import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import api from '@api';
import { request } from '@utils/request';
import { Card, Input, Modal } from '@components';
import formatMessage from '@utils/formatMessage';
import { selectUser } from '@store/selectors/user';

const DEFAULT_RESET_PASSWORD_DATA = {
	password: '', 
	passwordC: '',
	oldPassword: '', 
};

const PasswordSettings = () => {
	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ data, setData ] = React.useState(DEFAULT_RESET_PASSWORD_DATA);

	const { id: userId } = useSelector(selectUser);

	const errorMessages = {
		empty: formatMessage('form.validation.empty.error.text'),
		passwordSame: formatMessage('form.validation.password-same.error.text'),
		passwordC: formatMessage('form.validation.password-confirm.error.text'),
	};

	const validate = (data = {}) => {
                const errs = {};

		if (!data?.oldPassword) {
			errs.oldPassword = errorMessages.empty;
		}

		if (!data?.password) {
			errs.password = errorMessages.empty;
		}

		if (!data?.passwordC) {
			errs.passwordC = errorMessages.empty;
		}

		if (data.passwordC && data.passwordC !== data.password) {
			errs.passwordC = errorMessages.passwordC;
		}

		if (data.oldPassword && data.password && data.oldPassword === data.password) {
			errs.password = errorMessages.passwordSame;
		}

	        return errs;
	};

	const onChange = (e) => {
		setErrors({});

		setData({
			...data, [e.target?.name]: (
				(e.target.type === 'checkbox') ? 
				e.target.checked : e.target.value
			)
		});
	}

	const onSubmit = (e) => {
		e.preventDefault();

		// Check if we have error(s).
		const errs = validate(data);

		setErrors(errs);

		if (Object.keys(errs).length) return null;

		const entity = 'user/password-update/' + userId;

		request.patch({ entity, jsonData: data }).then((response) => {
			setErrors({});

			setLoading(false);

			if (response.success === true) {
				setData(DEFAULT_RESET_PASSWORD_DATA)			
			}

			console.log(response);
		}).catch(({ response: { data: { msg }} }) => {
			setErrors({
				password: msg,
				passwordC: msg,
			});

			setLoading(false);
		});
	};

	return (
		<Card>
			<Card.Header>
				<Card.Title>
					Change your password
				</Card.Title>
			</Card.Header>
			<Card.Body>
				<form id="changePassword">
					<div className="row mb-4">
						<label
							htmlFor="oldPassword"
							className="col-sm-3 col-form-label form-label"
						>
							Current password
						</label>
						<div className="col-sm-9">
							<Input
								type="password"
								id="oldPassword"
								name="oldPassword"
								onChange={onChange}
								value={data?.oldPassword}
								error={errors?.oldPassword}
								placeholder="Enter current password"
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="row mb-4">
						<label
							htmlFor="password"
							className="col-sm-3 col-form-label form-label"
						>
							New password
						</label>
						<div className="col-sm-9">
							<Input
								type="password"
								id="password"
								name="password"
								onChange={onChange}
								value={data?.password}
								error={errors?.password}
								placeholder="Enter new password"
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="row mb-4">
						<label
							htmlFor="passwordC"
							className="col-sm-3 col-form-label form-label"
						>
							Confirm new password
						</label>
						<div className="col-sm-9">
							<div className="mb-3">
								<Input
									type="password"
									id="passwordC"
									name="passwordC"
									onChange={onChange}
									value={data?.passwordC}
									error={errors?.passwordC}
									placeholder="Confirm your new password"
									className="form-control form-control-lg"
								/>
							</div>
							<h5>
								Password requirements:
							</h5>
							<p className="fs-6 mb-2">
								Ensure that these requirements are met:
							</p>
							<ul className="fs-6">
								<li>
									Minimum 8 characters long - the more, the better
								</li>
								<li>
									At least one lowercase character
								</li>
								<li>
									At least one uppercase character
								</li>
								<li>
									At least one number, symbol, or whitespace character
								</li>
							</ul>
						</div>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn btn-primary" onClick={onSubmit}>
							Save Changes
						</button>
					</div>
				</form>
			</Card.Body>
		</Card>
	);
}

export default PasswordSettings;
