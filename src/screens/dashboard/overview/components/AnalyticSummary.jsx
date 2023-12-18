import _ from 'lodash';
import React from 'react';

import { Card } from '@components';
import { ENTITIES } from '@constants';
import formatMessage from '@utils/formatMessage';

const formatCurrency = (value = '') => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

const parseTagContent = (total) => {total && `$ ${total}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}

// TODO: Remove helper function with proper localization.
const parseDataEntity = (value = '') => {
	let res = (value === ENTITIES.QUOTE ? 'Estimate' : value);
	res = (res === ENTITIES.PAYMENT_INVOICE ? 'Payments' : value);
	return res;
};


const SummaryCard = ({
	id,
	icon,
	title,
	prefix,
	tagColor,
	isLoading,
	tagContent,
}) => (
	<div key={id}className="col-lg-3">
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

const AnalyticSummary = ({ entityData }) => {

	const [
		{ result: invoiceResult, isLoading: invoiceLoading }
	] = entityData.filter(({ entity }) => entity === ENTITIES.INVOICE);

	return (
		<div className="mb-3 mb-lg-5">
			<Card>
				<Card.Body>
					<div className="row col-lg-divider gx-lg-6">
						{entityData.map((data) => {
							const { result, entity, isLoading } = data;

							if (entity === ENTITIES.OFFER) return null;

							return (
								<SummaryCard
									icon={data?.icon}
									prefix={'This month'}
									isLoading={isLoading}
									title={parseDataEntity(data?.entity)}
									id={_.uniqueId(parseDataEntity(data?.entity) + '_')}
									tagContent={result?.total && formatCurrency(result?.total)}
									tagColor={data?.entity === ENTITIES.INVOICE ? 'cyan' : data?.entity === ENTITIES.QUOTE ? 'purple' : 'green'}
								/>
							);
						})}
						<SummaryCard
							tagColor="red"
							prefix="Not Paid"
							title="Due Balance"
							isLoading={invoiceLoading}
							tagContent={parseTagContent(invoiceResult?.total_undue)}
						/>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default AnalyticSummary;

