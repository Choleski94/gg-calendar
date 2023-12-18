import React from 'react';

import Card from '@components/Card';
import Table from '@components/Table';
import Layout from '@components/Layout';
import NavPill from '@components/NavPill';
import Breadcrumb from '@components/Breadcrumb';

const SERVICES_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/settings',
		value: 'Settings'
	},
];

const SERVICES_KEYS = {
	SERVICES: 'SERVICES',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_SERVICES_OPTIONS = [
	{
		key: SERVICES_KEYS.SERVICES,
		value: (
			<span>
				Settings
			</span>
		),
	},
	{
		key: SERVICES_KEYS.STATISTICS,
		value: (
			<span>
				Statistics
			</span>
		),
	},
	{
		key: SERVICES_KEYS.SETTINGS,
		value: (
			<span>
				Settings
			</span>
		),
	},
];

const tableOptions = {
	techs: {
		header: [
		    {
			key: 'name',
			label: 'Name'
		    },
		    {
			key: 'position',
			label: 'Position'
		    },
		    {
			key: 'department',
			label: 'Department'
		    }
		],
		options: [
		    {
			id: 'Julian',
			name: 'Julian',
			position: 'HOD',
			department: 'IT'
		    },
		    {
			id: 'Marek',
			name: 'Marek',
			position: 'Technician',
			department: 'IT'
		    },
		    {
			id: 'Peter',
			name: 'Peter',
			position: 'Intern',
			department: 'IT'
		    }
		]
	},
	settings: {
	    "header": [
		{
		    "key": "service-name",
		    "label": "Service Name"
		},
		{
		    "key": "service-category",
		    "label": "Service Category"
		},
		{
		    "key": "description",
		    "label": "Description"
		},
		{
		    "key": "status",
		    "label": "Status"
		},
		{
		    "key": "regular-price",
		    "label": "Regular Price"
		},
		{
		    "key": "internal-cost",
		    "label": "Internal Cost"
		},
		{
		    "key": "actions",
		    "label": "Actions"
		}
	    ],
	    "options": [
		{
		    "service-name": "Vagram",
		    "service-category": "QBO Service",
		    "description": "mi integer ac neque duis",
		    "status": "Inactive",
		    "regular-price": "$77.42",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Sonair",
		    "service-category": "QBO Service",
		    "description": "ut ultrices vel augue vestibulum",
		    "status": "Inactive",
		    "regular-price": "$93.78",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Namfix",
		    "service-category": "QBO Service",
		    "description": "sit amet nulla quisque",
		    "status": "Active",
		    "regular-price": "$76.44",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Ventosanzap",
		    "service-category": "QBO Service",
		    "description": "mi pede malesuada in imperdiet",
		    "status": "Inactive",
		    "regular-price": "$93.56",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Treeflex",
		    "service-category": "QBO Service",
		    "description": "nunc purus phasellus",
		    "status": "Active",
		    "regular-price": "$82.25",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Zontrax",
		    "service-category": "QBO Service",
		    "description": "curabitur gravida nisi at nibh",
		    "status": "Inactive",
		    "regular-price": "$88.77",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Quo Lux",
		    "service-category": "QBO Service",
		    "description": "nam congue risus",
		    "status": "Inactive",
		    "regular-price": "$99.64",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Y-find",
		    "service-category": "QBO Service",
		    "description": "odio consequat varius",
		    "status": "Inactive",
		    "regular-price": "$94.99",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Tres-Zap",
		    "service-category": "QBO Service",
		    "description": "sapien non mi integer ac",
		    "status": "Inactive",
		    "regular-price": "$57.38",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Tampflex",
		    "service-category": "QBO Service",
		    "description": "non velit donec diam neque",
		    "status": "Inactive",
		    "regular-price": "$93.94",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Toughjoyfax",
		    "service-category": "QBO Service",
		    "description": "ac consequat metus sapien",
		    "status": "Active",
		    "regular-price": "$99.38",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		},
		{
		    "service-name": "Redhold",
		    "service-category": "QBO Service",
		    "description": "primis in faucibus orci",
		    "status": "Inactive",
		    "regular-price": "$67.39",
		    "internal-cost": "",
		    "actions": "\n                                          \n                                         \n                                        \n                                    "
		}
	    ]
	}
};

const SettingsScreen = () => {
	const [ activeSection, setActiveSection ] = React.useState(SERVICES_KEYS.SERVICES);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-sm mb-2 mb-sm-0">
						<Breadcrumb options={SERVICES_BREADCRUMB_OPTIONS} />
						<Layout.Title>
							Settings
						</Layout.Title>
					</div>
					<div className="col-sm-auto">
						<NavPill 
							id="inventory-settings"
							handleTabClick={setActiveSection}
							options={NAV_SERVICES_OPTIONS}
							defaultValue={SERVICES_KEYS.SERVICES}
						/>
					</div>
				</div>
			</Layout.StickyHeader>
			TODO
			{/* activeSection === SERVICES_KEYS.SERVICES && (
				<Table
					// withFilter
					height="63vh"
					elementsPerPage={300}
					headers={tableOptions.settings.header}
					searchPlaceholder="Search in settings"
					data={tableOptions.settings.options}
				/>
			) */}
			{/* activeSection === SERVICES_KEYS.NEXT_OIL_CHANGE && (
				<Table
					// withFilter
					height="63vh"
					elementsPerPage={300}
					headers={tableOptions.oil.header}
					searchPlaceholder="Search for next oil change"
					data={tableOptions.oil.options}
				/>
			) */}
			{/* activeSection === SERVICES_KEYS.ASSIGN && (
				<Table
					// withFilter
					height="63vh"
					elementsPerPage={300}
					headers={tableOptions.techs.header}
					searchPlaceholder="Search for unassigned techs"
					data={tableOptions.techs.options}
				/>
			) */}
			{/* activeSection === SERVICES_KEYS.STATISTICS && (
				'STATISTICS'
			) */}
			{/* activeSection === SERVICES_KEYS.SETTINGS && (
				'SETTINGS'
			) */}
		</Layout>
	);
};

export default SettingsScreen;
