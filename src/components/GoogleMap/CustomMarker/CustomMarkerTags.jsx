import React from 'react';

import { 
	TIME_PERIODS,
	JOB_CATEGORIES, 
	CARACTERISTIC_TAGS, 
} from '@constants';
import { onlyUniqueByKey } from '@utils';

import { MarkerTag } from './CustomMarker.styled';

const CustomMarkerTags = ({ tags, equipment, timePeriod, subStatus }) => (
	<>
		{/* Equipment */}
		{(tags.includes(CARACTERISTIC_TAGS.EQUIPMENT) && equipment?.length) && (
			equipment.filter(onlyUniqueByKey('id')).map(({ id, color, categoryType }, idx) => (
				<MarkerTag key={'marker-tags-' + String(idx)} bgColor={color} className="tag nw sm">
					&nbsp;
				</MarkerTag>
			))
		)}
		{/* Time period */}
		{tags.includes(CARACTERISTIC_TAGS.TIME) && (
			<>
				{timePeriod === TIME_PERIODS.AM && (
					<div className="tag ne">
						AM
					</div>
				)}
				{timePeriod === TIME_PERIODS.PM && (
					<div className="tag ne">
						PM
					</div>
				)}
			</>
		)}
		{/* Status  */}
		{tags.includes(CARACTERISTIC_TAGS.PART) && subStatus.value && (
			<MarkerTag bgColor={subStatus.color} className="tag se" data-sub-status={subStatus.slug}>
				<i className={`fa ${subStatus.value}`} />
			</MarkerTag>
		)}
	</>
);

export default CustomMarkerTags;
