const config = {
	app: {
		name: import.meta.env.APP_NAME ,
		host: import.meta.env.APP_HOST,
		port: import.meta.env.NODE_PORT,
		service: import.meta.env.APP_SERVICE,
		version: import.meta.env.APP_VERSION,
		shutdown: import.meta.env.APP_SHUTDOWN,
		clientHost: import.meta.env.APP_CLIENT_HOST,
		env: import.meta.env.APP_ENV || 'development',
	},
	api: {
		base_url: import.meta.env.BASE_API_URL,
	},
	auth: {
		base_url: import.meta.env.BASE_AUTH_URL,
	},
	static: import.meta.env.BASE_STATIC_URL,
	services: {
		googleMap: import.meta.env.GOOGLE_MAP_API_KEY,
	},
};

export default config;
