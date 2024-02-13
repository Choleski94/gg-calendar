import React from 'react';

import { WEEK_START, WEEK_END } from '@constants/calendar';

const WeekCol = ({
	index = 0,
}) => {
	return (
		<div
			data-wv-top="false"
			className="week--col"
			data-column-index={index}
		/>
	);
}

export default WeekCol;
