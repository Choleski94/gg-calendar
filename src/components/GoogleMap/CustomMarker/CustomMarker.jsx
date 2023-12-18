import React from 'react';
import { motion } from 'framer-motion';

import { CARACTERISTIC_TAGS, JOB_EQUIPMENTS, JOB_CATEGORIES, TIME_PERIODS, MARKER_TYPES } from '@constants';

import OverlayView from '../OverlayView';
import { Marker } from './CustomMarker.styled';
import CustomMarkerTags from './CustomMarkerTags';

const CustomMarker = ({ id, type, lat, lng, color, value, hoverValue, markerTags, options, map, onClick, highlight }) => {

	const handleClick = React.useCallback(() => {
		if (type !== MARKER_TYPES.JOB) return;
		onClick({ id });
	}, [onClick, id]);

	return (
		map && (
			<OverlayView
				map={map}
				position={{ lat, lng }}
				zIndex={highlight ? 99 : 0}
			>
				<motion.div
					exit={{ opacity: 0 }}
					initial={{ opacity: 0 }}
					transition={{ damping: 20, type: 'spring', stiffness: 400 }}
					animate={{ opacity: 1, transition: { delay: Math.random() * 0.3 } }}
				>
					<Marker className="marker" color={color} onClick={handleClick}>
						{hoverValue && (
							<div className="title">
								{hoverValue}
							</div>
						)}
						<div className="marker-wrapper">
							{(type === MARKER_TYPES.JOB) && (
								<CustomMarkerTags tags={markerTags} {...options} />
							)}
							<div className="pin">
								<div className="image">
									{value}
								</div>
							</div>
						</div>
					</Marker>
				</motion.div>
			</OverlayView>
		)
	);
}

export default CustomMarker;
