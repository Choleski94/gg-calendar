import React from 'react';

import utils from '@utils';
import { Progress } from '@components';
import formatMessage from '@utils/formatMessage';

const DEFAULT_STARS_COUNT = {
	'0': 0,
	'1': 0,
	'2': 0,
	'3': 0,
	'4': 0,
	'5': 0,
};

const ReviewStats = ({ options = [] }) => {
	const stats = React.useMemo(() => {
		const qtyReviews = (options || []).length;

		const countObj = options.reduce((agg, { score }) => {
			const currentKey = String(score);
			return Object.assign(agg, {
				[currentKey] : (
					agg[currentKey] ? agg[currentKey] + 1 : 1
				),
			});
		}, DEFAULT_STARS_COUNT);

		const percentObj = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => {
			const currentPercentage = (countObj[currentKey] * 100) / qtyReviews;
			return Object.assign(agg, {
				[currentKey] : (
					currentPercentage ? 
					Number(currentPercentage.toFixed(2)) : 
					currentPercentage
				),
			});
		}, {});

		const totalCount = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => {
			agg += Number(currentKey) * countObj[currentKey];
			return agg;
		}, 0);

		const aggregatedCountPercent = Object.keys(countObj || DEFAULT_STARS_COUNT).reduce((agg, currentKey) => (
			Object.assign(agg, {
				[currentKey]: {
					count: countObj[currentKey],
					percent: percentObj[currentKey],
				}
			})
		), {})

		const totalPercent = totalCount / qtyReviews;

		return {
			qtyReviews,
			totalCount,
			rating: aggregatedCountPercent,
			totalPercent: Number(totalPercent.toFixed(2)),
		};
	}, [options]);

	return (
		<div className="row align-items-md-center gx-md-5">
			<div className="col-md-auto mb-3 mb-md-0">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							alt="Image Description"
							data-hs-theme-appearance="default"
							className="avatar avatar-xl avatar-4x3"
							src="/assets/svg/illustrations/oc-review.svg"
						/>
					</div>
					<div className="flex-grow-1 ms-5">
						<h4 className="display-3 text-dark mb-0">
							{stats.totalPercent}
						</h4>
						<p>
							{stats.qtyReviews}
							&nbsp;
							reviews
						</p>
					</div>
				</div>
			</div>
			<div className="col-md">
				<ul className="list-unstyled list-py-1 mb-0">
					{Object.values(stats.rating).reverse().map(({ count, percent }, keyIdx) => (
						<li className="d-flex align-items-center fs-6">
							<span className="me-3">
								{5 - keyIdx}
								&nbsp;
								{5 - keyIdx <= 0 ? (
									<>
										star
										&nbsp;
									</>
								) : (
									<>
										stars
									</>
								)}
							</span>
							<Progress 
								showZero 
								percent={percent} 
							/>
							<span className="ms-3">
								{count}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default ReviewStats;
