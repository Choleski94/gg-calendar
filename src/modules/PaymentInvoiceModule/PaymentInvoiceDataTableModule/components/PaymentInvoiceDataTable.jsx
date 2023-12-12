import React from 'react';
import { Button, PageHeader } from 'antd';
import { useHistory } from 'react-router-dom';
import { Descriptions, Dropdown, Table } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RedoOutlined, PlusOutlined } from '@ant-design/icons';

import uniqueId from '@utils/uinqueId';
import { erp } from '@store/erp/actions';
import { useErpContext } from '@store/context/erp';
import { selectListItems } from '@store/erp/selectors';
import useResponsiveTable from '@utils/hooks/useResponsiveTable';

const PaymentInvoiceDataTable = ({ config, DataTableDropMenu }) => {
	let { entity, dataTableColumns } = config;

	const { DATATABLE_TITLE } = config;

	dataTableColumns = [
		...dataTableColumns,
		{
			title: '',
			render: (row) => (
				<Dropdown overlay={DataTableDropMenu({ row, entity })} trigger={['click']}>
				<EllipsisOutlined style={{ cursor: 'pointer', fontSize: '24px' }} />
				</Dropdown>
			),
		},
	];

	const { result: listResult, isLoading: listIsLoading } = useSelector(selectListItems);

	const { pagination, items } = listResult;

	const dispatch = useDispatch();

	const handelDataTableLoad = React.useCallback((pagination) => {
		const options = { page: pagination.current || 1 };
		dispatch(erp.list({ entity, options }));
	}, []);

	React.useEffect(() => {
		const controller = new AbortController();
		dispatch(erp.list({ entity }));

		return () => {
			controller.abort();
		};
	}, []);

	const { expandedRowData, tableColumns, tableHeader } = useResponsiveTable(
		dataTableColumns,
		items
	);

	return (
		<>
			<div ref={tableHeader}>
				<PageHeader
					title={DATATABLE_TITLE}
					ghost={true}
					extra={[
						<Button onClick={handelDataTableLoad} key={`${uniqueId()}`} icon={<RedoOutlined />}>
							Refresh
						</Button>,
					]}
					style={{
						padding: '20px 0px',
					}}
				></PageHeader>
			</div>
			<Table
				columns={tableColumns}
				rowKey={(item) => item._id}
				dataSource={items}
				pagination={pagination}
				loading={listIsLoading}
				onChange={handelDataTableLoad}
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
		</>
	);
}

export default PaymentInvoiceDataTable;
