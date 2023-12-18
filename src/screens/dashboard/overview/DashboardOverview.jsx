import React from 'react';

import { ENTITIES } from '@constants';
import { useFetch } from '@utils/hooks';
import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';

import QuickCTA from './QuickCTA';
import RecentTable from './RecentTable';
import CustomerPreview from './CustomerPreview';
import StatisticPreview from './StatisticPreview';
import AnalyticSummary from './components/AnalyticSummary';

const DashboardOverview = () => {
	const { result: invoiceResult, isLoading: invoiceLoading } = useFetch(() =>
		request.summary({ entity: ENTITIES.INVOICE })
	);

	const { result: quoteResult, isLoading: quoteLoading } = useFetch(() =>
		request.summary({ entity: ENTITIES.QUOTE })
	);

	const { result: offerResult, isLoading: offerLoading } = useFetch(() =>
		request.summary({ entity: ENTITIES.OFFER })
	);

	const { result: paymentResult, isLoading: paymentLoading } = useFetch(() =>
		request.summary({ entity: ENTITIES.PAYMENT_INVOICE })
	);

	const { result: clientResult, isLoading: clientLoading } = useFetch(() =>
		request.summary({ entity: ENTITIES.CLIENT })
	);

	const entityData = [
		{
			result: invoiceResult,
			isLoading: invoiceLoading,
			entity: ENTITIES.INVOICE,
			icon: 'bi-receipt',
		},
		{
			result: quoteResult,
			isLoading: quoteLoading,
			entity: ENTITIES.QUOTE,
			icon: 'bi-calculator',
		},
		{
			result: offerResult,
			isLoading: offerLoading,
			entity: ENTITIES.OFFER,
			icon: 'bi-cart',
		},
		{
			result: paymentResult,
			isLoading: paymentLoading,
			entity: ENTITIES.PAYMENT_INVOICE,
			icon: 'bi-credit-card',
		},
	];

	return (
		<>
			<AnalyticSummary 
				entityData={entityData} 
			/>

			<div className="row">
				<div className="col-lg-4 mb-3 mb-lg-5">
					<QuickCTA />
				</div>
				<div className="col-lg-4 mb-3 mb-lg-5">
					<RecentTable 
						title="Recent Invoices" 
						entity="invoice"
					/>
				</div>
				<div className="col-lg-4 mb-3 mb-lg-5">
					<RecentTable 
						title="Recent Estimates"
						entity="quote"
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-9 mb-3 mb-lg-5">
					<StatisticPreview 
						entityData={entityData}
					/>
				</div>
				<div className="col-lg-3 mb-3 mb-lg-5">
					<CustomerPreview 
						data={clientResult} 
					/>
				</div>
			</div>
		</>
	);
}

export default DashboardOverview;

