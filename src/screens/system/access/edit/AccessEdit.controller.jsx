import React from 'react';

import { SwitchToggle } from '@components';
import { SUPPORTED_SERVICES_SECTIONS } from '@constants/access';

export const parseOptions = (data = []) => data.map((payload) => ({
	section: (
		<span className="d-flex align-items-center">
			<span className="d-block h5 text-inherit mb-0">
				{payload?.section}
			</span>
		</span>
	),
	description: (
		<small>
			{payload?.description}
		</small>
	),
	create: (
		<SwitchToggle 
			name="create" 
			value={payload?.create} 
		/>
	),
	view: (
		<SwitchToggle 
			name="view" 
			value={payload?.view} 
		/>
	),
	update: (
		<SwitchToggle 
			name="update" 
			value={payload?.update} 
		/>
	),
	remove: (
		<SwitchToggle 
			name="remove" 
			value={payload?.remove} 
		/>
	),
	// Supported search query field(s).
	query: [
		payload?.name,
		payload?.description,
	].join(' '),
}));
