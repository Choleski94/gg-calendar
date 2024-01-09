import React from 'react';

import formatMessage from '@utils/formatMessage';
import { buildDate, parseTime, hasPrimary } from '@utils';

export const parseOptions = (data = [], roleObj = {}, onDelete = () => null) => data.map((payload) => ({
	// Supported header data.
	id: payload?._id,
	email: (
		<span className="d-flex align-items-center">
			{payload?.email}
		</span>
	),
	role: (
		<span className="d-flex align-items-center">
			{roleObj[payload?.roleId] || 'N/A'}
		</span>
	),
	code: (
		<span className="d-flex align-items-center">
			{payload?.code}
		</span>
	),
	created: (
		payload?.createdAt ? (
			<small>
				{buildDate(new Date(payload['createdAt']))}
				<br />
				<small className="text-muted">
					{parseTime(new Date(payload['createdAt']))}
				</small>
			</small>
		) : null
	),
	action: (
		<div className="d-flex justify-content-end">
			<button 
				type="button" 
				onClick={(e) => onDelete(e, payload?._id)}
				className="btn btn-sm btn-outline-danger" 
			>
				<i className="bi bi-trash3" /> Delete
			</button>
		</div>
	),
	// Supported search query field(s).
	query: [
		payload?.email,
		payload?.code,
	].join(' '),
}));
