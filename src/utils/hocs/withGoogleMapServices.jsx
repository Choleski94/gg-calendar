import React from 'react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';

import config from '@config';

const GOOGLE_MAP_SERVICES = ['places'];

const GOOGLE_MAP_API_KEY = config.services.googleMap;

const render = (statusCode) => {
	if (statusCode === Status.FAILURE) {
		return <p>Failed</p>
	}
	return <p>loading...</p>
}

const withGoogleMapServices = (Component) => {
	const WithGoogleMapServices = ({ apiKey = GOOGLE_MAP_API_KEY, libraries = GOOGLE_MAP_SERVICES, ...rest }) => (
		<Wrapper apiKey={apiKey} libraries={libraries} render={render}>
			<Component {...rest} />
		</Wrapper>
	);

	WithGoogleMapServices.defaultName = 'WithGoogleMapServices';

	return WithGoogleMapServices;
}

export default withGoogleMapServices;
