import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Input, TextArea, Select, Button } from '@components';

import MultiItemTable from './MultiItemTable';

const equipmentBrandOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'samsung', label: 'Samsung' },
	{ value: 'whirlpool', label: 'Whirlpool' },
	{ value: 'lg', label: 'LG' },
	{ value: 'sony', label: 'Sony' },
	{ value: 'ge', label: 'General Electric' },
	{ value: 'maytag', label: 'Maytag' },
	{ value: 'bosch', label: 'Bosch' },
	{ value: 'kenmore', label: 'Kenmore' },
	{ value: 'panasonic', label: 'Panasonic' },
	{ value: 'sharp', label: 'Sharp' },
];

const equipmentTypeOptions = [
	{ value: 'none', label: 'None' },
	{ value: 'fridge', label: 'Refrigerator' },
	{ value: 'oven', label: 'Oven' },
	{ value: 'doubleOven', label: 'Double Oven' },
	{ value: 'washer', label: 'Washer' },
	{ value: 'dryer', label: 'Dryer' },
	{ value: 'dishwasher', label: 'Dishwasher' },
	{ value: 'microwave', label: 'Microwave' },
	{ value: 'cooktop', label: 'Cooktop' },
	{ value: 'range', label: 'Range' },
	// Add more equipment types as needed
	{ value: 'airConditioner', label: 'Air Conditioner' },
	{ value: 'heater', label: 'Heater' },
];

const equipmentStatusOptions = [
	{ value: 'pending', label: 'Pending' },
	{ value: 'complete', label: 'Complete' },
	{ value: 'inProgress', label: 'In Progress' },
	{ value: 'cancelled', label: 'Cancelled' },
	{ value: 'delayed', label: 'Delayed' },
	{ value: 'onHold', label: 'On Hold' },
	{ value: 'shipped', label: 'Shipped' },
	{ value: 'delivered', label: 'Delivered' },
	{ value: 'installed', label: 'Installed' },
];

const readOnly = false;

/*
 * Utility helper function to clear options
 *
 * @param {Object.<string, any>} payload - Data object.
 * @param {Array.<string>} - elts element required to clear.
 *
 * @returns {Object.<string, any>} - Return cleared data object.
 */
const getClearOptions = (payload = {}, elts = []) => {
	const clonedPayload = { ...payload };

	elts.forEach((currentKey) => {
		clonedPayload[currentKey] = [];
	});

	return clonedPayload;
}

const ProjectCreate = () => {
	const [ info, setInfo ] = React.useState({});
	const [ items, setItems ] = React.useState([]);
	const [ errors, setErrors ] = React.useState({});

	const onChange = (e) => {
		setInfo({
			...info, [e.target?.name]: (
				(e.target.type === 'checkbox') ? 
				e.target.checked : e.target.value
			)
		});

	}

	const onFilterChange = {
		equipmentStatus: (currentEquipmentStatusOptions) => {
			setInfo({ ...info, equipmentStatus: currentEquipmentStatusOptions });
		},
		equipmentBrand: (currentEquipmentBrandOptions) => {
			setInfo({ ...info, equipmentBrand: currentEquipmentBrandOptions });
		},
		equipmentType: (currentEquipmentTypeOptions) => {
			setInfo({ ...info, equipmentType: currentEquipmentTypeOptions });
		},
	};

	const onSubmit = () => {
		// TODO: 
		console.log('DATA:::', info);
	}

	return (
		<>
			<div className="row">
				<div className="col-lg-12">
					<div className="row">
						<div className="col-lg-4">
							<div className="mb-4">
								<Select 
									closeMenuOnSelect
									name="equipmentBrand"
									label="Equipment brand"
									value={info?.equipmentBrand}
									classNamePrefix="react-select"
									options={equipmentBrandOptions}
									className="react-select-container"
									onChange={onFilterChange.equipmentBrand}
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mb-4">
								<Select 
									closeMenuOnSelect
									name="equipmentType"
									label="Equipment type"
									value={info?.equipmentType}
									options={equipmentTypeOptions}
									classNamePrefix="react-select"
									className="react-select-container"
									onChange={onFilterChange.equipmentType}
								/>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="mb-4">
								<Select 
									label="Status"
									closeMenuOnSelect
									name="equipmentStatus"
									value={info?.equipmentStatus}
									classNamePrefix="react-select"
									options={equipmentStatusOptions}
									className="react-select-container"
									onChange={onFilterChange.equipmentStatus}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mb-4">
								<Input
									type="text"
									label="Model"
									id="equipmentModel"
									onChange={onChange}
									name="equipmentModel"
									secondaryLabel="()Optional"
									value={info?.equipmentModel}
									error={errors?.equipmentModel}
								/>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mb-4">
								<Input
									type="text"
									label="Model"
									id="equipmentModel"
									onChange={onChange}
									name="equipmentModel"
									secondaryLabel="()Optional"
									value={info?.equipmentModel}
									error={errors?.equipmentModel}
								/>
							</div>
						</div>
						{/*
						<div className="col-lg-6">
							<div className="mb-4">
								<label className="form-label">
									Estimated next visit time
								</label>
								<input type="text" className="form-control mb-3" aria-label="Next visit time estimate" disabled={readOnly} />
							</div>
						</div>
						*/}
						<div className="col-lg-12">
							<div className="mb-4">
								<TextArea 
									rows={2}
									label="Notes"
									secondaryLabel="(Optional)"
								/>
							</div>
						</div>
						<div className="mb-4">
							<MultiItemTable 
								items={items}
								setItems={setItems}
								addItemLabel="Add new product, services, parts"
							/>
						</div>
						<div className="col-lg-12">
							<div className="d-flex justify-content-end align-items-center">
								<Button onClick={onSubmit}>
									Add new project
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCreate;
