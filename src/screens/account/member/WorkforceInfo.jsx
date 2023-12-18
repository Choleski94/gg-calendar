import React from 'react';
import { Link } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';
import formatMessage from '@utils/formatMessage';
import { Layout, NavTab, Breadcrumb, GetSupport } from '@components';

import Jobs from './Jobs';
import Teams from './Teams';
import Access from './Access';
import Account from './Account';
import Payroll from './Payroll';
import Files, { FilesCTA } from './Files';

// import Notes, { NotesCTA } from './Notes';
// import Invoice, { InvoiceCTA } from './Invoice';
// import Projects, { ProjectsCTA } from './Projects';
// import Activity, { ActivityCTA } from './Activity';

const JOBS_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/hr',
		value: 'HR'
	},
	{
		path: '/hr/employee',
		value: 'Employee'
	},
	{
		path: '/hr/employee/workforce',
		value: 'Workforce'
	},
	{
		path: '/hr/employee/workforce',
		value: 'Mark Williams'
	},
];

const SUPPORTED_SECTIONS = {
	JOBS: 'JOBS',
	TEAMS: 'TEAMS',
	FILES: 'FILES',
	ACCESS: 'ACCESS',
	ACCOUNT: 'ACCOUNT',
	PAYROLL: 'PAYROLL',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SECTIONS.ACCOUNT,
		value: 'Account',
	},
	{
		key: SUPPORTED_SECTIONS.ACCESS,
		value: 'Access',
	},
	{
		key: SUPPORTED_SECTIONS.JOBS,
		value: 'Jobs',
	},
	{
		key: SUPPORTED_SECTIONS.FILES,
		value: 'Files',
	},
	{
		key: SUPPORTED_SECTIONS.PAYROLL,
		value: 'Payroll & Schedule',
	},
	{
		key: SUPPORTED_SECTIONS.TEAMS,
		value: 'Teams',
	},
];

const WorkforceInfo = () => {

	const [ data, setData ] = React.useState({});
	const [ optionMode, setOptionMode ] = React.useState(false);
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SECTIONS.ACCOUNT);

	React.useState(() => {
		console.log('Mounted...');
	}, []);

	const handleToggleEditMode = (e) => {
		e.preventDefault();
	};	

	const handleToggleOptionMode = (e) => {
		e.preventDefault();
		setOptionMode(!optionMode);
	};

	const hasData = React.useMemo(() => (
		Boolean(Object.keys(data || {}).length)
	), [ data ]);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-lg mb-3 mb-lg-0 mb-4">
									<Breadcrumb options={JOBS_INFO_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										Mark Williams
									</h1>
								</div>
								<div className="col-lg-auto">
									<GetSupport />
									{(activeSection === SUPPORTED_SECTIONS.ACCOUNT) && (
										<button type="button" className="btn btn-sm btn-outline-danger">
											<i className="bi bi-trash" />
											Delete workforce
										</button>
									)}

									{/* (activeSection === SUPPORTED_SECTIONS.TEAMS) && (
										'Todo teams'
									) */}

									{/* (activeSection === SUPPORTED_SECTIONS.JOBS) && (
										'Todo jobs'
									) */}

									{/* (activeSection === SUPPORTED_SECTIONS.ACCESS) && (
										'Todo access'
									) */}
									
									{(activeSection === SUPPORTED_SECTIONS.FILES) && (
										<FilesCTA 
											onClick={(e) => onCtaClick(e, SUPPORTED_SECTIONS.FILES)} 
										/>
									)}

									{/* (activeSection === SUPPORTED_SECTIONS.PAYROLL) && (
										'Todo payroll'
									) */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="row mt-15 justify-content-lg-center">
				<div className="col-lg-10">
					<div className="profile-cover">
						<div className="profile-cover-img-wrapper">
							<img
								id="profileCoverImg"
								className="profile-cover-img"
								src="/assets/img/1920x400/img2.jpg"
								alt="Image Description"
							/>
						</div>
					</div>
					<div className="text-center mb-5">
						<label
							className="avatar avatar-xxl avatar-circle avatar-uploader profile-cover-avatar"
							htmlFor="editAvatarUploaderModal"
						>
							<img
								id="editAvatarImgModal"
								className="avatar-img"
								src="/assets/img/160x160/img6.jpg"
								alt="Image Description"
							/>
							<input
								type="file"
								className="js-file-attach avatar-uploader-input"
								id="editAvatarUploaderModal"
							/>
						</label>
						<h1 className="page-header-title">
							Mark Williams
							{" "}
							<i
								className="bi-patch-check-fill fs-2 text-primary"
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								aria-label="Top endorsed"
								data-bs-original-title="Top endorsed"
							/>
						</h1>
						<ul className="list-inline list-px-2">
							<li className="list-inline-item">
								<i className="bi-building me-1" />
								<span>Pixeel Ltd.</span>
							</li>
							<li className="list-inline-item">
								<i className="bi-geo-alt me-1" />
								<a href="user-profile-my-profile.html#">London,</a>
								<a href="user-profile-my-profile.html#">UK</a>
							</li>
							<li className="list-inline-item">
								<i className="bi-calendar-week me-1" />
								<span>Joined March 2013</span>
							</li>
						</ul>
					</div>
					<NavTab 
						withPageHeader
						id="profileTab"
						options={NAV_TAB_OPTIONS}
						handleTabClick={setActiveSection}
					/>
					<br />
					<br />
					<br />
					{(activeSection === SUPPORTED_SECTIONS.ACCOUNT) && (
						<div className="row justify-content-lg-center">
							<Account />
						</div>
					)}

					{(activeSection === SUPPORTED_SECTIONS.TEAMS) && (
						<Teams />
					)}

					{(activeSection === SUPPORTED_SECTIONS.JOBS) && (
						<Jobs />
					)}

					{(activeSection === SUPPORTED_SECTIONS.ACCESS) && (
						<Access />
					)}
					
					{(activeSection === SUPPORTED_SECTIONS.FILES) && (
						<Files />
					)}

					{(activeSection === SUPPORTED_SECTIONS.PAYROLL) && (
						<Payroll />
					)}
				</div>
			</div>
		</Layout>
	);
};

export default withPrivateRouter(WorkforceInfo);
