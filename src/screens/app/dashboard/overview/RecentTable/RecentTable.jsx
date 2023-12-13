import {
	EyeOutlined,
	EditOutlined,
	DeleteOutlined,
	FilePdfOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Descriptions, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import config from '@config';
import { request } from '@utils/request';
import useFetch from '@utils/hooks/useFetch';
import { Table, ActionMenu } from '@components';

import { DEFAULT_ENTITY_TABLE_HEADER, parseEntityOptions } from './RecentTable.controller';

const RecentTable = ({ title = '', entity }) => {
	const navigate = useNavigate();

	const [ options, setOptions ] = React.useState([]);

	const asyncList = () => request.list({ entity });

	const { result, isLoading, isSuccess } = useFetch(asyncList);

	React.useEffect(() => {
		if (isSuccess && result && result.length) {
			setOptions(result.slice(0, 5));
		}
	}, [ result ]);	

	const noDataMessage = React.useMemo(() => (
		entity === 'invoice' ? (
			'No revent invoices'
		) : (
			'No revent estimates'
		)
	), [ entity ]);

	// TODO: Update routing.
	const actionMenuOptions = [
		{
			key: 'show',
			value: (
				<span>
					<i className="bi bi-eye" />
					&nbsp;
					Show
				</span>
			),
			fn: (entity, id) => navigate(`/${entity}/read/${id}`),
		},
		{
			key: 'edit',
			value: (
				<span>
					<i className="bi bi-pen" />
					&nbsp;
					Edit
				</span>
			),
			fn: (entity, id) => navigate(`/${entity}/update/${id}`),
		},
		{
			key: 'download',
			value: (
				<span>
					<i className="bi bi-file-earmark-pdf" />
					&nbsp;
					Download
				</span>
			),
			fn: (entity, id) => window.open(`${config.download.base_url}${entity}/${id}`, '_blank'),
		}
	];

	return (
		<Table
			fullHeight
			title={title}
			elementsPerPage={5}
			headers={DEFAULT_ENTITY_TABLE_HEADER}
			data={parseEntityOptions(entity, options, actionMenuOptions)}
		/>
	);
}

export default RecentTable;
