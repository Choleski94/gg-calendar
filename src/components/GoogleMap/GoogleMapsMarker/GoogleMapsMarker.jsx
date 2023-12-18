import React from 'react';

const GoogleMapsMarker = ({ ...options }) => {
	const [marker, setMarker] = React.useState();

	React.useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker());
		}

		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);

	React.useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [marker]);

	return null;
}

export default GoogleMapsMarker;
