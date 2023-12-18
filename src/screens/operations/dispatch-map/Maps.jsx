import React from 'react';

import config from '@config';
import Input from '@components/Input';
import Layout from '@components/Layout';
import GoogleMap from '@components/GoogleMap';
import useLocalStorage from '@utils/hooks/useLocalStorage';
import withGoogleMapServices from '@utils/hocs/withGoogleMapServices';

import MapFilter from './MapFilter';

const DEFAULT_LOCATION = {
	lat: 45.5308,
	lng: -73.6591
};

const [ techMarkers, jobMarkers, officeMarkers, partMarkers, searchMarkers ] = new Array(5).fill([]);

const MapsScreen = () => {
	const [ data, setData ] = React.useState({});
	const [ errors, seErrors ] = React.useState({});
	const [ zoom, setZoom ] = React.useState<number>(11);
	const [ filterMarkers, setFilterMarkers ] = React.useState<string[]>([]);
	const [ highlightedJob, setHighlightedJob ] = React.useState<any | null>(null);
	const [ center, setCenter ] = React.useState<google.maps.LatLngLiteral>(DEFAULT_LOCATION);
	const [ caracteristics, setCaracteristics ] = useLocalStorage('tigado_map_caracteristics', []);

	const onIdle = (map: google.maps.Map) => {
		setZoom(map.getZoom()!);
		const nextCenter = map.getCenter();
		if (nextCenter) {
			setCenter(nextCenter.toJSON());
		}
	};

	const fetchAndPrepareResultItem = (jobId: string) => {
		const hasDetail = Object.keys(detail).length;
		if (!hasDetail || (jobId !== detail.jobId)) {
			setLoading(true);
			api.jobs.get(jobId).then((currentJobDetail) => {
				setDetail(currentJobDetail);
				setLoading(false);
				setShowDetail(true);
			}).catch(() => {
			     setLoading(false);
			});
		} else {
			setShowDetail(true);
		}
	}

	const onMarkerClick = React.useCallback((payload) => {
		if (highlightedJob === payload) {
			setHighlightedJob(null);
		} else {
			setHighlightedJob(payload);
			fetchAndPrepareResultItem(payload?.id);
		}
	}, [ highlightedJob ]);

	const mapMarkers = React.useMemo(() => [
		// ...techMarkers,
		// ...jobMarkers,
		// ...officeMarkers,
		// ...partMarkers,
		// ...searchMarkers,
	], [ techMarkers, jobMarkers, officeMarkers, partMarkers, searchMarkers ]);

	return (
		<Layout withOffCanvas withoutFooter>
			<Layout.SplittedContent>
				<GoogleMap 
					zoom={zoom}
					center={center}
					onIdle={onIdle}
					markers={mapMarkers}
					markerTags={caracteristics}
					activeTypes={filterMarkers}
					onMarkerClick={onMarkerClick}
					apiKey={config.services.googleMap}
					highlightedMarkerId={highlightedJob?.jobId}
				/>
			</Layout.SplittedContent>
			<Layout.OffCanvas>
				<div className="d-flex align-items-center">
					<div className="flex-grow-1 ms-3">
						<h3 className="alert-heading mt-3 mb-3">
							Maps
						</h3>
						<MapFilter 
							data={data}
							errors={errors}
							setData={setData}
						/>
					</div>
				</div>

				<ul className="step step-icon-sm step-avatar-sm">
					{new Array(5).fill(null).map((_, idx) => (
						<li className="step-item">
							<div className="step-content-wrapper">
								<span className="step-icon step-icon-soft-dark">
									{idx + 1}
								</span>
								<div className="step-content">
									<div className="d-flex justify-content-between">
										<h6 className="mt-1">
											Bob Dean
										</h6>
										<div className="mb-1">
											<span className="badge bg-soft-success text-success rounded-pill text-sm">
												<span className="legend-indicator bg-success" />
												Completed
											</span>
										</div>
									 </div>
									<div className="d-flex mt-3">
										<div className="w-100">
											<p className="fs-5">
												<span className="text-uppercase">
													<i className="bi bi-pin-map-fill" />
													&nbsp;
												</span>
												17 Rue Cedarwood-Cout, H2N1K2
											</p>
										</div>
										<div className="d-flex mw-150">
											<div className="flex-shrink-0">
												<span id="logo" className="text-uppercase">
													<i className="bi bi-calendar3" />
												</span>
											</div>
											<div className="flex-grow-1 ms-2">
												2023-06-07
											</div>
										</div>
									</div>
									<p className="fs-6 mb-1">
										<span className="text-uppercase" href="#">
											<i className="bi bi-sticky" />
											&nbsp;
										</span>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
										Ut malesuada odio id dolor lobortis venenatis. Sed sollicitudin 
										id lectus in tristique. Aliquam ornare aliquam elit, id elementum 
										purus interd
									</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</Layout.OffCanvas>
		</Layout>
	);
};

export default withGoogleMapServices(MapsScreen);
