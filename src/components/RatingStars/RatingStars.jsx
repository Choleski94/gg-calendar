import React from 'react';

const RatingStars = ({ width = '18rem', starWidth = 12, score = 0, max = 5}) => {

	if (score > max) {
		throw new Error(`Please enter a valid 'score' and 'max' props`);
	}

	if (!Number(score)) {
		throw new Error(`Please enter a valid 'score' integer`);
	}

	if (!Number(max)) {
		throw new Error(`Please enter a valid 'max' integer`);
	}

	const blankStars = React.useMemo(() => (
		max - score
	), [max, score]);


	return (
		<div className="text-wrap" style={{ width }}>
			<div className="d-flex gap-1 mb-2">
				{new Array(score).fill(
					<img
						src="/assets/svg/illustrations/star.svg"
						alt="Review rating"
						width={14}
					/>
				)}
				{new Array(blankStars).fill(
					<img
						src="/assets/svg/illustrations/star-muted.svg"
						alt="Review rating"
						width={14}
					/>
				)}
			</div>
		</div>
	);
}

export default RatingStars;
