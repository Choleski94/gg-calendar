import React from 'react';
import formatMessage from '@utils/formatMessage';

import { request } from '@utils/request';
import useFetch from '@utils/hooks/useFetch';

import QuickCTA from './QuickCTA';
import RecentTable from './RecentTable';
import CustomerPreview from './CustomerPreview';
import StatisticPreview from './StatisticPreview';
import AnalyticSummary from './components/AnalyticSummary';

const DashboardOverview = () => {
	const { result: invoiceResult, isLoading: invoiceLoading } = useFetch(() =>
		request.summary({ entity: 'invoice' })
	);

	const { result: quoteResult, isLoading: quoteLoading } = useFetch(() =>
		request.summary({ entity: 'quote' })
	);

	const { result: offerResult, isLoading: offerLoading } = useFetch(() =>
		request.summary({ entity: 'offer' })
	);

	const { result: paymentResult, isLoading: paymentLoading } = useFetch(() =>
		request.summary({ entity: 'payment/invoice' })
	);

	const { result: clientResult, isLoading: clientLoading } = useFetch(() =>
		request.summary({ entity: 'client' })
	);

	const entityData = [
		{
			result: invoiceResult,
			isLoading: invoiceLoading,
			entity: 'invoice',
			icon: 'bi-receipt',
		},
		{
			result: quoteResult,
			isLoading: quoteLoading,
			entity: 'quote',
			icon: 'bi-calculator',
		},
		{
			result: offerResult,
			isLoading: offerLoading,
			entity: 'offer',
			icon: 'bi-cart',
		},
		{
			result: paymentResult,
			isLoading: paymentLoading,
			entity: 'payment',
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

