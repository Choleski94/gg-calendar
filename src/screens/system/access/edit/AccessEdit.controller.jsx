import React from 'react';

import { SwitchToggle } from '@components';
import { SUPPORTED_SERVICES_SECTIONS } from '@constants/access';

export const parseOptions = (data = [], onChange = () => null) => data.map((payload) => ({
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
			name="create" value={payload?.create} 
			onChange={(e) => onChange(e, payload?.slug)}
		/>
	),
	view: (
		<SwitchToggle 
			name="view" value={payload?.view} 
			onChange={(e) => onChange(e, payload?.slug)}
		/>
	),
	update: (
		<SwitchToggle 
			name="update" value={payload?.update} 
			onChange={(e) => onChange(e, payload?.slug)}
		/>
	),
	remove: (
		<SwitchToggle 
			name="remove" value={payload?.remove} 
			onChange={(e) => onChange(e, payload?.slug)}
		/>
	),
	// Supported search query field(s).
	query: [
		payload?.name,
		payload?.description,
	].join(' '),
}));
