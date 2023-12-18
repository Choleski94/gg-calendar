export const parseOptions = (data = []) => data.map((payload, idx = 0) => ({
	id: payload?.id,
	name: (
		<span className="d-flex align-items-center">
			<div>
				<span className="d-block h5 text-inherit mb-0">
					{payload?.firstName} {payload?.lastName}
					{payload?.isPrimary && (
						<>
							&nbsp;
							<i className="bi-patch-check-fill text-primary" />
						</>
					)}
					{payload?.isBlacklist && (
						<>
							&nbsp;
							<i className="bi-patch-exclamation-fill text-danger" />
						</>
					)}
				</span>
				{payload?.position && (
					<span className="d-block fs-5 text-body">
						{payload?.position}
					</span>
				)}
			</div>
		</span>
	),
	phone: (
		payload?.phones && payload?.phones.length ? (
			payload?.phones.map(({ isPrimary, type, extension, value }) => (
				<div>
					{value}
					{extension && extension.length && (
						<>
							, ext. {extension}
						</>
					)}
					&nbsp;
					{type === SUPPORTED_PHONE_TYPES.HOME && (
						<small className="font-italic">
							(Home)
						</small>
					)}
					{type === SUPPORTED_PHONE_TYPES.MOBILE && (
						<small className="font-italic">
							(Mobile)
						</small>
					)}
					{type === SUPPORTED_PHONE_TYPES.OFFICE && (
						<small className="font-italic">
							(Office)
						</small>
					)}
					&nbsp;
					{hasPrimary(isPrimary, payload?.phones.length) && (
						<small className="font-italic">
							&nbsp;
							<i className="bi-patch-check-fill text-success" />
						</small>
					)}
				</div>
			))
		) : 'N/A'
	),
	email: (
		payload?.emails && payload?.emails.length ? (
			payload?.emails.map(({ isPrimary, value }) => (
				<div>
					{value}
					{hasPrimary(isPrimary, payload?.emails.length) && (
						<>
							&nbsp;
							<i className="bi-patch-check-fill text-success" />
						</>
					)}
				</div>
			))
		) : 'N/A'
	),
	address: (
		<small>
			{payload?.contact?.address}
		</small>
	),
	unit: (
		<small className="text-uppercase">
			{payload?.contact?.unit}
		</small>
	),
	city: (
		<small>
			{payload?.contact?.city}, {payload?.contact?.state}
		</small>
	),
	zip: (
		<small>
			{payload?.contact?.zip}
		</small>
	),
	status: (
		<small>
			{payload?.status === SUPPORTED_JOB_STATUSES.OPEN && (
				'Open'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.ON_HOLD && (
				'On Hold'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.REOPENED && (
				'Reopened'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.SCHEDULED && (
				'Scheduled'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.COMPLETED && (
				'Completed'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.CANCELLED && (
				'Cancelled'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.FOLLOW_UP && (
				'Follow Up'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.RESCHEDULED && (
				'Rescheduled'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.IN_PROGRESS && (
				'In Progress'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.PENDING_APPROVAL && (
				'Pending Approval'
			)}
			{payload?.status === SUPPORTED_JOB_STATUSES.WAITING_FOR_PARTS && (
				'Waiting For Parts'
			)}
		</small>
	),
	priority: (
		<>
			{payload?.priority === SUPPORTED_JOB_PRIORITIES.URGENT && (
				<span className="badge text-danger">
					<span className="legend-indicator bg-danger"/>
					Urgent
				</span>
			)}
			{payload?.priority === SUPPORTED_JOB_PRIORITIES.HIGH && (
				<span className="badge text-warning">
					<span className="legend-indicator bg-warning"/>
					High
				</span>
			)}
			{payload?.priority === SUPPORTED_JOB_PRIORITIES.NORMAL && (
				<span className="badge text-success">
					<span className="legend-indicator bg-success"/>
					Normal
				</span>
			)}
			{payload?.priority === SUPPORTED_JOB_PRIORITIES.LOW && (
				<span className="badge text-dark">
					<span className="legend-indicator bg-dark"/>
					Low
				</span>
			)}
		</>
	),
	notes: (
		<small>
			{(payload?.notes && payload?.notes.length ? payload?.notes[0].value : '')}
		</small>
	),
	query: [
		payload?.firstName,
		payload?.lastName,
		(payload?.phones && payload?.phones.length ? (
			payload?.phones.map(({ value }) => value)
		) : ''),
		(payload?.phones && payload?.phones.length ? (
			payload?.phones.map(({ isPrimary, type, extension, value }) => value)
		) : ''),
		(payload?.emails && payload?.emails.length ? (
			payload?.emails.map(({ isPrimary, value }) => value)
		) : ''),
		payload?.contact?.address,
		payload?.contact?.zip,
	].join(' '),
}));

export const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_JOB_SECTIONS.ALL,
		value: 'All',
	},
	{
		key: SUPPORTED_JOB_SECTIONS.PENDING,
		value: 'Pending',
	},
	{
		key: SUPPORTED_JOB_SECTIONS.PROCESSING,
		value: 'Processing',
	},
	{
		key: SUPPORTED_JOB_SECTIONS.COMPLETE,
		value: 'Complete',
	},
];

export const DEFAULT_JOBS_TABLE_HEADER = [
	{ key: 'id', label: 'Job #' },
	{ key: 'status', label: 'Status' },
	{ key: 'priority', label: 'Priority' },
	{ key: 'name', label: 'Name' },
	{ key: 'phone', label: 'Phone(s)' },
	{ key: 'email', label: 'Email(s)' },
	{ key: 'address', label: 'Address' },
	{ key: 'unit', label: 'Unit' },
	{ key: 'city', label: 'City, State/Prov' },
	{ key: 'zip', label: 'Zip/Post Code' },
	{ key: 'notes', label: 'Notes' },
];

export const hasPrimary = (isPrimary = false, totalElts = 0) => isPrimary && totalElts > 1;
