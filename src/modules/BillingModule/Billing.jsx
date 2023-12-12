import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import { Card, Layout, Breadcrumb, GetSupport } from '@components';

import BillingBody from './BillingBody';
import BillingItems from './BillingItems';
import BillingHeader from './BillingHeader';
import BillingContact from './BillingContact';
import BillingSettings from './BillingSettings';

const INVOICE_CREATE_BREADCRUMB_OPTIONS = [
	{
		path: '/accounting',
		value: 'Accounting'
	},
	{
		path: '/accounting/invoices',
		value: 'Invoices'
	},
	{
		path: '/accounting/invoices/create',
		value: 'Create'
	},
];

const ESTIMATE_CREATE_BREADCRUMB_OPTIONS = [
	{
		path: '/accounting',
		value: 'Accounting'
	},
	{
		path: '/accounting/estimates',
		value: 'Estimates'
	},
	{
		path: '/accounting/estimates/create',
		value: 'Create'
	},
];

const DEFAULT_CONFIG = {
	date: null, client: '', 
	items: [], number: null, 
	expiredDate: null, year: 2023,
	taxRate: 15, deposit: '', discount: '', 
};

const Billing = ({ type = 'INVOICE' }) => {
	const [ configData, setConfigData ] = React.useState(DEFAULT_CONFIG);

	const setClientId = (client = '') => {
		setConfigData({ ...configData, client });
	}

	const setItems = (items = []) => {
		setConfigData({ ...configData, items });
	}


	const [ breadcrumbOptions, ctaText ] = React.useMemo(() => {
		let [ bOptions, cText ] = [ [], '' ];

		if (type === 'INVOICE') {
			cText = 'Create new invoice';
			bOptions = INVOICE_CREATE_BREADCRUMB_OPTIONS;
		} else {
			cText = 'Create new estimate';
			bOptions = ESTIMATE_CREATE_BREADCRUMB_OPTIONS;
		}

		return [ bOptions, cText ];
	}, [ type ]);
	

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="col-lg mb-3 mb-lg-0">
								<Breadcrumb 
									options={breadcrumbOptions} 
								/>
								<h1 className="page-header-title mb-0">
									{ctaText}
								</h1>
							</div>
							<div className="col-lg-auto">
								<GetSupport />
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="row mt-15">
				<div className="col-lg-9 mb-5 mb-lg-0">
					<Card>
						<Card.Body>
							<div className="row">
								<div className="col-md-12">
									<BillingHeader 
										type={type}
										date={configData?.date}
										number={configData?.number}
										expiredDate={configData?.expiredDate}
									/>

									<BillingContact 
										type={type}
										setClientId={setClientId} 
									/>

									<div className="my-5" />

									<BillingItems 
										setItems={setItems}
										items={configData.items}
										addItemLabel="Add new item"
									/>

									<hr className="my-5" />

									<BillingBody 
										type={type}
										configData={configData}
										items={configData.items}
									/>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-lg-3">
					<BillingSettings 
						type={type}
						data={configData}
						setData={setConfigData}
					/>
				</div>
			</div>
		</Layout>
	);
};

export default Billing;
