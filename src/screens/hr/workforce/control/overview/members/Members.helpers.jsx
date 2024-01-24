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
					{payload?.verified && (
						<>
							&nbsp;
							<i className="bi-patch-exclamation-fill text-success" />
						</>
					)}
					{payload?.removed && (
						<>
							&nbsp;
							<i className="bi-patch-exclamation-fill text-warning" />
						</>
					)}
					{payload?.verified && (
						<>
							&nbsp;
							<i className="bi-patch-exclamation-fill text-danger" />
						</>
					)}
				</span>
				{/* payload?.department && (
					<span className="d-block fs-5 text-body text-capitalize">
						{payload?.department}
					</span>
				) */}
			</div>
		</span>
	),
	phone: (
		(payload?.phone && payload?.phone.length) ? (
			<div>
				{payload?.phone}
				{/* (ext && ext.length) ? (
					`, ext. ${ext}`
				) : null */}
				{/*
				&nbsp;
				<small className="font-italic">
					{type === 'MOBILE' && '(Mobile)'}
					{type === 'HOME' && '(Home)'}
					{type === 'WORK' && '(Work)'}
				</small>
				*/}
			</div>
		) : 'N/A'
	),
	email: (
		(payload?.email && payload?.email.length) ? (
			<div>
				{payload?.email}
				{/*
				&nbsp;
				<small className="font-italic">
					{type === 'PERSONAL' && '(Personal)'}
					{type === 'WORK' && '(Work)'}
				</small>
				*/}
			</div>
		) : 'N/A'
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
	createdAt: (
		payload?.createdAt ? (
			<small>
				{buildDate(new Date(payload?.createdAt))}
				<br />
				<small className="text-muted">
					{parseTime(new Date(payload?.createdAt))}
				</small>
			</small>
		) : null
	),
	// Supported search query field(s).
	query: [
		payload?.zip,
		payload?.unit,
		payload?.city,
		payload?.email,
		payload?.phone,
		payload?.state,
		payload?.address,
		payload?.lastName,
		payload?.firstName,
	].map((val) => (val || '').toLowerCase()).join(' '),
}));
