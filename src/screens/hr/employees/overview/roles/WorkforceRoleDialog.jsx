import React from 'react';

import { NavPill } from '@components';

import WorkforceRoleForm from './WorkforceRoleForm';
import WorkforceRoleMember from './WorkforceRoleMember';
import WorkforceRolePermissions from './WorkforceRolePermissions';

const SUPPORTED_SCREEN_SECTIONS = {
	UPDATE: 'UPDATE',
	ASSIGN: 'ASSIGN',
	PERMISSIONS: 'PERMISSIONS',
}

const BASE_NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.ASSIGN,
		value: 'Assign',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.PERMISSIONS,
		value: 'Permissions',
	},
];

const NAV_TAB_OPTIONS = [
	...BASE_NAV_TAB_OPTIONS,
	{
		key: SUPPORTED_SCREEN_SECTIONS.UPDATE,
		value: 'Settings',
	},
];

const WorkforceRoleDialog = ({ orgId = '', roleId = '', defaultValues, aggregateOption }) => {
	const [ navOptions, setNavOptions ] = React.useState([]);
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.ASSIGN);

	React.useState(() => {
		if (!defaultValues?.is_editable) {
			setNavOptions(BASE_NAV_TAB_OPTIONS);
		} else {
			setNavOptions(NAV_TAB_OPTIONS);
		}
	}, []);

	return (
		<>
			<NavPill
				fullWidth
				options={navOptions}
				handleTabClick={setActiveSection}
			/>

			<div className="mt-5">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.UPDATE && (
					<WorkforceRoleForm
                                                orgId={orgId} mode="UPDATE"
                                                defaultValues={defaultValues}
                                                aggregateOption={aggregateOption}
					/>
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.ASSIGN && (
					<WorkforceRoleMember />
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.PERMISSIONS && (
					<WorkforceRolePermissions 
						orgId={orgId} 
						roleId={roleId} 
					/>
				)}
			</div>
		</>
	)
}

export default WorkforceRoleDialog;
