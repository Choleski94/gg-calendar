import React from 'react';

import api from '@api';
import { Card, Modal } from '@components';
import formatMessage from '@utils/formatMessage';

const popularCardStyle = {
    zIndex: 1,
    border: '3px solid #007BFF',
}

const SUPPORTED_PLANS = {
	TEAM: 'TEAM',
	STARTER: 'STARTER',
	BUSINESS: 'BUSINESS',
	PROFESSIONAL: 'PROFESSIONAL',
}

const BillingConfiguration = () => {
	const [ showModal, setShowModal ] = React.useState(false);
	const [ activePlan, setActivePlan ] = React.useState(SUPPORTED_PLANS.PROFESSIONAL);

	const onModalClose = () => setShowModal(false);

	const onPlanClick = (e, selectedPlan) => {
		e.preventDefault();
		const currentPlan = SUPPORTED_PLANS[selectedPlan];
		if (currentPlan && activePlan !== currentPlan) {
			setActivePlan(currentPlan);
			setShowModal(true);
		}
	}

	return (
		<div className="row mt-15 mb-3">
			<div className="col-md-3">
				<Card>
					<span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
						Starter
					</span>
					<Card.Body className="pt-0">
						<h1 className="h1 font-weight-normal text-primary text-center mb-4">
							<br />
							$
							<span className="price">
								0
							</span>
							<span className="h6 text-muted ml-2">
								/ per month
								<br />
								<br />
								<br />
							</span>
						</h1>
						<p className="h6">
							Comprising the essential services of Tigado, this package is 
							well-suited for individual freelancers, and small businesses.
						</p>
						<ul className="mt-3 mb-4">
							<li>
								<span className="text-small">
									Customizable Contact Management
								</span>
							</li>
							<li>
								<span className="text-small">
									Task and Appointment Tracking
								</span>
							</li>
							<li>
								<span className="text-small">
									Basic Reporting and Analytics
								</span>
							</li>
							<li>
								<span className="text-small">
									Email Integration
								</span>
							</li>
							<li>
								<span className="text-small">
									Mobile Access
								</span>
							</li>
						</ul>
						<a className="btn btn-outline-secondary mb-2 d-block" onClick={(e) => onPlanClick(e, SUPPORTED_PLANS.STARTER)}>
							Downgrade
						</a>
					</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card style={popularCardStyle}>
					<span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
						Professional
					</span>
					<Card.Body className="pt-0">
						<h1 className="h1 font-weight-normal text-primary text-center mb-4">
							<br />
							$
							<span className="price">
								5
							</span>
							<span className="h6 text-muted ml-2">
								/ per month
								<br />
								<br />
								<br />
							</span>
						</h1>
						<p className="h6">
							Enhance Tigado's capabilities and provide professional services 
							tailored for individual freelancers aiming to boost their business growth.
						</p>
						<ul className="mt-3 mb-4">
							<li>
								<span className="text-small">
									Advanced Contact Segmentation
								</span>
							</li>
							<li>
								<span className="text-small">
									Sales Pipeline Management
								</span>
							</li>
							<li>
								<span className="text-small">
									Automated Workflows
								</span>
							</li>
							<li>
								<span className="text-small">
									Advanced Reporting and Dashboards
								</span>
							</li>
							<li>
								<span className="text-small">
									Integration with Third-Party Plugins
								</span>
							</li>
						</ul>
						<a className="btn btn-outline-primary mb-2 d-block" onClick={(e) => onPlanClick(e, SUPPORTED_PLANS.PROFESSIONAL)}>
							Current Plan
						</a>
					</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card>
					<span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
						Team
					</span>
					<Card.Body className="pt-0">
						<h1 className="h1 font-weight-normal text-primary text-center mb-4">
							<br />
							$
							<span className="price">
								15
							</span>
							<span className="h6 text-muted ml-2">
								/ user / month
								<br />
								max 100 users
								<br />
								minimum 5 seats
							</span>
						</h1>
						<p className="h6">
							Tailored for teams, it provides advanced features fostering improved 
							collaboration, productivity, and security measures.
						</p>
						<ul className="mt-3 mb-4">
							<li>
								<span className="text-small">
									Phone call system
								</span>
							</li>
							<li>
								<span className="text-small">
									Shared Calendar and Scheduling
								</span>
							</li>
							<li>
								<span className="text-small">
									Role-Based Access Control
								</span>
							</li>
							<li>
								<span className="text-small">
									Document Management
								</span>
							</li>
							<li>
								<span className="text-small">
									Customizable User Dashboards
								</span>
							</li>
						</ul>
						<a className="btn btn-outline-secondary mb-2 d-block" onClick={(e) => onPlanClick(e, SUPPORTED_PLANS.TEAM)}>
							Buy now
						</a>
					</Card.Body>
				</Card>
			</div>
			<div className="col-md-3">
				<Card>
					<span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">
						Business
					</span>
					<Card.Body className="pt-0">
						<h1 className="h1 font-weight-normal text-primary text-center mb-4">
							<br />
							$
							<span className="price">
								25
							</span>
							<span className="h6 text-muted ml-2">
								/ per month
								<br />
								<br />
								<br />
							</span>
						</h1>
						<p className="h6">
							Designed for medium to large enterprises requiring centralized 
							administration and advanced security features.
						</p>
						<ul className="mt-3 mb-4">
							<li>
								<span className="text-small">
									Advanced Security Features
								</span>
							</li>
							<li>
								<span className="text-small">
									Customer Support Integration
								</span>
							</li>
							<li>
								<span className="text-small">
									Multi-Channel Marketing Automation
								</span>
							</li>
							<li>
								<span className="text-small">
									Advanced Customization and API Access
								</span>
							</li>
							<li>
								<span className="text-small">
									Dedicated Account Manager
								</span>
							</li>
						</ul>
						<a className="btn btn-outline-secondary mb-2 d-block" onClick={(e) => onPlanClick(e, SUPPORTED_PLANS.BUSINESS)}>
							Buy now
						</a>
					</Card.Body>
				</Card>
			</div>
			{showModal && (
				<Modal title="Update billing plan" size="md" centered onCloseRequest={onModalClose}>
					{/* TODO */}
					You are about to change your account billing plan to {activePlan}.
				</Modal>
			)}
		</div>
	);
}

export default BillingConfiguration;
