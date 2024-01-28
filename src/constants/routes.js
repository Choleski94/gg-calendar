'use strict';

import * as screenElements from '../screens';

export const guestRoutes = [
	{
		slug: 'home',
		path: '/',
		element: screenElements.SignIn,
	},
	{
		slug: 'sign-in',
		path: '/signin',
		element: screenElements.SignIn,
	},
	{
		slug: 'sign-up',
		path: '/signup',
		element: screenElements.SignUp,
	},
	// {
	// 	slug: 'activate',
	// 	path: '/activate',
	// 	element: screenElements.Activate,
	// },
	// {
	// 	slug: 'forgot-password',
	// 	path: '/forgot_password',
	// 	element: screenElements.ForgotPassword,
	// },
];

export const accountRoutes = [
	// {
	// 	slug: 'account-profile',
	// 	path: '/account/profile',
	// 	element: screenElements.AccountProfile,
	// },
	// {
	// 	slug: 'account-member',
	// 	path: '/account/:id?',
	// 	element: screenElements.AccountMember,
	// },
 	// {
 	// 	slug: 'account-settings',
 	// 	path: '/account/settings',
 	// 	element: screenElements.AccountSettings,
 	// },
	// {
	// 	slug: 'account-access-logs',
	// 	path: '/account/access-logs',
	// 	element: screenElements.AccountAccessLogs,
	// },
];

const routes = [
	guestRoutes,
	accountRoutes,
].flat();

export default routes;

