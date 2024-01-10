import _ from 'lodash';
import React from 'react';

import { ENTITIES } from '@constants';
import { Progress } from '@components';
import formatMessage from '@utils/formatMessage';

const DEFAULT_PREVIEW = {
	'invoice': {
		'draft': { value: 0, type: 'dark' },
		'pending': { value: 0, type: 'info' },
		'unpaid': { value: 0, type: 'warning' },
		'overdue': { value: 0, type: 'danger' },
		'partially': { value: 0, type: 'info' },
		'paid': { value: 0, type: 'success' },
	},
	'quote': {
		'draft': { value: 0, type: 'dark' },
		'pending': { value: 0, type: 'primary' },
		'sent': { value: 0, type: 'primary' },
		'declined': { value: 0, type: 'danger' },
		'accepted': { value: 0, type: 'success' },
		'expired': { value: 0, type: 'info' },
	},
	'offer': {
		'draft': { value: 0, type: 'dark' },
		'pending': { value: 0, type: 'info' },
		'sent': { value: 0, type: 'primary' },
		'declined': { value: 0, type: 'danger' },
		'accepted': { value: 0, type: 'success' },
		'expired': { value: 0, type: 'info' },
	},
}

const StatisticPreview = ({ entityData }) => {
	const previewKeyElts = Object.keys(DEFAULT_PREVIEW);

	const statisticObj = entityData.reduce((agg, payload) => {
		const entityObj = { ...DEFAULT_PREVIEW[payload?.entity] };
		const entityPerformance = (payload?.result?.performance || []);

		entityPerformance.forEach(({ status, percentage }) => {
			entityObj[status] = {
				...entityObj[status], 
				value: percentage
			};
		});

		return Object.assign(agg, {
			[payload?.entity]: entityObj
		});
	}, {});

	return (
		<div className="card">
			<div className="card-body">
				<div className="row">
					{previewKeyElts.map((currentKey) => (
						<div className="col-lg-4 mb-3 mb-lg-5" key={_.uniqueId(currentKey + '_progress_')}>
							<h4 className="card-header-title mb-3">
								<span className="text-capitalize">
									{currentKey === ENTITIES.QUOTE ? 'Estimate' : currentKey}
								</span>
								&nbsp;
								Preview
							</h4>
							{Object.keys(statisticObj[currentKey] || {}).map((subKey) => (
								<div className="mb-2 mb-lg-2" key={_.uniqueId(currentKey + '_' + subKey + '_')}>
									<Progress 
										withPercent
										key={_.uniqueId(currentKey + '_' + subKey + '_progress_')}
										type={statisticObj[currentKey][subKey]['type']} 
										percent={statisticObj[currentKey][subKey]['value']} 
										title={(
											<span className="text-capitalize">
												{subKey}
											</span>
										)}
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default StatisticPreview;

