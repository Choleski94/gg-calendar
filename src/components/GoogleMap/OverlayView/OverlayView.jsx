import React from 'react';
import { createPortal } from 'react-dom';

import { createOverlay } from './Overlay';

type OverlayProps = React.PropsWithChildren<{
	position: google.maps.LatLng | google.maps.LatLngLiteral;
	pane?: keyof google.maps.MapPanes;
	map: google.maps.Map;
	zIndex?: number;
}>;

const OverlayView = ({ map, zIndex, children, position, pane = 'floatPane' }: OverlayProps) => {
	const container = React.useMemo(() => {
		const div = document.createElement('div');
		div.style.position = 'absolute';
		return div;
	}, []);

	const getPixelPositionOffset = React.useCallback((width: number, height: number) => ({
		x: -width / 2,
		y: -height
	}), []);

	const overlay = React.useMemo(() => {
		return createOverlay(container, pane, position, getPixelPositionOffset);
	}, [container, pane, position]);

	React.useEffect(() => {
		overlay?.setMap(map);
		return () => overlay?.setMap(null);
	}, [map, overlay]);

	React.useEffect(() => {
		container.style.zIndex = `${zIndex}`;
	}, [zIndex, container]);

	return createPortal(children, container);
}

export default OverlayView;
