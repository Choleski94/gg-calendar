import axios from 'axios';

import config from '@config';

axios.defaults.baseURL = config.api.base_url;

const geo = {
	geocodeAddress: async function(address) {
		try {
			const { data } = await axios.get('/v1/geo', {
				params: { address }
			});
			const [{ lat, lng }] = data?.result || [{}];
			return { address, lat, lng };
		} catch (error) {
			console.error(`Error geocoding ${address}: ${error.message}`);
			return { address, lat: null, lng: null, error: error.message };
		}
	},
	geocodeAddresses: async function(addresses) {
		return await Promise.all(addresses.map(address => this.geocodeAddress(address)));
	}
};

export default geo;
