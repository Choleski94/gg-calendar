/// <reference types="vitest" />

import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }) => {
	// Load app-level env vars to node-level env vars.
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return defineConfig({
		plugins: [react()],
		resolve: {
			alias: {
				'@app': path.resolve(__dirname, 'src/App'),
				'@api': path.resolve(__dirname, 'src/api'),
				'@views': path.resolve(__dirname, 'src/views'),
				'@store': path.resolve(__dirname, 'src/store'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@utils/*': path.resolve(__dirname, 'src/utils'),
				'@mocks': path.resolve(__dirname, 'src/mocks'),
				'@mocks/*': path.resolve(__dirname, 'src/mocks'),
				'@locales': path.resolve(__dirname, 'src/locales'),
				'@config': path.resolve(__dirname, 'config'),
				'@assets': path.resolve(__dirname, 'src/assets'),
				'@constants': path.resolve(__dirname, 'src/constants'),
				'@constants/*': path.resolve(__dirname, 'src/constants'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@modules': path.resolve(__dirname, 'src/modules'),
				'@src': path.resolve(__dirname, 'src'),
				'@testing': path.resolve(__dirname, 'src/test-setup'),
			},
		},
		server: {
			port: 3000,
		},
		test: {
			environment: 'jsdom',
			globals: true,
			coverage: {
				provider: 'v8',
				reporter: ['text', 'json', 'html'],
			},
			setupFiles: ['./src/test-setup.ts'],
		},
	});
}
