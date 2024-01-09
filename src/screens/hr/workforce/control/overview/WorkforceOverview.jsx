import React from 'react';

import formatMessage from '@utils/formatMessage';
import { NavPill, Card, Counter } from '@components';

import Invites from './invites';
import Members from './members';

const SUPPORTED_SCREEN_SECTIONS = {
	INVITES: 'INVITES',
	MEMBERS: 'MEMBERS',
};

const NAV_TAB_OPTIONS = [           
	{
		key: SUPPORTED_SCREEN_SECTIONS.MEMBERS,
		value: 'Members',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.INVITES,
		value: 'Invites',
	},
];

const WorkforceOverview = () => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.MEMBERS);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="row">
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Total members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={18} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Active members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={11} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Innactive members
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={16} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
				<div className="col-sm-3 col-lg-3">
					<Card>
						<Card.Body>
							<Card.Subtitle>
								Pending invites
							</Card.Subtitle>
							<div className="row align-items-center gx-2">
								<div className="col">
									<span className="display-4 text-dark">
										<Counter number={2} />
									</span>
								</div>
							</div>
						</Card.Body>
					</Card>
				</div>
			</div>

			<NavPill
				options={NAV_TAB_OPTIONS}
				defaultValue={activeSection}
				handleTabClick={setActiveSection}
			/>

			{activeSection === SUPPORTED_SCREEN_SECTIONS.MEMBERS && (
				<Members />
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.INVITES && (
				<Invites />
			)}
		</div>
	);
};

export default WorkforceOverview;
