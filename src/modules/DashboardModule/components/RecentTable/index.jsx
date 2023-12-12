import React from 'react';
import { Descriptions, Dropdown, Menu, Table } from 'antd';

import {
	EllipsisOutlined,
	EyeOutlined,
	EditOutlined,
	DeleteOutlined,
	FilePdfOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { request } from '@utils/request';
import useFetch from '@utils/hooks/useFetch';
import useResponsiveTable from '@utils/hooks/useResponsiveTable';
import { DOWNLOAD_BASE_URL } from '@utils/config/serverApiConfig';

const DropDownRowMenu = ({ row, entity }) => {
	const history = useHistory();

	const Show = () => {
		history.push(`/${entity}/read/${row._id}`);
	};

	const Edit = () => {
		history.push(`/${entity}/update/${row._id}`);
	}

	const Download = () => {
		if (typeof window !== 'undefined') {
			window.open(`${DOWNLOAD_BASE_URL}${entity}/${row._id}`, '_blank');
		}
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
					expandedRowData.length
					? {
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
					}
					: null
				}
			/>
		</div>
	);
}

export default RecentTable;
