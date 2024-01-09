import React from 'react';

import { AvatarCircle } from '@components';
import formatMessage from '@utils/formatMessage';
import { buildDate, parseTime, hasPrimary } from '@utils';

export const parseOptions = (data = [], roleObj) => data.map((payload) => ({
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
	// Supported search query field(s).
	query: [
		payload?.email,
	].join(' '),
}));
