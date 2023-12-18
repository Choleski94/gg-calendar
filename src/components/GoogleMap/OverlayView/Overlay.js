export const createOverlay = (container: HTMLElement, pane: keyof google.maps.MapPanes, position: google.maps.LatLng | google.maps.LatLngLiteral, getPixelPositionOffset: (width: number, height: number) => google.maps.Point = () => new google.maps.Point(0, 0)) => {
	class Overlay extends google.maps.OverlayView {

		container: HTMLElement;
		pane: keyof google.maps.MapPanes;
		position: google.maps.LatLng | google.maps.LatLngLiteral;
		getPixelPositionOffset: (width: number, height: number) => google.maps.Point;

		constructor(
			container: HTMLElement,
			pane: keyof google.maps.MapPanes,
			position: google.maps.LatLng | google.maps.LatLngLiteral,
			 getPixelPositionOffset: (width: number, height: number) => google.maps.Point
		) {
			super();
			this.pane = pane;
			this.position = position;
			this.container = container;
			this.getPixelPositionOffset = getPixelPositionOffset;
		}

		onAdd(): void {
			const pane = this.getPanes()?.[this.pane];
			pane?.appendChild(this.container);
		}

		draw(): void {
			const projection = this.getProjection();
			const point = projection.fromLatLngToDivPixel(this.position);

			if (point === null) {
				return;
			}

			// this.container.style.transform = `translate(${point.x}px, ${point.y}px)`;
			const { offsetWidth, offsetHeight } = this.container;
			const offset = this.getPixelPositionOffset(offsetWidth, offsetHeight);
			const x = point.x + offset.x;
			const y = point.y + offset.y;

			this.container.style.transform = `translate(${x}px, ${y}px)`;
		}

		onRemove(): void {
			if (this.container.parentNode !== null) {
				this.container.parentNode.removeChild(this.container);
			}
		}
	}

	return new Overlay(container, pane, position, getPixelPositionOffset);
}
