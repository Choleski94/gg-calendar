import React from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

import MapView from './Map';
import Marker from './CustomMarker';

const render = (status) => {
	if (status === Status.FAILURE) {
		return <p>failed</p>;
	}
	return <p>loading...</p>;
};

const GoogleMap = ({
	zoom,
	apiKey,
	onIdle,
	center,
	markers,
	onClick,
	onMarkerClick,
	markerTags = [],
	activeTypes = [],
	highlightedMarkerId,
}) => {

	// Filter lat, lng & activeTypes.
	const filtered = markers?.filter((m) =>
		m.lat && m.lng && ((activeTypes.length) ? activeTypes.includes(m?.type) : m)
	);

	return (
		<MapView
			zoom={zoom}
			minZoom={2}
			maxZoom={18}
			className="map"
			onIdle={onIdle}
			center={center}
			onClick={onClick}
			zoomControl={false}
			mapTypeControl={false}
			clickableIcons={false}
			fullscreenControl={false}
			streetViewControl={false}
		>
			{filtered?.map((markerProps, markerIdx) => (
				<Marker
					zoom={zoom}
					{...markerProps}
					key={markerProps.id}
					markerTags={markerTags}
					onClick={onMarkerClick}
					markerIdx={markerIdx + 1}
					highlight={markerProps.id === highlightedMarkerId}
				/>
			))}
		</MapView>
	);
}

export default GoogleMap;
