import React from 'react';

import api from '@api';
import { Card, NavPill } from '@components';
import formatMessage from '@utils/formatMessage';

import Files from '../../Files';
import Notes from '../../Notes';
import Orders from '../../Orders';
import Activity from '../../Activity';
import InvoiceSummary from '../../Invoices/InvoiceSummary';

import ProjectCreate from '../ProjectCreate';

const readOnly = false;

const SUPPORTED_SECTIONS = {
	FILES: 'FILES',
	NOTES: 'NOTES',
	ORDERS: 'ORDERS',
	INVOICE: 'INVOICE',
	SUMMARY: 'SUMMARY',
	ACTIVITY: 'ACTIVITY',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.SUMMARY,
		value: 'Summary',
	},
	{
		key: SUPPORTED_SECTIONS.ORDERS,
		value: 'Orders',
	},
	{
		key: SUPPORTED_SECTIONS.FILES,
		value: 'Files',
	},
	{
		key: SUPPORTED_SECTIONS.ACTIVITY,
		value: 'Activity Log',
	},
	{
		key: SUPPORTED_SECTIONS.NOTES,
		value: 'Notes',
	},
	{
		key: SUPPORTED_SECTIONS.INVOICE,
		value: 'Invoice',
	},
];

const ProjectInfo = ({ id: customerId = '' }) => {
	const [ activeSection, setActiveSection] = React.useState(SUPPORTED_SECTIONS.SUMMARY);
	return (
		<>
			<NavPill
				options={NAV_TAB_OPTIONS}
				handleTabClick={setActiveSection}
			/>
			<div className="row mt-5">
				<div className="col-md-12">
					{activeSection === SUPPORTED_SECTIONS.SUMMARY && (
						<ProjectCreate />
					)}
					{activeSection === SUPPORTED_SECTIONS.ORDERS && (
						<Orders />
					)}
					{activeSection === SUPPORTED_SECTIONS.FILES && (
						<Files />
					)}
					{activeSection === SUPPORTED_SECTIONS.ACTIVITY && (
						<Activity />
					)}
					{activeSection === SUPPORTED_SECTIONS.NOTES && (
						<Notes />
					)}
					{activeSection === SUPPORTED_SECTIONS.INVOICE && (
						<InvoiceSummary withControl />
					)}
				</div>
			</div>
		</>
	);
}

export default ProjectInfo;
