import React from 'react';

import { Schedule } from '@components';
import formatMessage from '@utils/formatMessage';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const CompanyInformationOpeningHoursForm = ({ defaultValue, typeOptions = [], sectorOptions = [] }) => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState(defaultValue || {});

	const errorMessages = {
		empty: 'Can\'t be empty.',
	};

	const validate = (payload) => {
		const errs = {};

		// Check for empty input(s).
		if (!payload.name) {
			errs.name = errorMessages.empty;
		}

		return errs;
	}

	const onChange = (e) => setPayload({
		...payload, [e.target.name]: e.target.value
	});

	const onSubmit = (e) => {
		// Check if we have error(s).
		const errs = validate(payload);
		setErrors(errs);

		if (Object.keys(errs).length) return null;

		console.log(payload);
	}

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-12">
						<h5 className="mb-2 text-uppercase bg-light p-2">
							Opening Hours
						</h5>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<Schedule />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12 mt-4">
						<div className="d-flex align-items-center">
							<div className="ms-auto">
								<button type="button" className="btn btn-primary" onClick={onSubmit}>
									<i className="bi bi-save" />
									&nbsp;
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CompanyInformationOpeningHoursForm;
