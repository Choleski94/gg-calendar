import React from 'react';

import { NavPill } from '@components';

import WorkforcePositionForm from './WorkforcePositionForm';
import WorkforcePositionMember from './WorkforcePositionMember';

const SUPPORTED_SCREEN_SECTIONS = {
	UPDATE: 'UPDATE',
	ASSIGN: 'ASSIGN',
}

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.ASSIGN,
		value: 'Assign',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.UPDATE,
		value: 'Settings',
	},
]

const WorkforcePositionDialog = ({ orgId, defaultValues, aggregateOption }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.ASSIGN);
	return (
		<>
			<NavPill
				fullWidth
				options={NAV_TAB_OPTIONS}
				handleTabClick={setActiveSection}
			/>
			<div className="mt-5">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.UPDATE && (
					<WorkforcePositionForm
                                                orgId={orgId} mode="UPDATE"
                                                defaultValues={defaultValues}
                                                aggregateOption={aggregateOption}
					/>
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.ASSIGN && (
					<WorkforcePositionMember />
				)}
			</div>
		</>
	)
}

export default WorkforcePositionDialog;
