import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Table } from '@components';
import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { convertToEpoch, buildDate, parseTime } from '@utils';
import { ENTITY_INVOICE, DEFAULT_TABLE_HEADER } from '@constants/invoices';

import TemplateMetrics from './TemplateMetrics';

const pagination = {};

const parseOptions = (data = []) => data.map((payload) => ({
	// Supported header data.
	id: payload?._id,
	balance: (
		<span>
			${(payload?.balance || 0).toFixed(2)} CAD
		</span>
	),
	total: (
		<span>
			${(payload?.total || 0).toFixed(2)} CAD
		</span>
	),
	status: payload?.status,
	number: payload?.number,
	date: payload?.date ? (
		<small>
			{buildDate(convertToEpoch(payload?.date))}
			<br />
			<small className="text-muted">
				{parseTime(convertToEpoch(payload?.date))}
			</small>
		</small>
	) : null,
	expiredDate: payload?.expiredDate ? (
		<small>
			{buildDate(convertToEpoch(payload?.expiredDate))}
			<br />
			<small className="text-muted">
				{parseTime(convertToEpoch(payload?.expiredDate))}
			</small>
		</small>
	) : null,
	client: (
		<span className="d-flex align-items-center">
			<span className="d-block text-inherit mb-0">
				{payload?.client?.firstName} {payload?.client?.lastName}
			</span>
		</span>
	),
	payment_status: payload?.paymentStatus,
	// Supported search query field(s).
	query: [
		payload?.status,
		payload?.paymentStatus,
		payload?.client?.company,
	].join(' '),
}));

const TemplatesOverview = () => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = React.useState(false);
	const [ templateOptions, setTemplateOptions ] = React.useState([]);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchIncomeTemplates = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_INVOICE, options }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setTemplateOptions(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	React.useEffect(() => {
		fetchIncomeTemplates();
	}, []);

	const onViewTemplateClick = (e, { id }) => {
		e.preventDefault();
		return navigate(`/system/templates/${id}`);
	};

	const onCreateTemplateClick = (e) => {
		e.preventDefault();
		return navigate('/system/templates/create');
	};

	const renderCreateTemplate = (
		<button 
			type="button" 
			onClick={onCreateTemplateClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Create new template
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<TemplateMetrics 
				options={templateOptions}
			/>
			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderCreateTemplate}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewTemplateClick}
				searchPlaceholder="Search template"
				data={parseOptions(templateOptions)}
			/>
		</div>
	);
};

export default TemplatesOverview;
