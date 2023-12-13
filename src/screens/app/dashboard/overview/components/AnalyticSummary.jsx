import React from 'react';

import formatMessage from '@utils/formatMessage';

const formatCurrency = (value = '') => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const SummaryCard = ({
	key,
	icon,
	title,
	prefix,
	tagColor,
	isLoading,
	tagContent,
}) => (
	<div className="col-lg-3" key={key}>
		<div className="d-flex">
			<div className="flex-grow-1">
				<h3 className="card-title text-capitalize">
					{title}
				</h3>
				<div className="d-flex align-items-center">
					<span className="d-block fs-6">
						{prefix}
					</span>
					<span className="badge bg-soft-success text-success ms-2">
						<i className="bi-graph-up" />
						&nbsp;
						{tagContent}
					</span>
				</div>
			</div>
			<span className="icon icon-soft-secondary icon-sm icon-circle ms-3">
				<i className={icon || 'bi-shop'} />
			</span>
		</div>
	</div>
);

// TODO: Change quote to estimate.
const parseDataEntity = (value = '') => value === 'quote' ? 'esitmate' : value;

const AnalyticSummary = ({ entityData }) => {

	const [{ result: invoiceResult, isLoading: invoiceLoading }] = entityData.filter(({ entity }) => entity === 'invoice');

	return (
		<>
			<div className="card card-body mb-3 mb-lg-5">
				<div className="row col-lg-divider gx-lg-6">
					{entityData.map((data, index) => {
						const { result, entity, isLoading } = data;

						if (entity === 'offer') return null;

						return (
							<SummaryCard
								key={index}
								icon={data?.icon}
								prefix={'This month'}
								isLoading={isLoading}
								tagContent={result?.total && formatCurrency(result?.total)}
								title={data?.entity === 'paymentInvoice' ? 'Payment' : parseDataEntity(data?.entity)}
								tagColor={data?.entity === 'invoice' ? 'cyan' : data?.entity === 'quote' ? 'purple' : 'green'}
							/>
						);
					})}
					<SummaryCard
						tagColor="red"
						prefix="Not Paid"
						title="Due Balance"
						isLoading={invoiceLoading}
						tagContent={invoiceResult?.total_undue && `$ ${invoiceResult?.total_undue}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
					/>
				</div>
			</div>
		</>
	);
}

export default AnalyticSummary;

