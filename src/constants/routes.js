'use strict';

import * as screenElements from '../screens';

// COMPLETE
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
	{
		slug: 'activate',
		path: '/activate',
		element: screenElements.Activate,
	},
	{
		slug: 'forgot-password',
		path: '/forgot_password',
		element: screenElements.ForgotPassword,
	},
];

// COMPLETE
export const accountRoutes = [
	{
		slug: 'account-profile',
		path: '/account/profile',
		element: screenElements.AccountProfile,
	},
	{
		slug: 'account-member',
		path: '/account/:id?',
		element: screenElements.AccountMember,
	},
 	{
 		slug: 'account-settings',
 		path: '/account/settings',
 		element: screenElements.AccountSettings,
 	},
	{
		slug: 'account-access-logs',
		path: '/account/access-logs',
		element: screenElements.AccountAccessLogs,
	},
];

// COMPLETE
export const standaloneRoutes = [
	{
		slug: 'home-dashboard',
		path: '/',
		element: screenElements.Home,
	},
	{
		slug: 'dashboard',
		path: '/dashboard',
		element: screenElements.Dashboard,
	},
	{
		slug: 'organizations',
		path: '/organizations',
		element: screenElements.Organizations,
	},
];

// COMPLETE
export const operationRoutes = [
	{
		slug: 'calendar',
		path: '/operations/calendar',
		element: screenElements.Calendar,
	},
	{
		slug: 'dispatch-map',
		path: '/operations/dispatch-map',
		element: screenElements.DispatchMap,
	},
	{
		slug: 'inventory-orders',
		path: '/operations/orders/:id?',
		element: screenElements.InventoryOrders,
	},
	{
		slug: 'crm-jobs',
		path: '/operations/jobs/:id?',
		element: screenElements.CrmJobs,
	},
];

