import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport, StickyNav } from '@components';

import {
	NAV_TAB_OPTIONS,
	JOBS_BREADCRUMB_OPTIONS, 
	SUPPORTED_SCREEN_SECTIONS,
} from './JobControl.controller';
import JobOverview from './overview';
import JobSettings from './settings';
import JobStatistics from './statistics';

const JobControl = ({ jobId, setJobId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={JOBS_BREADCRUMB_OPTIONS} />
									<Layout.Title>
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Jobs'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Job statistics'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Job Permissions'
										)}
									</Layout.Title>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
									<NavPill
										options={NAV_TAB_OPTIONS}
										handleTabClick={setActiveSection}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<JobOverview setJobId={setJobId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<JobStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<JobSettings />
				)}
			</div>
		</Layout>
	);
};

export default JobControl;
