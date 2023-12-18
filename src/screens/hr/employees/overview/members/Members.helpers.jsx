import React from 'react';

import { AvatarCircle } from '@components';
import formatMessage from '@utils/formatMessage';
import { buildDate, parseTime, hasPrimary } from '@utils';

const getUserInitials = (first_name = '', last_name = '') => ((first_name || '').charAt(0) + (last_name || '').charAt(0)).toUpperCase();

export const parseOptions = (data = []) => data.map((payload) => ({
	// Supported header data.
	id: payload?._id,
	name: (
		<span className="d-flex align-items-center">
			<AvatarCircle background={payload?.color || '#c4c4c4'}>
				{getUserInitials(payload?.firstName, payload?.lastName)}
			</AvatarCircle>
			<div className="ms-3">
				<span className="d-block h5 text-inherit mb-0">
					{payload?.firstName} {payload?.lastName}
					{!payload?.enabled && (
						<>
							&nbsp;
							<i className="bi-patch-exclamation-fill text-danger" />
						</>
					)}
				</span>
				{payload?.department && (
					<span className="d-block fs-5 text-body text-capitalize">
						{payload?.department}
					</span>
				)}
			</div>
		</span>
	),
	phones: (
		(payload?.phones || []).map(({ value, ext, type }) => (
			<div>
				{value}
				{(ext && ext.length) ? (
					`, ext. ${ext}`
				) : null}
				&nbsp;
				<small className="font-italic">
					{type === 'MOBILE' && '(Mobile)'}
					{type === 'HOME' && '(Home)'}
					{type === 'WORK' && '(Work)'}
				</small>
			</div>
		))
	),
	emails: (
		(payload?.emails || []).map(({ value, type }) => (
			<div>
				{(value || '').toLowerCase()}
				&nbsp;
				<small className="font-italic">
					{type === 'PERSONAL' && '(Personal)'}
					{type === 'WORK' && '(Work)'}
				</small>
			</div>
		))
	),
	address: (
		<small>
			{payload?.address}
		</small>
	),
	unit: (
		<small className="text-uppercase">
			{payload?.unit}
		</small>
	),
	city: (
		<small>
			{payload?.city}, {payload?.state}
		</small>
	),
	zip: (
		<small className="text-uppercase">
			{payload?.zip}
		</small>
	),
	created: (
		payload?.created ? (
			<small>
				{buildDate(new Date(payload['created']))}
				<br />
				<small className="text-muted">
					{parseTime(new Date(payload['created']))}
				</small>
			</small>
		) : null
	),
	// Supported search query field(s).
	query: [
		payload?.zip,
		payload?.unit,
		payload?.city,
		payload?.state,
		payload?.address,
		payload?.lastName,
		payload?.firstName,
		payload?.emails.map(({ value, type }) => (
			(value || '').toLowerCase()
		)).join(' '),
		payload?.phones.map(({ value, ext, type }) => (
			value
		)).join(' '),
	].join(' '),
}));
