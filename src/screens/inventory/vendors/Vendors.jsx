import React from 'react';

import { withPrivateRouter } from '@utils/hocs';
import { Card, Table, Layout, NavPill, Breadcrumb } from '@components';

const VENDORS_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/vendors',
		value: 'Vendors'
	},
];

const VENDORS_KEYS = {
	VENDORS: 'VENDORS',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
	BRANDS: 'BRANDS',
};

const NAV_VENDORS_OPTIONS = [
	{
		key: VENDORS_KEYS.VENDORS,
		value: (
			<span>
				Vendors
			</span>
		),
	},
	{
		key: VENDORS_KEYS.BRANDS,
		value: (
			<span>
				Brands
			</span>
		),
	},
	{
		key: VENDORS_KEYS.STATISTICS,
		value: (
			<span>
				Statistics
			</span>
		),
	},
	{
		key: VENDORS_KEYS.SETTINGS,
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
	vendors: {
	    "header": [
		{
		    "key": "vendor-name",
		    "label": "Vendor Name"
		},
		{
		    "key": "payment-term",
		    "label": "Payment Term"
		},
		{
		    "key": "internal-notes",
		    "label": "Internal Notes"
		},
		{
		    "key": "public-notes",
		    "label": "Public Notes"
		},
		{
		    "key": "action",
		    "label": "Action"
		}
	    ],
	    "options": [
		{
		    "vendor-name": "Trina Barwood",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Paquito Bembridge",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Ettie Mulcock",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Sammy Gudgion",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Brod Philippault",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Donnell Duffield",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Salvatore Croser",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		},
		{
		    "vendor-name": "Aguste Hamby",
		    "payment-term": "DUR",
		    "internal-notes": "",
		    "public-notes": "",
		    "action": "\n                                     \n                                "
		}
	    ]
	}
};

const VendorsScreen = () => {
	const [ activeSection, setActiveSection ] = React.useState(VENDORS_KEYS.VENDORS);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-sm mb-2 mb-sm-0">
						<Breadcrumb options={VENDORS_BREADCRUMB_OPTIONS} />
						<Layout.Title>
							Vendors Management
						</Layout.Title>
					</div>
					<div className="col-sm-auto">
						<NavPill 
							id="inventory-vendors"
							handleTabClick={setActiveSection}
							options={NAV_VENDORS_OPTIONS}
							defaultValue={VENDORS_KEYS.VENDORS}
						/>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === VENDORS_KEYS.VENDORS && (
					<Table
						// withFilter
						height="63vh"
						elementsPerPage={300}
						headers={tableOptions.vendors.header}
						searchPlaceholder="Search vendors"
						data={tableOptions.vendors.options}
					/>
				)}
				{activeSection === VENDORS_KEYS.BRANDS && (
					<Card>
						<Card.Body className="vendors__brands">
							<form className="mb-3">
								<div className="row">
									<div className="col-md-10">
										<select className="form-control select2" data-toggle="select2">
											<option>-- Select Brand --</option>
											<option>A.O. Smith</option>
											<option>Ace</option>
											<option>Acer</option>
											<option>Acros</option>
											<option>Admiral</option>
											<option>Aeg</option>
											<option>Aeonair</option>
											<option>Affresh</option>
											<option>Aga</option>
											<option>Agri-Fab</option>
											<option>Agway</option>
											<option>Alliance</option>
											<option>Alpine</option>
											<option>Amana</option>
											<option>American Range</option>
											<option>Aprilaire</option>
											<option>Arctic Aire</option>
											<option>Arctic Cove</option>
											<option>Ariston</option>
											<option>Armstrong</option>
											<option>Asko</option>
											<option>Asus</option>
											<option>Awanti</option>
											<option>Axis</option>
											<option>B.A.C.</option>
											<option>Balboa Water Group</option>
											<option>Bauknecht</option>
											<option>Baxter</option>
											<option>Beam</option>
											<option>Beaumark</option>
											<option>Beko</option>
											<option>Belknap</option>
											<option>Berkel</option>
											<option>Bertazzoni</option>
											<option>Biesemeyer</option>
											<option>Big O</option>
											<option>Bigchill</option>
											<option>Bissell</option>
											<option>Black &amp; Decker</option>
											<option>Blackmax Lawn And Garden Parts</option>
											<option>Blomberg</option>
											<option>Blu</option>
											<option>Blue Grass</option>
											<option>Blue Star</option>
											<option>Bolens</option>
											<option>Bosch</option>
											<option>Bostitch</option>
											<option>Bowers &amp; Wilkins</option>
											<option>Brastemp</option>
											<option>Braun</option>
											<option>Briggs And Stratton</option>
											<option>Broan</option>
											<option>Brookstone</option>
											<option>Brother</option>
											<option>Brown</option>
											<option>Brute Lawn And Garden</option>
											<option>Builder'S Best</option>
											<option>Caldor</option>
											<option>Caloric</option>
											<option>Capital Cooking</option>
											<option>Carpet Pro</option>
											<option>Carrier</option>
											<option>Casabella</option>
											<option>Cat Pumps</option>
											<option>Cenex</option>
											<option>Central Park</option>
											<option>Cielo</option>
											<option>Cirrus</option>
											<option>Classic</option>
											<option>Cleanmax</option>
											<option>Cleva</option>
											<option>Coast To Coast</option>
											<option>Coldtech</option>
											<option>Coleman</option>
											<option>Coleman Heat</option>
											<option>Columbia Lawn And Garden</option>
											<option>Comfort Star</option>
											<option>Comstock-Castle</option>
											<option>Consul</option>
											<option>Core</option>
											<option>County Line</option>
											<option>County Line By Mtd</option>
											<option>Coyote</option>
											<option>Craftsman</option>
											<option>Crosley</option>
											<option>Cst/Berger</option>
											<option>Cub Cadet</option>
											<option>Dacor</option>
											<option>Danby</option>
											<option>Dcs</option>
											<option>Dell</option>
											<option>Delonghi</option>
											<option>Delta</option>
											<option>Denon</option>
											<option>Desert Aire</option>
											<option>Desertaire</option>
											<option>Devilbiss</option>
											<option>Dewalt</option>
											<option>Diplomat</option>
											<option>Dirt Devil</option>
											<option>Dometic Mobar</option>
											<option>Doyon</option>
											<option>Dr Power</option>
											<option>Dremel</option>
											<option>Ducane</option>
											<option>Duerr</option>
											<option>Dustcare</option>
											<option>Dynasty</option>
											<option>Dyson</option>
											<option>Earthquake</option>
											<option>Easyhome</option>
											<option>Echo</option>
											<option>Ego</option>
											<option>Electrolux</option>
											<option>Element</option>
											<option>Elica</option>
											<option>Embraco</option>
											<option>Emerson</option>
											<option>Epson</option>
											<option>Estate</option>
											<option>Estate Appliance</option>
											<option>Eureka</option>
											<option>Eversharp</option>
											<option>Expert Gardner</option>
											<option>Faber</option>
											<option>Fagor</option>
											<option>Falmex</option>
											<option>Fantech</option>
											<option>Fantom</option>
											<option>Fedders</option>
											<option>Fhiaba</option>
											<option>Filter Queen</option>
											<option>Fisher &amp; Paykel</option>
											<option>Five-Star</option>
											<option>Flex</option>
											<option>Forest City</option>
											<option>Forno</option>
											<option>Frigidaire</option>
											<option>Fuller Brush</option>
											<option>Funai</option>
											<option>Gaggenau</option>
											<option>Garden Groom</option>
											<option>Garden King</option>
											<option>Garden Way</option>
											<option>Garland</option>
											<option>Garland Commercial</option>
											<option>Ge</option>
											<option>Gecko Alliance / Aquaflo</option>
											<option>Generac</option>
											<option>General Electric</option>
											<option>Generations</option>
											<option>Genie</option>
											<option>Gibson</option>
											<option>Gladiator</option>
											<option>Golite</option>
											<option>Goodman</option>
											<option>Gorenje</option>
											<option>Grass Handler</option>
											<option>Green Thumb</option>
											<option>Greenbrier</option>
											<option>Greenmachine</option>
											<option>Guardian</option>
											<option>Haier</option>
											<option>Hakko</option>
											<option>Hardware Hank</option>
											<option>Hardwick</option>
											<option>Hart</option>
											<option>Hayward</option>
											<option>Heartland</option>
											<option>Hechinger</option>
											<option>Heritage Agway</option>
											<option>Hisense</option>
											<option>Hitachi</option>
											<option>Hitachi Metabo</option>
											<option>Hobart</option>
											<option>Homelite</option>
											<option>Honda Small Engines</option>
											<option>Hoover</option>
											<option>Hotpoint</option>
											<option>How To Find Your Briggs &amp; Stratton Model Number</option>
											<option>Huebsch</option>
											<option>Huskee Lawn And Garden</option>
											<option>Husky</option>
											<option>Husqvarna</option>
											<option>Hyper Tough</option>
											<option>Idylis</option>
											<option>Ikea</option>
											<option>Ikon</option>
											<option>Ilve</option>
											<option>Imperial</option>
											<option>Imperial Appliance</option>
											<option>Imperial Range</option>
											<option>Indesit</option>
											<option>Inglis</option>
											<option>Insgnia</option>
											<option>Insinkerator</option>
											<option>J.C. Penney</option>
											<option>Jacuzzi</option>
											<option>Jade</option>
											<option>Jenn Air</option>
											<option>Jet-Tech</option>
											<option>Jvc</option>
											<option>Kelon</option>
											<option>Kelvinator</option>
											<option>Kenmore</option>
											<option>Kenwood</option>
											<option>Kirby</option>
											<option>Kirkland</option>
											<option>Kitchen Aid</option>
											<option>Kitchenaid</option>
											<option>Kleen Kut</option>
											<option>Klutch</option>
											<option>Koblenz</option>
											<option>Kohler Engines</option>
											<option>Konica Minolta</option>
											<option>Konka</option>
											<option>Kool-It</option>
											<option>Kova</option>
											<option>Laars</option>
											<option>Lacornue</option>
											<option>Lasko</option>
											<option>Lawn Champ</option>
											<option>Lawn Chief</option>
											<option>Lawn General</option>
											<option>Lawn Groom</option>
											<option>Lawn Hawk</option>
											<option>Lawn Pro</option>
											<option>Lawnflite</option>
											<option>Lct Engines</option>
											<option>Lennox</option>
											<option>Lenovo</option>
											<option>Lexmark</option>
											<option>Lg</option>
											<option>Liebherr</option>
											<option>Long Life</option>
											<option>Lowes</option>
											<option>Lynx</option>
											<option>Magic Chef</option>
											<option>Magic Chef Commercial</option>
											<option>Magnavox</option>
											<option>Mainstays</option>
											<option>Makita</option>
											<option>Malmo</option>
											<option>Marantz</option>
											<option>Mark Master</option>
											<option>Marvel</option>
											<option>Mastercraft</option>
											<option>Maytag</option>
											<option>Mcculloch (2003-2007)</option>
											<option>Micro Fridge</option>
											<option>Midea</option>
											<option>Miele</option>
											<option>Migali</option>
											<option>Mitsubishi</option>
											<option>Modern Maid</option>
											<option>Moffat</option>
											<option>Monogram</option>
											<option>Montague</option>
											<option>Montgomery Ward</option>
											<option>Mrcool</option>
											<option>Msi</option>
											<option>Mtd</option>
											<option>Mtd Gold</option>
											<option>Mtd Mastercut</option>
											<option>Mtd Pro</option>
											<option>Murray</option>
											<option>Napoleon</option>
											<option>New Englander</option>
											<option>Norge</option>
											<option>Norpole</option>
											<option>Northland</option>
											<option>Nss- National Super Sweeper</option>
											<option>Nu-Vu</option>
											<option>Nxr</option>
											<option>Odyssey</option>
											<option>Oki</option>
											<option>Omcan</option>
											<option>Optoma</option>
											<option>Oreck</option>
											<option>Oregon</option>
											<option>Our Own Supreme</option>
											<option>Panasonic</option>
											<option>Pentair</option>
											<option>Perlick</option>
											<option>Philco</option>
											<option>Philips</option>
											<option>Philips Avent</option>
											<option>Philips Norelco</option>
											<option>Philips Sonicare</option>
											<option>Platinum</option>
											<option>Polaris</option>
											<option>Polti</option>
											<option>Poolvergnuegen</option>
											<option>Porter &amp; Charles</option>
											<option>Porter Cable</option>
											<option>Poulan/Poulan Pro</option>
											<option>Power Kraft</option>
											<option>Power Pro</option>
											<option>Power Streak</option>
											<option>Power Tech</option>
											<option>Powerstroke</option>
											<option>Premier</option>
											<option>Premiere</option>
											<option>Presrv</option>
											<option>Promo</option>
											<option>Proteam</option>
											<option>Quality</option>
											<option>Rainbow</option>
											<option>Ranch King</option>
											<option>Raypak</option>
											<option>Redmax</option>
											<option>Remington (2009-After)</option>
											<option>Rheem</option>
											<option>Riccar</option>
											<option>Ridgid</option>
											<option>Robomow</option>
											<option>Rockwell</option>
											<option>Roper</option>
											<option>Rotozip</option>
											<option>Royal</option>
											<option>Ryobi</option>
											<option>Saeco</option>
											<option>Sams Club</option>
											<option>Samsung</option>
											<option>Sanitaire</option>
											<option>Sebo</option>
											<option>Select Series</option>
											<option>Sentar</option>
											<option>Sentry</option>
											<option>Servistar</option>
											<option>Sharp</option>
											<option>Shop-Vac</option>
											<option>Siemens</option>
											<option>Sierra</option>
											<option>Signature</option>
											<option>Silhouette</option>
											<option>Silver Series</option>
											<option>Simplicity</option>
											<option>Simplicity By Mtd</option>
											<option>Simplicity Phd</option>
											<option>Skil</option>
											<option>Smeg</option>
											<option>Snapper By Mtd</option>
											<option>Snow Champ</option>
											<option>Snow Pro</option>
											<option>Snowflite</option>
											<option>Sonfarrel Martec</option>
											<option>Sony</option>
											<option>Southbend</option>
											<option>Spear Edge</option>
											<option>Speeco</option>
											<option>Speed Queen</option>
											<option>Splendide</option>
											<option>Sta-Rite</option>
											<option>Statesman</option>
											<option>Stc American</option>
											<option>Sterling</option>
											<option>Subaru / Robin</option>
											<option>Subzero</option>
											<option>Sunbeam</option>
											<option>Supreme</option>
											<option>Tanaka</option>
											<option>Tappan</option>
											<option>Task Force</option>
											<option>Tazz Outdoor</option>
											<option>Tcl</option>
											<option>Tecumseh Engines</option>
											<option>Tempur Pedic</option>
											<option>Therma-Tek</option>
											<option>Thermador</option>
											<option>Thermos</option>
											<option>Timberland</option>
											<option>Topflite</option>
											<option>Toro</option>
											<option>Toshiba </option>
											<option>Tradesman</option>
											<option>Trane</option>
											<option>Traulsen</option>
											<option>Trimmerplus</option>
											<option>Troy-Bilt</option>
											<option>Turf King</option>
											<option>Turf Power</option>
											<option>Turf Pro</option>
											<option>Turf Til</option>
											<option>Turf Trac</option>
											<option>Turf Trim</option>
											<option>Unimac</option>
											<option>Vacmaster</option>
											<option>Vermont Castings</option>
											<option>Viking</option>
											<option>Vizio</option>
											<option>Vulcan</option>
											<option>Walbro</option>
											<option>Waterco And Baker Hydro</option>
											<option>Waterway</option>
											<option>Weed Eater</option>
											<option>Welton Usa</option>
											<option>Western Auto</option>
											<option>Western Sun</option>
											<option>Westinghouse</option>
											<option>Westminster</option>
											<option>Whirlpool</option>
											<option>White Outdoor</option>
											<option>Whites</option>
											<option>Windsor</option>
											<option>Wizard</option>
											<option>Wolf</option>
											<option>Worx</option>
											<option>Yamaha</option>
											<option>Yard Machines</option>
											<option>Yard Man</option>
											<option>York</option>
											<option>Zephyr</option>
											<option>Zodiac / Jandy</option>
											<option>True</option>
											<option>Installation Parts</option>
											<option>Universals</option>
											<option>American Range</option>
										</select>
									</div>
									<div className="col-md-2">
										<button className="btn btn-primary w-100">Search</button>
									</div>
								</div>
							</form>
							<div className="results__meta">
								<h4>Results</h4>
								<div className="mt-2">
									<span>
										<b>Number of Suppliers: </b> 6
									</span>
									&nbsp;&nbsp;
									<span>
										<b>Canadians Suppliers: </b> 6
									</span>
								</div>
								<div className="row mt-3">
									<div className="col-md-4">
										<div className="card">
											<div className="card-body">
												<h4 className="mt-0">
													<a href="../detail/index.html">Parts Warehouse</a>
												</h4>
												<ul className="list-group-flush p-0 m-0">
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Phone</b>
														</span>
														<span>771-696-0124</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Email</b>
														</span>
														<span>democompany@example.com</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Address</b>
														</span>
														<span> Dummy Address, Canada </span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Country</b>
														</span>
														<span>Canada</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Website</b>
														</span>
														<span>
															<a href="https://google.com" target="_blank">
																https://google.com
															</a>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card">
											<div className="card-body">
												<h4 className="mt-0">
													<a href="../detail/index.html">Encompass</a>
												</h4>
												<ul className="list-group-flush p-0 m-0">
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Phone</b>
														</span>
														<span>771-696-0124</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Email</b>
														</span>
														<span>democompany@example.com</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Address</b>
														</span>
														<span> Dummy Address, Canada </span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Country</b>
														</span>
														<span>Canada</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Website</b>
														</span>
														<span>
															<a href="https://google.com" target="_blank">
																https://google.com
															</a>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card">
											<div className="card-body">
												<h4 className="mt-0">
													<a href="../detail/index.html">Simply Parts</a>
												</h4>
												<ul className="list-group-flush p-0 m-0">
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Phone</b>
														</span>
														<span>771-696-0124</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Email</b>
														</span>
														<span>democompany@example.com</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Address</b>
														</span>
														<span> Dummy Address, Canada </span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Country</b>
														</span>
														<span>Canada</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Website</b>
														</span>
														<span>
															<a href="https://google.com" target="_blank">
																https://google.com
															</a>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card">
											<div className="card-body">
												<h4 className="mt-0">
													<a href="../detail/index.html">Euro Parts</a>
												</h4>
												<ul className="list-group-flush p-0 m-0">
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Phone</b>
														</span>
														<span>771-696-0124</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Email</b>
														</span>
														<span>democompany@example.com</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Address</b>
														</span>
														<span> Dummy Address, Canada </span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Country</b>
														</span>
														<span>Canada</span>
													</li>
													<li className="list-group-item d-flex justify-content-between align-items-center">
														<span>
															<b>Website</b>
														</span>
														<span>
															<a href="https://google.com" target="_blank">
																https://google.com
															</a>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Card.Body>
					</Card>
				)}
				{activeSection === VENDORS_KEYS.STATISTICS && (
					'STATISTICS'
				)}
				{activeSection === VENDORS_KEYS.SETTINGS && (
					'SETTINGS'
				)}
			</div>
		</Layout>
	);
};

export default withPrivateRouter(VendorsScreen);
