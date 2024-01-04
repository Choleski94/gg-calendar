import React from 'react';

import api from '@api';
import { NavTab } from '@components';
import formatMessage from '@utils/formatMessage';

import OrderCreate from './OrderCreate';
import OrderActivity from './OrderActivity';
import OrderInventory from './OrderInventory';

const SUPPORTED_SECTIONS = {
	SUMMARY: 'SUMMARY',
	ACTIVITY: 'ACTIVITY',
	INVENTORY: 'INVENTORY',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.SUMMARY,
		value: 'Summary',
	},
	{
		key: SUPPORTED_SECTIONS.INVENTORY,
		value: 'Inventory',
	},
	{
		key: SUPPORTED_SECTIONS.ACTIVITY,
		value: 'Activity',
	},
];

const OrderSummary = ({ id: customerId = '' }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SECTIONS.SUMMARY);

	return (
		<>
			<NavTab 
				withPageHeader
				id="accountTab" 
				options={NAV_TAB_OPTIONS}
				handleTabClick={setActiveSection}
			/>
			<div className="d-grid gap-3 gap-lg-5 mt-5">
				{activeSection === SUPPORTED_SECTIONS.SUMMARY && (
					<OrderCreate readOnly />
				)}

				{activeSection === SUPPORTED_SECTIONS.INVENTORY && (
					<OrderInventory />
				)}

				{activeSection === SUPPORTED_SECTIONS.ACTIVITY && (
					<OrderActivity />
				)}
			</div>
		</>
	);
}

export default OrderSummary;
