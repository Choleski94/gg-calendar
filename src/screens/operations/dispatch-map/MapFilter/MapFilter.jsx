
import React from 'react';

import formatMessage from '@utils/formatMessage';
import { Button, Input, Select } from '@components';

const genderOptions = [
	{ label: 'New', value: 'NEW' },
	{ label: 'Closed', value: 'CLOSED' },
	{ label: 'Completed', value: 'COMPLETED' }, 
];

const statusOptions = [
	{ label: 'New', value: 'NEW' },
	{ label: 'Closed', value: 'CLOSED' },
	{ label: 'Completed', value: 'COMPLETED' }, 
];

const markerOptions = [
	{ label: 'Jobs', value: 'JOBS' }, 
	{ label: 'Office', value: 'OFFICE' },
	{ label: 'Stores', value: 'STORES' },
	{ label: 'Tech home', value: 'TECH_HOME' },
];

const caracteristicOptions = [
	{ label: 'Time', value: 'TIME' }, 
	{ label: 'Part', value: 'PART' },
	{ label: 'Equipment', value: 'EQUIPMENT' },
];

const equipmentOptions = [
	{ label: 'Gas', value: 'GAS' }, 
	{ label: 'Fridge', value: 'FRIDGE' },
	{ label: 'Special', value: 'SPECIAL' },
	{ label: 'Induction', value: 'INDUCTION' },
	{ label: 'Everything else', value: 'OTHER' },
];

const MapFilter = ({ data, setData, errors, onSubmit }) => {

	const onChange = (e) => setData({
		...data, [e.target?.name]: (
			(e.target.type === 'checkbox') ? 
			e.target.checked : e.target.value
		)
	});

	const onOptionChange = ({ name, value }) => setData({
		...data, [name]: value
	});

	const onFilterChange = (currentOptions, key) => {
		setData({ ...data, [key]: currentOptions });
	};

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="mb-3">
					<Input
						type="text"
						id="firstname"
						name="firstname"
						onChange={onChange}
						value={data?.firstname}
						error={errors?.firstname}
						placeholder="Find a specific address on the map"
					/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="mb-3">
					<Select 
						isMulti
						closeMenuOnSelect
						value={data?.gender}
						options={genderOptions}
						placeholder="All employees"
						classNamePrefix="react-select"
						className="react-select-container"
						onChange={(data) => onFilterChange(data, 'gender')}
					/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="mb-3">
					<Select 
						isMulti
						closeMenuOnSelect
						value={data?.status}
						options={statusOptions}
						placeholder="All job statuses"
						classNamePrefix="react-select"
						className="react-select-container"
						onChange={(data) => onFilterChange(data, 'status')}
					/>
				</div>
			</div>

			<div className="col-lg-6">
				<div className="mb-3">
					<Select 
						isMulti
						closeMenuOnSelect
						value={data?.marker}
						options={markerOptions}
						placeholder="All markers"
						classNamePrefix="react-select"
						className="react-select-container"
						onChange={(data) => onFilterChange(data, 'marker')}
					/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="mb-3">
					<Select 
						isMulti
						closeMenuOnSelect
						value={data?.caracteristic}
						options={caracteristicOptions}
						classNamePrefix="react-select"
						className="react-select-container"
						placeholder="Marker caracteristics"
						onChange={(data) => onFilterChange(data, 'caracteristic')}
					/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="mb-3">
					<Input
						type="date"
						id="firstname"
						name="firstname"
						onChange={onChange}
						value={data?.firstname}
						error={errors?.firstname}
					/>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="mb-3">
					<Select 
						isMulti
						closeMenuOnSelect
						value={data?.equipments}
						options={equipmentOptions}
						placeholder="All equipments"
						classNamePrefix="react-select"
						className="react-select-container"
						onChange={(data) => onFilterChange(data, 'equipments')}
					/>
				</div>
			</div>
			<div className="col-lg-12">
				<div className="mb-5">
					<div className="d-flex justify-content-end align-items-center">
						<Button onClick={onSubmit}>
							Search
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MapFilter;
