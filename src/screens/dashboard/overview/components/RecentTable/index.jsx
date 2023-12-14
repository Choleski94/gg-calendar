import {
	EyeOutlined,
	EditOutlined,
	DeleteOutlined,
	FilePdfOutlined,
	EllipsisOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Descriptions, Dropdown, Menu, Table } from 'antd';

import config from '@config';
import { request } from '@utils/request';
import useFetch from '@utils/hooks/useFetch';
import useResponsiveTable from '@utils/hooks/useResponsiveTable';

const DropDownRowMenu = ({ row, entity }) => {
	const navigate = useNavigate();

	const Show = () => {
		navigate(`/${entity}/read/${row._id}`);
	};

	const Edit = () => {
		navigate(`/${entity}/update/${row._id}`);
	}

	const Download = () => {
		window.open(`${config.download.base_url}${entity}/${row._id}`, '_blank');
	}

	return (
		<Menu style={{ width: 130 }}>
			<Menu.Item icon={<EyeOutlined />} onClick={Show}>
				Show
			</Menu.Item>
			<Menu.Item icon={<EditOutlined />} onClick={Edit}>
				Edit
			</Menu.Item>
			<Menu.Item onClick={Download} icon={<FilePdfOutlined />}>
				Download
			</Menu.Item>
		</Menu>
	);
}

const RecentTable = ({ ...props }) => {

	let { entity, dataTableColumns } = props;

	dataTableColumns = [
		...dataTableColumns,
		{
			title: '',
			render: (row) => (
				<Dropdown overlay={DropDownRowMenu({ row, entity })} trigger={['click']}>
					<EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
				</Dropdown>
			),
		},
	];

	const asyncList = () => {
		return request.list({ entity });
	};

	const { result, isLoading, isSuccess } = useFetch(asyncList);

	const firstFiveItems = () => {
		if (isSuccess && result) return result.slice(0, 5);
		return [];
	};

	const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
		dataTableColumns,
		firstFiveItems()
	);

	return (
		<div ref={tableHeader}>
			<Table
				columns={tableColumns}
				rowKey={(item) => item._id}
				dataSource={isSuccess && firstFiveItems()}
				pagination={false}
				loading={isLoading}
				expandable={
					expandedRowData.length ? {
					expandedRowRender: (record) => (
						<Descriptions title="" bordered column={1}>
							{expandedRowData.map((item, index) => {
								return (
									<Descriptions.Item key={index} label={item.title}>
										{item.render?.(record[item.dataIndex])?.children
										? item.render?.(record[item.dataIndex])?.children
										: item.render?.(record[item.dataIndex])
										? item.render?.(record[item.dataIndex])
										: Array.isArray(item.dataIndex)
										? record[item.dataIndex[0]]?.[item.dataIndex[1]]
										: record[item.dataIndex]}
									</Descriptions.Item>
								);
							})}
							</Descriptions>
						),
					} : null
				}
			/>
		</div>
	);
}

export default RecentTable;
