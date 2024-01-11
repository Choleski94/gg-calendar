import React from 'react';

import { NavPill, Forms } from '@components';

import RoleMember from './RoleMember';
import RolePermissions from './RolePermissions';

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

const RoleDialog = ({ orgId = '', roleId = '', defaultValues, aggregateOption }) => {
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
					<Forms.CreateUpdate
						createText="Create role"
						updateText="Update role"
                                                orgId={orgId} mode="UPDATE"
                                                defaultValues={defaultValues}
                                                aggregateOption={aggregateOption}
					/>
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.ASSIGN && (
					<RoleMember />
				)}

				{activeSection === SUPPORTED_SCREEN_SECTIONS.PERMISSIONS && (
					<RolePermissions 
						orgId={orgId} 
						roleId={roleId} 
					/>
				)}
			</div>
		</>
	)
}

export default RoleDialog;
