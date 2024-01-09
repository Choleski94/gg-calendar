'use strict';

// Authentication
export { default as SignIn } from './signin';
export { default as SignUp } from './signup';
export { default as Activate } from './activate';
export { default as ForgotPassword } from './forgot_password';

// Standalone
export { default as Home } from './home';
export { default as Dashboard } from './dashboard';

// Operations
export { default as CrmJobs } from './operations/jobs';
export { default as Calendar } from './operations/calendar';
export { default as InventoryOrders } from './operations/orders';
export { default as DispatchMap } from './operations/dispatch-map';

// HR
// export { default as HrChat } from './communication/calls';
// export { default as HrForum } from './communication/calls';
// export { default as HrCalls } from './communication/calls';
export { default as HrLegalParking } from './hr/legal/parking';

// HR Workforce & Teams
export { default as HrWorkforce } from './hr/workforce';

// Account
export { default as AccountMember } from './account/member';
export { default as AccountProfile } from './account/profile';
export { default as AccountSettings } from './account/settings';
export { default as AccountAccessLogs } from './account/access-logs';

// CRM
export { default as CrmAccess } from './crm/access';
export { default as CrmCustomers } from './crm/customers';
export { default as CrmCompanies } from './crm/companies';

// Communications
export { default as CommunicationChat } from './communication/calls';
export { default as CommunicationForum } from './communication/calls';
export { default as CommunicationCalls } from './communication/calls';
export { default as CommunicationTasks } from './communication/calls';

// Inventory
export { default as InventoryTools } from './inventory/tools';
export { default as InventoryFleet } from './inventory/fleet';
export { default as InventoryVendors } from './inventory/vendors';
export { default as InventoryServices } from './inventory/services';
export { default as InventoryProducts } from './inventory/products';
export { default as InventorySettings } from './inventory/settings';

// Marketing
export { default as MarketingReviews } from './marketing/review-management';

// Accounting
export { default as AccountingExpenses } from './accounting/expenses';
export { default as AccountingInvoices } from './accounting/invoices';
export { default as AccountingEstimates } from './accounting/estimates';

// On boarding
// export { default as OnBoarding } from './onboarding';

// Organizations
export { default as Organizations } from './organizations';

// System
export { default as SystemAccess } from './system/access';
export { default as SystemTemplates } from './system/templates';
export { default as SystemConfiguration} from './system/configuration';
