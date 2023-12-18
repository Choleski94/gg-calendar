import React from 'react';

import { 
	parseDuration,
	buildDate, parseTime, 
} from '@utils';
import { Badge, Icons, EditableTextarea } from '@components';

export const renderCallDirection = ({ status, direction }) => (
	<>
		{direction === 'out' && (
			<Icons.Call.Outbound />
		)}
		{direction === 'in' && (
			status === 'no-answer' ? (
				<Icons.Call.NoAnswer />
			) : (
				<Icons.Call.Inbound />
			)
		)}
	</>
);

export const renderPhone = ({ phone, phoneTitle1, phoneTitle2 }) => (
	<>
		{phone}
		{[ phoneTitle1, phoneTitle2 ].map((currentPhone) => (
			<>
				<br/>
				<small className="text-muted">
					{currentPhone}
				</small>
			</>
		))}
	</>
);

export const renderTime = ({ datetime }) => (
	<>
		{buildDate(datetime)}
		<br/>
		<small className="text-muted">
			{parseTime(datetime)}
		</small>
	</>
);

export const renderCalled = ({ called,  calledTitle1, calledTitle2 }) => (
	<>
		{called}
		{[calledTitle1, calledTitle2].map((currentPhone) => (
			<>
				<br/>
				<small className="text-muted">
					{currentPhone}
				</small>
			</>
		))}
	</>
);

export const renderRoutedTo = ({ status, routedTo, routedToUser }) => (
	status === 'no-answer' ? (
		<>
			<b className="text-bold">
				{routedTo}
			</b>
			<br />
			<small className="text-muted">
				No one
			</small>
		</>
	) : (
		<>
			<b className="text-bold">
				{routedTo}
			</b>
			<br />
			<small className="text-muted">
				{routedToUser}
			</small>
		</>
	)
);

export const renderDuration = ({ duration }) => (
	<Badge type="secondary">
		{parseDuration(duration)}
	</Badge>
);

export const renderStatus = ({ status }) => (
	<>
		{status === 'completed' && (
			<Badge type="success">
				Completed
			</Badge>
		)}
		{status === 'no-answer' && (
			<Badge type="danger">
				No answer
			</Badge>
		)}
		{status === 'canceled' && (
			<Badge type="black">
				Canceled
			</Badge>
		)}
	</>
);
