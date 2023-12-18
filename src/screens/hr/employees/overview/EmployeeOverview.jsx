import React from 'react';

import formatMessage from '@utils/formatMessage';
import { NavPill, Card, Counter } from '@components';

import Roles from './roles';
import Teams from './teams';
import Members from './members';
import Positions from './positions';

const SUPPORTED_SCREEN_SECTIONS = {
	TEAMS: 'TEAMS',
	ROLES: 'ROLES',
	MEMBERS: 'MEMBERS',
	POSITIONS: 'POSITIONS',
};

const NAV_TAB_OPTIONS = [           
	{
		key: SUPPORTED_SCREEN_SECTIONS.MEMBERS,
		value: 'Members',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.TEAMS,
		value: 'Teams',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.POSITIONS,
		value: 'Positions',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.ROLES,
		value: 'Roles & Permissions',
	},
];

const EmployeeOverview = () => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.MEMBERS);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			{activeSection === SUPPORTED_SCREEN_SECTIONS.MEMBERS && (
				<div className="row">
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total employees
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={18} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 5.0%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Active employees
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={11} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 1.2%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Innactive employees
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={16} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-danger text-danger p-1">
											<i className="bi-graph-down" /> 2.8%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.TEAMS && (
				<div className="row">
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total teams
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={24} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 5.0%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Active teams
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={12} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 1.2%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Innactive teams
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={56} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-danger text-danger p-1">
											<i className="bi-graph-down" /> 2.8%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.POSITIONS && (
				<div className="row">
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total positions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={4} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 5.0%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Active positions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={8} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 1.2%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Innactive positions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={26} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-danger text-danger p-1">
											<i className="bi-graph-down" /> 2.8%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.ROLES && (
				<div className="row">
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Total permissions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={134} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 5.0%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Active permissions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={100} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-success text-success p-1">
											<i className="bi-graph-up" /> 1.2%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-sm-4 col-lg-4">
						<Card>
							<Card.Body>
								<Card.Subtitle>
									Innactive permissions
								</Card.Subtitle>
								<div className="row align-items-center gx-2">
									<div className="col">
										<span className="display-4 text-dark">
											<Counter number={16} />
										</span>
									</div>
									<div className="col-auto">
										<span className="badge bg-soft-danger text-danger p-1">
											<i className="bi-graph-down" /> 2.8%
										</span>
									</div>
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			)}

			{/*
			<NavPill
				options={NAV_TAB_OPTIONS}
				defaultValue={activeSection}
				handleTabClick={setActiveSection}
			/>
			*/}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.MEMBERS && (
				<Members />
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.TEAMS && (
				<Teams />
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.POSITIONS && (
				<Positions />
			)}

			{activeSection === SUPPORTED_SCREEN_SECTIONS.ROLES && (
				<Roles />
			)}
		</div>
	);
};

export default EmployeeOverview;
