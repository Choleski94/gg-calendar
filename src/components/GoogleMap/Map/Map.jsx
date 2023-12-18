import React from 'react';
import type { ReactNode } from 'react';

import mapStyle from './mapStyle';
import { useDeepCompareEffectForMaps } from './useDeepCompareEffectForMaps';

// Define the polygon coordinates
const polygonCoords = [
	{ lat: 37.772, lng: -122.214 },
	{ lat: 21.291, lng: -157.821 },
	{ lat: -18.142, lng: 178.431 },
	{ lat: -27.467, lng: 153.027 },
];

const Map = ({ className, onClick, onIdle, children, ...options }) => {

	const ref = React.useRef<HTMLDivElement>(null);

	const [map, setMap] = React.useState<google.maps.Map>();

	React.useEffect(() => {
		if (ref.current && map === undefined) {
			// Create the polygon
			const polygon = new window.google.maps.Polygon({
				paths: polygonCoords,
				strokeColor: '#FF0000',
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: '#FF0000',
				fillOpacity: 0.35,
			});

			const googleMap = new window.google.maps.Map(ref.current, {
				styles: mapStyle,
			});

			setMap(googleMap);
		}
	}, [ ref, map ]);

	useDeepCompareEffectForMaps(() => {
		if (map) {
			map.setOptions(options);
		}
	}, [ map, options ]);

	React.useEffect(() => {
		if (map) {
			['click', 'idle'].forEach((eventName) =>
				google.maps.event.clearListeners(map, eventName)
			);

			if (onClick) {
				map.addListener('click', onClick);
			}

			if (onIdle) {
				map.addListener('idle', () => onIdle(map));
			}
		}
	}, [ map, onClick, onIdle ]);

	return (
		<>
			<div ref={ref} className={className} />
			{React.Children.map(children, (child) => {
				if (React.isValidElement(child)) {
					return React.cloneElement(child, { map });
				}
			})}
		</>
       );
}

export default Map;