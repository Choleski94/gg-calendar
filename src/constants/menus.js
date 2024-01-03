'use strict';

export const MENU_ACCOUNT = [
	// {
	// 	slug: 'nav.account.organizations.text',
	// 	link: '/organizations',
	// },
	{
		slug: 'nav.account.access-logs.text',
		link: '/account/access-logs',
	},
	{
		slug: 'nav.account.settings.text',
		link: '/account/settings',
	},
];

export const MENU_ORGANIZATION = [
	{
		slug: 'nav.organization.workforce.text',
		link: '/workforce',
		icon: 'bi-people',
	},
	{
		slug: 'nav.organization.access.text',
		link: '/access',
		icon: 'bi-shield-lock',
	},
	{
		slug: 'nav.organization.inventory.text',
		link: '/inventory',
		icon: 'bi-box-seam',
	},
	{
		slug: 'nav.organization.analytics.text',
		link: '/analytics',
		icon: 'bi-bar-chart-line',
	},
	{
		slug: 'nav.organization.configuration.text',
		link: '/configuration',
		icon: 'bi-gear',
	},
];

export const MENU_HR = [
	{
		slug: 'nav.hr.text',
	},
	// {
	// 	slug: 'nav.hr.employee.problem.text',
	// 	link: '/hr/problems',
	// 	icon: 'bi bi-puzzle',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.hr.employee.hiring.text',
	// 	link: '/hr/hiring',
	// 	icon: 'bi bi-shop',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.hr.employee.vactions.text',
	// 	link: '/hr/vacations',
	// 	icon: 'bi bi-cloud-sun',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	{
		slug: 'nav.hr.employee.management.text',
		link: '/hr/workforce',
		icon: 'bi bi-people',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
];

