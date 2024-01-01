import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Input, Select, Schedule } from '@components';

const orgId = '8fa9a6e2-d4f3-49e3-9d1c-42b227f64fd2';

const typeOptions = [];
const sectorOptions = [];

const CurrencySettings = () => {
	const [ errors, setErrors ] = React.useState({});
	const [ payload, setPayload ] = React.useState({});

	// React.useEffect(() => {
	// 	setPayload(defaultValue);
	// }, [ defaultValue ]);

	// const { executeMutation, loading } = useGraphQLMutation(updateOrganizationInfos, { orgId });

	// const handleMutation = async (mutationVariables) => {
	// 	try {
	// 		setErrors({}); // Clear previous errors

	// 		const { data, error } = await executeMutation(mutationVariables);

	// 		if (!error) {
	// 			return data?.update_organizations.returning;
	// 		}
	// 	} catch (err) {
	// 		setErrors({ name: errorMessages.unique });
	// 	}
	// };

	// React.useEffect(() => {
	// 	setPayload({
	// 		id: defaultValue?.id,
	// 		www: defaultValue?.www,
	// 		name: defaultValue?.name,
	// 		logo: defaultValue?.logo,
	// 		slogan: defaultValue?.slogan,
	// 		type_id: defaultValue?.type_id,
	// 		sector_id: defaultValue?.sector_id,
	// 		org_number: defaultValue?.org_number,
	// 		pst_number: defaultValue?.pst_number,
	// 		gst_number: defaultValue?.gst_number,
	// 		pst_percent: defaultValue?.pst_percent,
	// 		gst_percent: defaultValue?.gst_percent,
	// 	});
	// }, [ defaultValue ]);

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

        const onSelectChange = ({ value }, key = '') => setPayload({
		...payload, [key]: value
	});

	const onSubmit = (e) => {
		// Check if we have error(s).
		const errs = validate(payload);
		setErrors(errs);

		if (Object.keys(errs).length) return null;

		handleMutation({ payload });
	}

	/* Labels */
	const sectorLabel = (
		<>
			Sector
			&nbsp;
			<span className="form-label-secondary">
				(Optional)
			</span>
		</>
	);

	const typeLabel = (
		<>
			Type
			&nbsp;
			<span className="form-label-secondary">
				(Optional)
			</span>
		</>
	);

	return (
		<>
			<Card>
				<Card.Body>
					<div className="row">
						<div className="col-lg-12">
							<h4 className="mb-2 bg-light p-2">
								Currency Settings
							</h4>
						</div>
					</div>
					<div className="table-responsive datatable-custom position-relative">
						<div id="datatable_wrapper" className="dataTables_wrapper no-footer">
							<table
								role="grid"
								className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle card-table dataTable no-footer"
							>
								<tbody>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Currency Name
											</span>
										</td>
										<td className="table-column-ps-0">
											<Input
												id="name"
												type="text"
												name="name"
												onChange={onChange}
												error={errors?.name}
												value={payload?.name}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Currency Symbol
											</span>
										</td>
										<td className="table-column-ps-0">
											<Input
												id="slogan"
												type="text"
												name="slogan"
												onChange={onChange}
												error={errors?.slogan}
												value={payload?.slogan}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Currency Position
											</span>
										</td>
										<td className="table-column-ps-0">
											<Select
												closeMenuOnSelect
												options={sectorOptions} 
												placeholder={sectorLabel} 
												defaultValue={payload?.sector_id}
												onChange={(payload) => onSelectChange(payload, 'sector_id')}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Decimal Separator
											</span>
										</td>
										<td className="table-column-ps-0">
											<Input
												id="www"
												type="text"
												name="www"
												onChange={onChange}
												error={errors?.www}
												value={payload?.www}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Thousand Separator
											</span>
										</td>
										<td className="table-column-ps-0">
											<Input
												id="www"
												type="text"
												name="www"
												onChange={onChange}
												error={errors?.www}
												value={payload?.www}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Cent precision
											</span>
										</td>
										<td className="table-column-ps-0">
											<Input
												id="www"
												type="text"
												name="www"
												onChange={onChange}
												error={errors?.www}
												value={payload?.www}
											/>
										</td>
									</tr>
									<tr role="row">
										<td>
											<span className="d-block h5 text-inherit mb-0">
												Zero format
											</span>
										</td>
										<td className="table-column-ps-0">
											<Select
												closeMenuOnSelect
												options={sectorOptions} 
												placeholder={sectorLabel} 
												defaultValue={payload?.sector_id}
												onChange={(payload) => onSelectChange(payload, 'sector_id')}
											/>
										</td>
									</tr>
									<tr role="row">
										<td />
										<td className="table-column-ps-0">
											<div className="d-flex align-items-center">
												<div className="ms-auto">
													<button type="button" className="btn btn-primary" onClick={onSubmit}>
														<i className="bi bi-save" />
														&nbsp;
														Save
													</button>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</Card.Body>
			</Card>
		</>
	);
}

export default CurrencySettings;
