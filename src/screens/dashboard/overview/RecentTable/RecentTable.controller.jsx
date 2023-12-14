import React from 'react';
import { ActionMenu } from '@components';

export const DEFAULT_ENTITY_TABLE_HEADER = [
	{ key: 'index', label: '#' },
	{ key: 'client', label: 'Client' },
	{ key: 'total', label: 'total' },
	{ key: 'status', label: 'Status' },
	{ key: 'actions', label: '' },
];

export const parseCurrency = (total = 0) => (
	`$ ${total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
);

export const parseEntityOptions = (entity = '', options = [], actionMenuOptions = []) => options.map((payload, idx) => ({
	...payload,
	total: parseCurrency(payload?.total),
	client: (
		<span className="d-flex align-items-center">
			<span className="d-block text-inherit mb-0">
				{payload?.client?.firstName} {payload?.client?.lastName}
			</span>
		</span>
	),
	status: payload?.status,
	id: payload?._id,
	index: idx + 1,
	actions: (
		<ActionMenu 
			options={
				actionMenuOptions.map(({ key, value, fn }) => ({
					key, value, cb: () => fn(entity, payload?._id),
				}))
			}
		/>
	),
}));

