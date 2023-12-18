import React from 'react';
import { createPortal } from 'react-dom';

import { createOverlay } from './Overlay';

const OverlayView = ({ map, zIndex, children, position, pane = 'floatPane' }) => {
	const container = React.useMemo(() => {
		const div = document.createElement('div');
		div.style.position = 'absolute';
		return div;
	}, []);

	const getPixelPositionOffset = React.useCallback((width, height) => ({
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
