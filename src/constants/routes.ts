'use strict';

import * as screenComponents from '../screens';

// COMPLETE
export const guestRoutes = [
	{
		slug: 'home',
		path: '/',
		component: screenComponents.SignIn,
	},
	{
		slug: 'sign-in',
		path: '/signin',
		component: screenComponents.SignIn,
	},
	{
		slug: 'sign-up',
		path: '/signup',
		component: screenComponents.SignUp,
	},
	{
		slug: 'forgot-password',
		path: '/forgot_password',
		component: screenComponents.ForgotPassword,
	},
];

// // COMPLETE
// export const accountRoutes = [
// 	{
// 		slug: 'account-profile',
// 		path: '/account/profile',
// 		component: screenComponents.AccountProfile,
// 	},
// 	{
// 		slug: 'account-member',
// 		path: '/account/:id?',
// 		component: screenComponents.AccountMember,
// 	},
// 	{
// 		slug: 'account-settings',
// 		path: '/account/settings',
// 		component: screenComponents.AccountSettings,
// 	},
// 	{
// 		slug: 'account-access-logs',
// 		path: '/account/access-logs',
// 		component: screenComponents.AccountAccessLogs,
// 	},
// ];
// 
// // COMPLETE
// export const standaloneRoutes = [
// 	{
// 		slug: 'home-dashboard',
// 		path: '/',
// 		component: screenComponents.Home,
// 	},
// 	{
// 		slug: 'dashboard',
// 		path: '/dashboard',
// 		component: screenComponents.Dashboard,
// 	},
// 	{
// 		slug: 'organizations',
// 		path: '/organizations',
// 		component: screenComponents.Organizations,
// 	},
// ];
// 
// // COMPLETE
// export const operationRoutes = [
// 	{
// 		slug: 'calendar',
// 		path: '/operations/calendar',
// 		component: screenComponents.Calendar,
// 	},
// 	{
// 		slug: 'dispatch-map',
// 		path: '/operations/dispatch-map',
// 		component: screenComponents.DispatchMap,
// 	},
// 	{
// 		slug: 'inventory-orders',
// 		path: '/operations/orders/:id?',
// 		component: screenComponents.InventoryOrders,
// 	},
// 	{
// 		slug: 'crm-jobs',
// 		path: '/operations/jobs/:id?',
// 		component: screenComponents.CrmJobs,
// 	},
// ];
// 
// export const hrRoutes = [
// 	// System
// 	{
// 		slug: 'hr-system-rewards',
// 		path: '/hr/system/rewards',
// 		component: screenComponents.HrLegalParking,
// 	},
// 	{
// 		slug: 'hr-system-crew-management',
// 		path: '/hr/system/crew-management',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'hr-system-company-information',
// 		path: '/hr/system/company-information',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'hr-system-meetings',
// 		path: '/hr/system/meetings',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'hr-system-contracts',
// 		path: '/hr/system/contracts',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'hr-system-goals-management',
// 		path: '/hr/system/goals-management',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'hr-system-recommendations',
// 		path: '/hr/system/recommendations',
// 		component: () => 'Todo...',
// 	},
// 	// Employee
// 	// {
// 	// 	slug: 'hr-employee-problems',
// 	// 	path: '/hr/employee/problems',
// 	// 	component: () => 'Todo...',
// 	// },
// 	// {
// 	// 	slug: 'hr-employee-hiring',
// 	// 	path: '/hr/employee/hiring',
// 	// 	component: () => 'Todo...',
// 	// },
// 	// {
// 	// 	slug: 'hr-employee-vacations',
// 	// 	path: '/hr/employee/vacations',
// 	// 	component: () => 'Todo...',
// 	// },
// 	{
// 		slug: 'hr-employees',
// 		path: '/hr/employees/:id?',
// 		component: screenComponents.HrEmployees,
// 	},
// 	// {
// 	// 	slug: 'hr-employee-problems',
// 	// 	path: '/hr/employee/problems',
// 	// 	component: () => 'Todo...',
// 	// },
// 	// Legal
// 	// {
// 	// 	slug: 'hr-legal-parking-tickets',
// 	// 	path: '/hr/legal/parking-tickets',
// 	// 	component: () => 'Todo...',
// 	// },
// ];
// 
// // COMPLETE
// export const crmRoutes = [
// 	{
// 		slug: 'crm-customers',
// 		path: '/crm/customers/:id?',
// 		component: screenComponents.CrmCustomers,
// 	},
// 	{
// 		slug: 'crm-access',
// 		path: '/crm/access/:id?',
// 		component: screenComponents.CrmAccess,
// 	},
// 	{
// 		slug: 'crm-companies',
// 		path: '/crm/companies/:id?',
// 		component: screenComponents.CrmCompanies,
// 	},
// ];
// 
// // COMPLETE
// export const inventoryRoutes = [
// 	{
// 		slug: 'inventory-fleet',
// 		path: '/inventory/fleet',
// 		component: screenComponents.InventoryFleet,
// 	},
// 	{
// 		slug: 'inventory-vendors',
// 		path: '/inventory/vendors',
// 		component: screenComponents.InventoryVendors,
// 	},
// 	{
// 		slug: 'inventory-settings',
// 		path: '/inventory/settings',
// 		component: screenComponents.InventorySettings,
// 	},
// 	{
// 		slug: 'inventory-products',
// 		path: '/inventory/products/:id?',
// 		component: screenComponents.InventoryProducts,
// 	},
// 	{
// 		slug: 'inventory-tools',
// 		path: '/inventory/tools',
// 		component: screenComponents.InventoryTools,
// 	},
// 	{
// 		slug: 'inventory-services',
// 		path: '/inventory/services/:id?',
// 		component: screenComponents.InventoryServices,
// 	},
// ];
// 
// // COMPLETE
// export const accountingRoutes = [
// 	{
// 		slug: 'accounting-invoices-create',
// 		path: '/accounting/invoices/:id?',
// 		component: screenComponents.AccountingInvoices,
// 	},
// 	{
// 		slug: 'accounting-expenses-add',
// 		path: '/accounting/expenses/:id?',
// 		component: screenComponents.AccountingExpenses,
// 	},
// 	{
// 		slug: 'accounting-estimate-create',
// 		path: '/accounting/estimates/:id?',
// 		component: screenComponents.AccountingEstimates,
// 	},
// 	// {
// 	// 	slug: 'accounting-loans',
// 	// 	path: '/accounting/loans',
// 	// 	component: () => 'Todo...',
// 	// },
// ];
// 
// // COMPLETE
// export const communicationRoutes = [
// 	{
// 		slug: 'communication-calls',
// 		path: '/communication/calls',
// 		component: screenComponents.CommunicationCalls,
// 	},
// 	{
// 		slug: 'communication-chat',
// 		path: '/communication/chat',
// 		component: screenComponents.CommunicationChat,
// 	},
// 	{
// 		slug: 'communication-forum',
// 		path: '/communication/forum',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'communication-tasks',
// 		path: '/communication/tasks',
// 		component: () => 'Todo...',
// 	},
// ];
// 
// // COMPLETE
// export const itRoutes = [
// 	{
// 		slug: 'it-company-preferences',
// 		path: '/it/company-preferences',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'it-tags-management',
// 		path: '/it/tags-management',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'it-api',
// 		path: '/it/api',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'it-language-settings',
// 		path: '/it/language-settings',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'it-invoice-management-settings',
// 		path: '/it/invoice-management-settings',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'it-system-recommendations',
// 		path: '/it/system-recommendations',
// 		component: () => 'Todo...',
// 	},
// ];
// 
// // COMPLETE
// export const rdRoutes = [
// 	{
// 		slug: 'research-reports',
// 		path: '/research/reports',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-projects',
// 		path: '/research/projects',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-employees',
// 		path: '/research/databases/employees',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-references',
// 		path: '/research/databases/references',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-important-people',
// 		path: '/research/databases/important-people',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-association',
// 		path: '/research/databases/association',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-competitors',
// 		path: '/research/databases/competitors',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-postal-code',
// 		path: '/research/databases/postal-code',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-machine-management',
// 		path: '/research/databases/machine-management',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-databases-job-status',
// 		path: '/research/databases/job-status',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'research-analytics-project-items',
// 		path: '/research/analytics/project-items',
// 		component: () => 'Todo...',
// 	},
// ];
// 
// // COMPLETE
// export const marketingRoutes = [
// 	{
// 		slug: 'marketing',
// 		path: '/marketing/dashboard',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-goals',
// 		path: '/marketing/goals',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-seo',
// 		path: '/marketing/seo',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-smo',
// 		path: '/marketing/smo',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-sem',
// 		path: '/marketing/sem',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-traditional',
// 		path: '/marketing/traditional',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'marketing-reviews',
// 		path: '/marketing/reviews',
// 		component: screenComponents.MarketingReviews,
// 	},
// 	{
// 		slug: 'marketing-customer-email-broadcast',
// 		path: '/marketing/customer-email-broadcast',
// 		component: () => 'Todo...',
// 	},
// ];
// 
// // COMPLETE
// export const systemRoutes = [
// 	{
// 		slug: 'system-configuration',
// 		path: '/system/configuration',
// 		component: screenComponents.SystemConfiguration,
// 	},
// 	{
// 		slug: 'system-access',
// 		path: '/system/access/:id?',
// 		component: screenComponents.SystemAccess,
// 	},
// 	{
// 		slug: 'system-templates',
// 		path: '/system/templates',
// 		component: () => 'Todo...',
// 	},
// 	{
// 		slug: 'system-payments',
// 		path: '/system/payments',
// 		component: () => 'Todo...',
// 	},
// ];

const routes = [
	// itRoutes,
	// rdRoutes,
	// hrRoutes,
	// crmRoutes,
	guestRoutes,
	// systemRoutes,
	// accountRoutes,
	// operationRoutes,
	// inventoryRoutes,
	// marketingRoutes,
	// standaloneRoutes,
	// accountingRoutes,
	// communicationRoutes,
].flat();

export default routes;

