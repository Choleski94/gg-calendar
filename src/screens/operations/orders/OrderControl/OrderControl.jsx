
import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import OrderOverview from './OrderOverview';
import OrderSettings from './OrderSettings';
import OrderStatistics from './OrderStatistics';

const CUSTOMERS_BREADCRUMB_OPTIONS = [
	{
		path: '/operations',
		value: 'Operations'
	},
	{
		path: '/operations/orders',
		value: 'Orders'
	},
];

const SUPPORTED_SCREEN_SECTIONS = {
	OVERVIEW: 'OVERVIEW',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.OVERVIEW,
		value: 'Overview',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.STATISTICS,
		value: 'Statistics',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.SETTINGS,
		value: 'Settings',
	},
];

const OrderControl = ({ orderId, setOrderId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={CUSTOMERS_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Orders'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.ORDERS && (
											'Purchase Orders'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Relocate Orders'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Order Permissions'
										)}
									</h1>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
									<NavPill
										options={NAV_TAB_OPTIONS}
										handleTabClick={setActiveSection}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<OrderOverview setOrderId={setOrderId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<OrderStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<OrderSettings />
				)}
			</div>
		</Layout>
	);
};

export default OrderControl;