export const MENU_LEGAL = [
	{
		slug: 'nav.hr.legal.text',
	},
	{
		slug: 'nav.hr.legal.parking.text',
		link: '/hr/legal/parking-tickets',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
];

export const MENU_CRM = [
	{
		slug: 'nav.crm.text',
	},
	{
		slug: 'nav.crm.customers.text',
		link: '/crm/customers',
		icon: 'bi bi-person-lines-fill',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	// {
	// 	slug: 'nav.crm.compagnies.text',
	// 	link: '/crm/companies',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.crm.access.text',
	// 	link: '/crm/access',
	// 	badge: {
	// 		type: 'warning',
	// 		value: '-',
	// 	},
	// },
];

export const MENU_OPERATIONS = [
	{
		slug: 'nav.operation.text',
	},
	{
		slug: 'nav.crm.jobs.text',
		link: '/operations/jobs',
		icon: 'bi bi-tools',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	{
		slug: 'nav.dispatch.text',
		link: '/operations/dispatch-map',
		icon: 'bi bi-pin-map',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	{
		slug: 'nav.calendar.text',
		link: '/operations/calendar',
		icon: 'bi bi-calendar-week',
		badge: {
			type: 'warning',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.order.text',
		link: '/operations/orders',
		icon: 'bi bi-box-seam',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
];

export const MENU_INVENTORY = [
	{
		slug: 'nav.inventory.text',
	},
	{
		slug: 'nav.inventory.fleet.text',
		link: '/inventory/fleet',
		icon: 'bi bi-car-front',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.vendors.text',
		link: '/inventory/vendors',
		icon: 'bi bi-cart4',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.settings.text',
		link: '/inventory/settings',
		icon: 'bi bi-sliders2-vertical',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.product.text',
		link: '/inventory/products',
		icon: 'bi bi-upc-scan',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.tool.text',
		link: '/inventory/tools',
		icon: 'bi bi-tools',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
	{
		slug: 'nav.inventory.catalog.text',
		link: '/inventory/services',
		icon: 'bi bi-arrow-left-right',
		badge: {
			type: 'secondary',
			value: '-',
		},
	},
];

export const MENU_ACCOUNTING = [
	{
		slug: 'nav.accounting.text',
	},
	{
		slug: 'nav.accounting.invoices.text',
		link: '/accounting/invoices',
		icon: 'bi bi-cash-coin',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	{
		slug: 'nav.accounting.quotes.text',
		link: '/accounting/estimates',
		icon: 'bi bi-calculator',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	// {
	// 	slug: 'nav.accounting.expenses.text',
	// 	link: '/accounting/expenses',
	// 	icon: 'bi bi-receipt',
	// 	badge: {
	// 		type: 'primary',
	// 		value: '✔',
	// 	},
	// },
	// {
	// 	slug: 'nav.accounting.loans.text',
	// 	link: '/accounting/loans',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
];

export const MENU_COMMUNICATION = [
	{
		slug: 'nav.communication.text',
	},
	{
		slug: 'nav.communication.phone.text',
		link: '/communication/calls',
		badge: {
			type: 'primary',
			value: '-',
		},
	},
	{
		slug: 'nav.communication.chat.text',
		link: '/communication/chat',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.communication.forum.text',
		link: '/communication/forum',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.communication.task.text',
		link: '/communication/tasks',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
];

export const MENU_IT = [
	{
		slug: 'nav.it.text',
	},
	{
		slug: 'nav.it.company.text',
		link: '/it/company-preferences',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.it.tag.text',
		link: '/it/tags-management',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.it.api.text',
		link: '/it/api',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.it.language.text',
		link: '/it/language-settings',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.it.invoice.text',
		link: '/it/invoice-management-settings',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.it.recommendations.text',
		link: '/it/system-recommendations',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
];

export const MENU_RD = [
	{
		slug: 'nav.rd.text',
	},
	{
		slug: 'nav.rd.project.text',
		link: '/research/projects',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.rd.database.text',
		link: '/research/databases',
		badge: {
			type: 'danger',
			value: '-',
		},
		subMenu: [
			{
				slug: 'nav.rd.database.employee.text',
				link: '/research/databases/employees',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.references.text',
				link: '/research/databases/references',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.vip.text',
				link: '/research/databases/important-people',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.association.text',
				link: '/research/databases/association',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.competitors.text',
				link: '/research/databases/competitors',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.postal-code.text',
				link: '/research/databases/postal-code',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.machine.text',
				link: '/research/databases/machine-management',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
			{
				slug: 'nav.rd.database.job-satus.text',
				link: '/research/databases/job-status',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
		],
	},
	{
		slug: 'nav.rd.analytics.text',
		link: '/research/analytics',
		badge: {
			type: 'danger',
			value: '-',
		},
		subMenu: [
			{
				slug: 'nav.rd.analytics.project.text',
				link: '/research/analytics/project-items',
				badge: {
					type: 'danger',
					value: '-',
				},
			},
		],
	},
	{
		slug: 'nav.rd.feedback.text',
		link: '/research/customer-feedback-portal',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.rd.reports.text',
		link: '/research/reports',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
];

export const MENU_MARKETING = [
	{
		slug: 'nav.marketing.text',
	},
	// {
	// 	slug: 'nav.marketing.dashboard.text',
	// 	link: '/marketing/dashboard',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.marketing.seo.text',
	// 	link: '/marketing/seo',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.marketing.smo.text',
	// 	link: '/marketing/smo',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.marketing.sem.text',
	// 	link: '/marketing/sem',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.marketing.traditional.text',
	// 	link: '/marketing/traditional',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	{
		slug: 'nav.marketing.reviews.text',
		link: '/marketing/reviews',
		icon: 'bi bi-envelope-paper-heart',
		badge: {
			type: 'warning',
			value: '-',
		},
	},
	// {
	// 	slug: 'nav.marketing.email.text',
	// 	link: '/marketing/customer-email-broadcast',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'nav.marketing.goals.text',
	// 	link: '/marketing/goals',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
];

export const MENU_SYSTEM = [
	{
		slug: 'nav.hr.system.text',
	},
	{
		slug: 'nav.hr.system.access.text',
		link: '/system/access',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	{
		slug: 'nav.hr.system.templates.text',
		link: '/system/templates',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.hr.system.payments.text',
		link: '/system/payments',
		badge: {
			type: 'danger',
			value: '-',
		},
	},
	{
		slug: 'nav.hr.system.configuration.text',
		link: '/system/configuration',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
];

export const MENU_COMMON = [
	{
		slug: 'nav.dashboard.text',
		link: '/dashboard',
		icon: 'bi-speedometer2',
		badge: {
			type: 'primary',
			value: '✔',
		},
	},
	...MENU_HR,
	// ...MENU_LEGAL,
	...MENU_CRM,
	...MENU_OPERATIONS,
	...MENU_INVENTORY,
	...MENU_ACCOUNTING,
	// ...MENU_COMMUNICATION,
	// ...MENU_IT,
	// ...MENU_RD,
	...MENU_MARKETING,
	...MENU_SYSTEM,
	// {
	// 	slug: '----------- [ Legend ] -----------',
	// 	link: '#',
	// },
	// {
	// 	slug: 'Todo',
	// 	link: '/#',
	// 	badge: {
	// 		type: 'danger',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'Complete',
	// 	link: '/#',
	// 	badge: {
	// 		type: 'success',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'In progress',
	// 	link: '/#',
	// 	badge: {
	// 		type: 'warning',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'Need validation',
	// 	link: '/#',
	// 	badge: {
	// 		type: 'primary',
	// 		value: '-',
	// 	},
	// },
	// {
	// 	slug: 'UI Complete',
	// 	link: '/#',
	// 	badge: {
	// 		type: 'secondary',
	// 		value: '-',
	// 	},
	// },
];

export const MENU_USER_OBJ = {
	nav: MENU_COMMON,
	account: MENU_ACCOUNT,
};

export const MENU_ADMIN_OBJ = {
	nav: MENU_COMMON,
	account: MENU_ACCOUNT,
	organization: MENU_ORGANIZATION,
};
