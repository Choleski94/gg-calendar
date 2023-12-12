import React from 'react';

export const parseOptions = (data = []) => data.map((payload) => ({
	// Supported header data.
	name: (
		<span className="d-flex align-items-center">
			<span className="d-block h5 text-inherit mb-0">
				{payload?.firstName} {payload?.lastName}
			</span>
			{/*
			<span className="d-block fs-5 text-body">
				Building Manager
			</span>
			*/}
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
	// Add id.
	id: payload?._id,
	// Add support for payload.
	data: payload,
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
