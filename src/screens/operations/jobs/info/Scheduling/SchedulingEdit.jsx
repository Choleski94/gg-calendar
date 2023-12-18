import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Input, Select, TextArea, Button } from '@components';

const readOnly = false;

const techsOptions = [
	{ value: 'marker', label: 'Marek Sredniawa FLASH TECH' },
	{ value: 'aaron', label: 'Aaron FLASH TECH' },
	{ value: 'loic', label: 'Loic FLASH TECH' },
	{ value: 'matt', label: 'Matt FLASH TECH' },
];

const statusOptions = [
	{ value: 'pending', label: 'Pending' },
	{ value: 'complete', label: 'Complete' },
	{ value: 'cancelled', label: 'Cancelled' },
	{ value: 'delayed', label: 'Delayed' },
];

const SchedulingEdit = () => {
	const [ data, setData ] = React.useState({});
	const [ errors, setErrors ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);

	const onChange = (e) => setData({
		...data, [e.target?.name]: (
			(e.target.type === 'checkbox') ? 
			e.target.checked : e.target.value
		)
	});

	const onFilterChange = {
		status: (currentStatusOptions) => {
			setData({ ...data, status: currentStatusOptions });
		},
		techs: (currentTechsOptions) => {
			setData({ ...data, techs: currentTechsOptions });
		},
	};

	const onSubmit = () => {
		// TODO: 
		console.log('DATA:::', data);
	};

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="row">
					<div className="col-lg-8">
						<div className="mb-4">
							<Select 
								label="Techs"
								closeMenuOnSelect
								value={data?.techs}
								options={techsOptions}
								classNamePrefix="react-select"
								onChange={onFilterChange.techs}
								className="react-select-container"
							/>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="mb-4">
							<Select 
								label="Status"
								closeMenuOnSelect
								value={data?.status}
								options={statusOptions}
								classNamePrefix="react-select"
								onChange={onFilterChange.status}
								className="react-select-container"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<Input
								type="date"
								id="startDate"
								name="startDate"
								label="Start Date"
								onChange={onChange}
								value={data?.startDate}
								error={errors?.startDate}
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<Input
								type="time"
								id="startTime"
								name="startTime"
								label="Start Time"
								onChange={onChange}
								value={data?.startTime}
								error={errors?.startTime}
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<Input
								type="date"
								id="endDate"
								name="endDate"
								label="End Date"
								onChange={onChange}
								value={data?.endDate}
								error={errors?.endDate}
								secondaryLabel="(Optional)"
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="mb-4">
							<Input
								type="time"
								id="endTime"
								name="endTime"
								label="End Time"
								onChange={onChange}
								value={data?.endTime}
								error={errors?.endTime}
								secondaryLabel="(Optional)"
								className="form-control form-control-lg"
							/>
						</div>
					</div>
					{/*
					<div className="col-lg-6">
						<div className="mb-4">
							<label className="form-label">
								Duration
							</label>
							<div className="input-group">
								<input
									type="text"
									aria-label={1}
									placeholder={1}
									defaultValue="1"
									name="weightName"
									className="form-control"
								/>
								<div className="input-group-append">
									<div className="tom-select-custom tom-select-custom-end">
										<select tabIndex={-1} className="js-select form-select tomselected ts-hidden-accessible">
											<option value="usd">Min</option>
											<option value="cad" selected>
												Hour
											</option>
										</select>
										<div className="ts-wrapper js-select form-select single plugin-change_listener plugin-hs_smart_position input-hidden full has-items">
											<div className="ts-control">
												<div data-value="cad" className="item" data-ts-item>
													Hour
												</div>
											</div>
											<div className="tom-select-custom" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					*/}
				</div>
				<div className="row">
					<div className="col-sm-12">
						<div className="mb-4">
							<TextArea 
								name="notes"
								label="Notes"
								onChange={onChange}
								value={data?.notes}
								secondaryLabel="(Optional)"
							/>
						</div>
					</div>
				</div>
				<div className="col-lg-12">
					<div className="d-flex justify-content-end align-items-center">
						<Button onClick={onSubmit}>
							Add new event
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SchedulingEdit;
