import React from 'react';

import { MultiStepForm } from '@components';

import CustomerSection from './CustomerSection';

import BaseProjects from '../../../../create/Projects/BaseProjects';
import ScheduleSection from '../../../../create/Scheduling/SchedulingEdit';
import BaseCustomerOverview from '../../../../../../crm/customers/CustomerControl/overview/BaseCustomerOverview';

const DEFAULT_ACTIVE_CUSTOMER_TABLE_HEADER = [
	'name',
	'phone',
	'address',
	'unit',
	'city',
	'zip',
];

const DEFAULT_ACTIVE_PROJECT_TABLE_HEADER = [
	'brand', 
	'equipment', 
	'model',
	'serial',
	'status',
	'notes'
];

const multiStepOptions = [
	{
		title: 'Customer & Location',
		content: () => (
			<BaseCustomerOverview 
				defaultActiveKeys={DEFAULT_ACTIVE_CUSTOMER_TABLE_HEADER}
			/>
		),
	},
	{
		title: 'Projects',
		content: () => (
			<BaseProjects 
				withMetrics 
				defaultActiveKeys={DEFAULT_ACTIVE_PROJECT_TABLE_HEADER} 
			/>
		),
	},
	{
		title: 'Scheduling',
		content: ScheduleSection,
	},
];

const AddJobForm = () => (
	<MultiStepForm 
		id="addCustomer" 
		options={multiStepOptions}
	/>
);

export default AddJobForm;
