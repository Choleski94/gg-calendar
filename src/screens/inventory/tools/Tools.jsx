import React from 'react';

import Card from '@components/Card';
import Table from '@components/Table';
import Layout from '@components/Layout';
import NavPill from '@components/NavPill';
import Breadcrumb from '@components/Breadcrumb';

const TOOLS_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/tools',
		value: 'Tools'
	},
];

const TOOLS_KEYS = {
	TOOLS: 'TOOLS',
	ASSIGN: 'ASSIGN',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_TOOLS_OPTIONS = [
	{
		key: TOOLS_KEYS.TOOLS,
		value: (
			<span>
				Tools
			</span>
		),
	},
	{
		key: TOOLS_KEYS.ASSIGN,
		value: (
			<span>
				Assigned Tools
			</span>
		),
	},
	{
		key: TOOLS_KEYS.STATISTICS,
		value: (
			<span>
				Statistics
			</span>
		),
	},
	{
		key: TOOLS_KEYS.SETTINGS,
		value: (
			<span>
				Settings
			</span>
		),
	},
];

const tableOptions = {
	oil: {
		header: [
			{
				"key": "vehicle",
				label: "Vehicle"
			},
			{
				"key": "next-oil-change-after",
				label: "Next Oil Change After"
			}
		],
		options: [
			{
				"id": "Car 1",
				"vehicle": "Car 1",
				"next-oil-change-after": "10 km"
			},
			{
				"id": "Car 2",
				"vehicle": "Car 2",
				"next-oil-change-after": "20 km"
			},
			{
				"id": "Car 3",
				"vehicle": "Car 3",
				"next-oil-change-after": "30 km"
			},
			{
				"id": "Car 4",
				"vehicle": "Car 4",
				"next-oil-change-after": "40 km"
			},
			{
				"id": "Car 5",
				"vehicle": "Car 5",
				"next-oil-change-after": "50 km"
			},
			{
				"id": "Car 6",
				"vehicle": "Car 6",
				"next-oil-change-after": "60 km"
			}
		]
	},
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
	tools: {
	    "header": [
		{
		    "key": "type",
		    "label": "Type"
		},
		{
		    "key": "tool-name",
		    "label": "Tool Name"
		},
		{
		    "key": "tool-#",
		    "label": "Tool #"
		},
		{
		    "key": "qty.",
		    "label": "Qty."
		},
		{
		    "key": "location",
		    "label": "Location"
		},
		{
		    "key": "sub-location",
		    "label": "Sub Location"
		},
		{
		    "key": "charge",
		    "label": "Charge"
		},
		{
		    "key": "notes",
		    "label": "Notes"
		},
		{
		    "key": "supplier",
		    "label": "Supplier"
		},
		{
		    "key": "website-purchase",
		    "label": "Website Purchase"
		},
		{
		    "key": "cost",
		    "label": "Cost"
		},
		{
		    "key": "maintaince-required",
		    "label": "Maintaince Required"
		},
		{
		    "key": "action",
		    "label": "Action"
		}
	    ],
	    "options": [
		{
		    "type": "Electrical",
		    "tool-name": "Multimeter",
		    "tool-#": "52dSds5",
		    "qty.": "5",
		    "location": "Dokota",
		    "sub-location": "----",
		    "charge": "$25",
		    "notes": "lorem",
		    "supplier": "Reliable Parts",
		    "website-purchase": "https://reliableparts.com",
		    "cost": "$10",
		    "maintaince-required": "Yes",
		    "action": "\n                                     \n                                "
		},
		{
		    "type": "Electrical",
		    "tool-name": "hammer",
		    "tool-#": "fg5fg56sf",
		    "qty.": "4",
		    "location": "Dokota",
		    "sub-location": "etc",
		    "charge": "$35",
		    "notes": "lorem",
		    "supplier": "Supplier 2",
		    "website-purchase": "----",
		    "cost": "$30",
		    "maintaince-required": "No",
		    "action": "\n                                     \n                                "
		}
	    ]
	}
};

const ToolsScreen = () => {
	const [ activeSection, setActiveSection ] = React.useState(TOOLS_KEYS.TOOLS);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-sm mb-2 mb-sm-0">
						<Breadcrumb options={TOOLS_BREADCRUMB_OPTIONS} />
						<Layout.Title>
							Tools Management
						</Layout.Title>
					</div>
					<div className="col-sm-auto">
						<NavPill 
							id="inventory-tools"
							handleTabClick={setActiveSection}
							options={NAV_TOOLS_OPTIONS}
							defaultValue={TOOLS_KEYS.TOOLS}
						/>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === TOOLS_KEYS.TOOLS && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.tools.header}
						searchPlaceholder="Search in tools"
						data={tableOptions.tools.options}
					/>
				)}
				{activeSection === TOOLS_KEYS.NEXT_OIL_CHANGE && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.oil.header}
						searchPlaceholder="Search for next oil change"
						data={tableOptions.oil.options}
					/>
				)}
				{activeSection === TOOLS_KEYS.ASSIGN && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.techs.header}
						searchPlaceholder="Search for unassigned techs"
						data={tableOptions.techs.options}
					/>
				)}
				{activeSection === TOOLS_KEYS.STATISTICS && (
					'STATISTICS'
				)}
				{activeSection === TOOLS_KEYS.SETTINGS && (
					'SETTINGS'
				)}
			</div>
		</Layout>
	);
};

export default ToolsScreen;