export const hrRoutes = [
	// System
	{
		slug: 'hr-system-rewards',
		path: '/hr/system/rewards',
		element: screenElements.HrLegalParking,
	},
	{
		slug: 'hr-system-crew-management',
		path: '/hr/system/crew-management',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-system-company-information',
		path: '/hr/system/company-information',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-system-meetings',
		path: '/hr/system/meetings',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-system-contracts',
		path: '/hr/system/contracts',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-system-goals-management',
		path: '/hr/system/goals-management',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-system-recommendations',
		path: '/hr/system/recommendations',
		element: () => 'Todo...',
	},
	// Workforce
	{
		slug: 'hr-workforce-problems',
		path: '/hr/workforce/problems',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-workforce-hiring',
		path: '/hr/workforce/hiring',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-workforce-vacations',
		path: '/hr/workforce/vacations',
		element: () => 'Todo...',
	},
	{
		slug: 'hr-workforce',
		path: '/hr/workforce/:id?',
		element: screenElements.HrWorkforce,
	},
	{
		slug: 'hr-workforce-problems',
		path: '/hr/workforce/problems',
		element: () => 'Todo...',
	},
	// Legal
	{
		slug: 'hr-legal-parking-tickets',
		path: '/hr/legal/parking-tickets',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const crmRoutes = [
	{
		slug: 'crm-customers',
		path: '/crm/customers/:id?',
		element: screenElements.CrmCustomers,
	},
	{
		slug: 'crm-access',
		path: '/crm/access/:id?',
		element: screenElements.CrmAccess,
	},
	{
		slug: 'crm-companies',
		path: '/crm/companies/:id?',
		element: screenElements.CrmCompanies,
	},
];

// COMPLETE
export const inventoryRoutes = [
	{
		slug: 'inventory-fleet',
		path: '/inventory/fleet',
		element: screenElements.InventoryFleet,
	},
	{
		slug: 'inventory-vendors',
		path: '/inventory/vendors',
		element: screenElements.InventoryVendors,
	},
	{
		slug: 'inventory-settings',
		path: '/inventory/settings',
		element: screenElements.InventorySettings,
	},
	{
		slug: 'inventory-products',
		path: '/inventory/products/:id?',
		element: screenElements.InventoryProducts,
	},
	{
		slug: 'inventory-tools',
		path: '/inventory/tools',
		element: screenElements.InventoryTools,
	},
	{
		slug: 'inventory-services',
		path: '/inventory/services/:id?',
		element: screenElements.InventoryServices,
	},
];

// COMPLETE
export const accountingRoutes = [
 	{
 		slug: 'accounting-invoices-create',
 		path: '/accounting/invoices/:id?',
 		element: screenElements.AccountingInvoices,
 	},
	{
		slug: 'accounting-expenses-add',
		path: '/accounting/expenses/:id?',
		element: screenElements.AccountingExpenses,
	},
	{
		slug: 'accounting-estimate-create',
		path: '/accounting/estimates/:id?',
		element: screenElements.AccountingEstimates,
	},
	{
		slug: 'accounting-loans',
		path: '/accounting/loans',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const communicationRoutes = [
	{
		slug: 'communication-calls',
		path: '/communication/calls',
		element: screenElements.CommunicationCalls,
	},
	{
		slug: 'communication-chat',
		path: '/communication/chat',
		element: screenElements.CommunicationChat,
	},
	{
		slug: 'communication-forum',
		path: '/communication/forum',
		element: () => 'Todo...',
	},
	{
		slug: 'communication-tasks',
		path: '/communication/tasks',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const itRoutes = [
	{
		slug: 'it-company-preferences',
		path: '/it/company-preferences',
		element: () => 'Todo...',
	},
	{
		slug: 'it-tags-management',
		path: '/it/tags-management',
		element: () => 'Todo...',
	},
	{
		slug: 'it-api',
		path: '/it/api',
		element: () => 'Todo...',
	},
	{
		slug: 'it-language-settings',
		path: '/it/language-settings',
		element: () => 'Todo...',
	},
	{
		slug: 'it-invoice-management-settings',
		path: '/it/invoice-management-settings',
		element: () => 'Todo...',
	},
	{
		slug: 'it-system-recommendations',
		path: '/it/system-recommendations',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const rdRoutes = [
	{
		slug: 'research-reports',
		path: '/research/reports',
		element: () => 'Todo...',
	},
	{
		slug: 'research-projects',
		path: '/research/projects',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-workforces',
		path: '/research/databases/workforces',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-references',
		path: '/research/databases/references',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-important-people',
		path: '/research/databases/important-people',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-association',
		path: '/research/databases/association',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-competitors',
		path: '/research/databases/competitors',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-postal-code',
		path: '/research/databases/postal-code',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-machine-management',
		path: '/research/databases/machine-management',
		element: () => 'Todo...',
	},
	{
		slug: 'research-databases-job-status',
		path: '/research/databases/job-status',
		element: () => 'Todo...',
	},
	{
		slug: 'research-analytics-project-items',
		path: '/research/analytics/project-items',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const marketingRoutes = [
	{
		slug: 'marketing',
		path: '/marketing/dashboard',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-goals',
		path: '/marketing/goals',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-seo',
		path: '/marketing/seo',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-smo',
		path: '/marketing/smo',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-sem',
		path: '/marketing/sem',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-traditional',
		path: '/marketing/traditional',
		element: () => 'Todo...',
	},
	{
		slug: 'marketing-reviews',
		path: '/marketing/reviews',
		element: screenElements.MarketingReviews,
	},
	{
		slug: 'marketing-customer-email-broadcast',
		path: '/marketing/customer-email-broadcast',
		element: () => 'Todo...',
	},
];

// COMPLETE
export const systemRoutes = [
	{
		slug: 'system-configuration',
		path: '/system/configuration',
		element: screenElements.SystemConfiguration,
	},
	{
		slug: 'system-access',
		path: '/system/access/:id?',
		element: screenElements.SystemAccess,
	},
	{
		slug: 'system-templates',
		path: '/system/templates',
		element: screenElements.SystemTemplates,
	},
	{
		slug: 'system-payments',
		path: '/system/payments',
		element: () => 'Todo...',
	},
];

const routes = [
	itRoutes,
	rdRoutes,
	hrRoutes,
	crmRoutes,
	guestRoutes,
	systemRoutes,
	accountRoutes,
	operationRoutes,
	inventoryRoutes,
	marketingRoutes,
	standaloneRoutes,
	accountingRoutes,
	communicationRoutes,
].flat();

export default routes;

