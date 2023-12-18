import React from 'react';

import { Card, Table, Layout, NavPill, Breadcrumb } from '@components';

const FLEET_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/fleet',
		value: 'Fleet'
	},
];

const FLEET_KEYS = {
	FLEET: 'FLEET',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
	NEXT_OIL_CHANGE: 'NEXT_OIL_CHANGE',
	UNASSIGNED_TECHS: 'UNASSIGNED_TECHS',
};

const NAV_FLEET_OPTIONS = [
	{
		key: FLEET_KEYS.FLEET,
		value: (
			<span>
				Fleet
			</span>
		),
	},
	{
		key: FLEET_KEYS.NEXT_OIL_CHANGE,
		value: (
			<span>
				Next oil change
			</span>
		),
	},
	{
		key: FLEET_KEYS.UNASSIGNED_TECHS,
		value: (
			<span>
				Unassigned Techs
			</span>
		),
	},
	{
		key: FLEET_KEYS.STATISTICS,
		value: (
			<span>
				Statistics
			</span>
		),
	},
	{
		key: FLEET_KEYS.SETTINGS,
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
	fleet: {
		"header": [
		    {
		        "key": "car-description",
		        "label": "Car Description"
		    },
		    {
		        "key": "assigned-to",
		        "label": "Assigned to"
		    },
		    {
		        "key": "plate-#",
		        "label": "Plate #"
		    },
		    {
		        "key": "bought-for",
		        "label": "Bought for"
		    },
		    {
		        "key": "repairs",
		        "label": "Repairs"
		    },
		    {
		        "key": "total-spent",
		        "label": "Total Spent"
		    },
		    {
		        "key": "year-bought",
		        "label": "Year Bought"
		    },
		    {
		        "key": "days",
		        "label": "Days"
		    },
		    {
		        "key": "years",
		        "label": "Years"
		    },
		    {
		        "key": "estimated-money-spent-per-year",
		        "label": "Estimated Money spent per year"
		    },
		    {
		        "key": "estimated-money-spent-per-day",
		        "label": "Estimated Money spent per day"
		    },
		    {
		        "key": "current-date",
		        "label": "Current Date"
		    },
		    {
		        "key": "action",
		        "label": "Action"
		    }
		],
		"options": [
		    {
		        "car-description": "Nissan Cube",
		        "assigned-to": "Employee 3",
		        "plate-#": "FMT4269",
		        "bought-for": "$6,000.00",
		        "repairs": "$7,472.65",
		        "total-spent": "$13,472.65",
		        "year-bought": "05/06/2019",
		        "days": "1172",
		        "years": "3.21",
		        "estimated-money-spent-per-year": "$4,195.83",
		        "estimated-money-spent-per-day": "$11.50",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    },
		    {
		        "car-description": "Blue Matrix",
		        "assigned-to": "Employee 3",
		        "plate-#": "FMT4270",
		        "bought-for": "$2,900.00",
		        "repairs": "$6,450.27",
		        "total-spent": "$9,350.27",
		        "year-bought": "05/06/2019",
		        "days": "1172",
		        "years": "3.21",
		        "estimated-money-spent-per-year": "$2,911.99",
		        "estimated-money-spent-per-day": "$7.98",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    },
		    {
		        "car-description": "Silver Matrix",
		        "assigned-to": "Employee 3",
		        "plate-#": "FME4605",
		        "bought-for": "$3,400.00",
		        "repairs": "$4,219.76",
		        "total-spent": "$7,619.76",
		        "year-bought": "5/13/2019",
		        "days": "1165",
		        "years": "3.19",
		        "estimated-money-spent-per-year": "$2,387.31",
		        "estimated-money-spent-per-day": "$6.54",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    },
		    {
		        "car-description": "White Transit 2012",
		        "assigned-to": "Employee 3",
		        "plate-#": "FML5762",
		        "bought-for": "$10,000.00",
		        "repairs": "$2,850.53",
		        "total-spent": "$12,850.53",
		        "year-bought": "01/16/2020",
		        "days": "917",
		        "years": "2.51",
		        "estimated-money-spent-per-year": "$5,114.99",
		        "estimated-money-spent-per-day": "$14.01",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    },
		    {
		        "car-description": "Blue Transit 2010",
		        "assigned-to": "Employee 3",
		        "plate-#": "FME4604",
		        "bought-for": "$6,000.00",
		        "repairs": "$9,025.02",
		        "total-spent": "$15,025.02",
		        "year-bought": "02/24/2020",
		        "days": "878",
		        "years": "2.41",
		        "estimated-money-spent-per-year": "$6,246.16",
		        "estimated-money-spent-per-day": "$17.11",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    },
		    {
		        "car-description": "White Caravan 2010 Camera",
		        "assigned-to": "Employee 3",
		        "plate-#": "FPZ6953",
		        "bought-for": "$4,000.00",
		        "repairs": "$7,397.19",
		        "total-spent": "$11,397.19",
		        "year-bought": "August 4 2020",
		        "days": "716",
		        "years": "1.96",
		        "estimated-money-spent-per-year": "$5,810.02",
		        "estimated-money-spent-per-day": "$15.92",
		        "current-date": "07/22/2022",
		        "action": "\n                                      \n                                     \n                                    \n                                "
		    }
		]
	}
};

const FleetScreen = () => {
	const [ activeSection, setActiveSection ] = React.useState(FLEET_KEYS.FLEET);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-sm mb-2 mb-sm-0">
						<Breadcrumb options={FLEET_BREADCRUMB_OPTIONS} />
						<Layout.Title>
							Fleet Management
						</Layout.Title>
					</div>
					<div className="col-sm-auto">
						<NavPill 
							id="inventory-fleet"
							handleTabClick={setActiveSection}
							options={NAV_FLEET_OPTIONS}
							defaultValue={FLEET_KEYS.FLEET}
						/>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === FLEET_KEYS.FLEET && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.fleet.header}
						searchPlaceholder="Search in fleet"
						data={tableOptions.fleet.options}
					/>
				)}
				{activeSection === FLEET_KEYS.NEXT_OIL_CHANGE && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.oil.header}
						searchPlaceholder="Search for next oil change"
						data={tableOptions.oil.options}
					/>
				)}
				{activeSection === FLEET_KEYS.UNASSIGNED_TECHS && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.techs.header}
						searchPlaceholder="Search for unassigned techs"
						data={tableOptions.techs.options}
					/>
				)}
				{activeSection === FLEET_KEYS.STATISTICS && (
					'STATISTICS'
				)}
				{activeSection === FLEET_KEYS.SETTINGS && (
					'SETTINGS'
				)}
			</div>
		</Layout>
	);
};

export default FleetScreen;
