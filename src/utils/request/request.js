import axios from 'axios';
import config from '@config';

import errorHandler from './errorHandler';
import successHandler from './successHandler';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.api.base_url;

const request = {
	create: async ({ entity, jsonData }) => {
		console.log('🚀 Create Request 🚀 ~ file: request.js ~ line 19 ~ create: ~ jsonData', jsonData);

		try {
			const response = await axios.post(entity + '/create', jsonData);

			// successHandler(response, {
			// 	notifyOnSuccess: true,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	read: async ({ entity, id }) => {
		try {
			const response = await axios.get(entity + '/read/' + id);

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	update: async ({ entity, id, jsonData }) => {
		console.log('🚀 ~ file: request.js ~ line 34 ~ update: ~ id', id);
		console.log('🚀 Update Request 🚀 ~ file: request.js ~ line 42 ~ update: ~ jsonData', jsonData);

		try {
			const response = await axios.patch(entity + '/update/' + id, jsonData);

			// successHandler(response, {
			// 	notifyOnSuccess: true,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	delete: async ({ entity, id, jsonData }) => {
		try {
			const response = await axios.delete(entity + '/delete/' + id, { data: jsonData });

			// successHandler(response, {
			// 	notifyOnSuccess: true,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	filter: async ({ entity, options = {} }) => {
		try {
			const filter = options.filter ? 'filter=' + options.filter : '';
			const equal = options.equal ? '&equal=' + options.equal : '';
			const query = `?${filter}${equal}`;

			const response = await axios.get(entity + '/filter' + query);

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: false,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	search: async ({ entity, options = {} }) => {
		try {
			let query = '?';
			for (var key in options) {
				query += key + '=' + options[key] + '&';
			}
			query = query.slice(0, -1);

			// headersInstance.cancelToken = source.token;
			const response = await axios.get(entity + '/search' + query);

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: false,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	list: async ({ entity, options = {} }) => {
		try {
			let query = '?';
			for (var key in options) {
				query += key + '=' + options[key] + '&';
			}
			query = query.slice(0, -1);

			const response = await axios.get(entity + '/list' + query);

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: false,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	listAll: async ({ entity }) => {
		try {
			const response = await axios.get(entity + '/listAll');

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: false,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	post: async ({ entity, jsonData, options = {} }) => {
		try {
			const response = await axios.post(entity, jsonData);

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	get: async ({ entity }) => {
		try {
			const response = await axios.get(entity);

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	patch: async ({ entity, jsonData }) => (
		axios.patch(entity, jsonData).then((response) => response.data)
	),
	source: () => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		return source;
	},
	summary: async ({ entity, options = {} }) => {
		try {
			const response = await axios.get(entity + '/summary');

			// successHandler(response, {
			// 	notifyOnSuccess: false,
			// 	notifyOnFailed: false,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	mail: async ({ entity, jsonData }) => {
		try {
			const response = await axios.post(entity + '/mail/', jsonData);

			// successHandler(response, {
			// 	notifyOnSuccess: true,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
	convert: async ({ entity, id }) => {
		try {
			const response = await axios.get(`${entity}/convert/${id}`);

			// successHandler(response, {
			// 	notifyOnSuccess: true,
			// 	notifyOnFailed: true,
			// });

			return response.data;
		} catch (error) {
			return errorHandler(error);
		}
	},
};

export default request;
