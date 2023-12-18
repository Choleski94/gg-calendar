import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import mockJobs from '@mocks/jobs';
import formatMessage from '@utils/formatMessage';
import { Modal, Card, NavPill, Layout, Counter, Breadcrumb, Forms, GetSupport } from '@components';

import Tags from './Tags';
import Media from './Media';
import Files from './Files';
import Notes from './Notes';
import Orders from './Orders';
import Details from './Details';
import Pricing from './Pricing';
import Variants from './Variants';
import Invoices from './Invoices';
import Projects from './Projects';
import Activity from './Activity';
import Suppliers from './Suppliers';
import Warehouse from './Warehouse';
// import Scheduling from './Scheduling';
import Specifications from './Specifications';

const JOBS_INFO_BREADCRUMB_OPTIONS = [
	{
		path: '/inventory',
		value: 'Inventory'
	},
	{
		path: '/inventory/products',
		value: 'Products'
	},
	{
		path: '/inventory/products/0392020039',
		value: 'Bosch 0392020039 Electric Water Pump'
	},
];

const SUPPORTED_SECTIONS = {
	NOTES: 'NOTES',
	RELATED: 'RELATED',
	VARIANT: 'VARIANT',
	ACTIVITY: 'ACTIVITY',
	WAREHOUSE: 'WAREHOUSE',
};

const NAV_TAB_OPTIONS = [
	// {
	// 	key: SUPPORTED_SECTIONS.VARIANT,
	// 	value: 'Variant',
	// },
	{
		key: SUPPORTED_SECTIONS.RELATED,
		value: 'Associated Models',
	},
	{
		key: SUPPORTED_SECTIONS.WAREHOUSE,
		value: 'Warehouse',
	},
	{
		key: SUPPORTED_SECTIONS.NOTES,
		value: 'Notes',
	},
	{
		key: SUPPORTED_SECTIONS.ACTIVITY,
		value: 'Activity Log',
	},
];


const SUPPORTED_MODAL_VIEWS = {
	INFO: 'INFO',
	SERVICE_LOCATION: 'SERVICE_LOCATION',
	CONTACT_LOCATION: 'CONTACT_LOCATION',
};

const DEFAULT_CTA_STATES = Object.keys(SUPPORTED_SECTIONS).reduce((agg, ctaKey) => (
	Object.assign(agg, { [ctaKey]: false })
), {});

const ProductInfo = ({ jobId = '' }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ ctas, setCtas ] = React.useState(DEFAULT_CTA_STATES);
	const [ modalSection, setModalSection ] = React.useState('');

	const fetchJob = (id) => {
		// TODO
		setLoading(true);
		setData(mockJobs.get);
		setLoading(false);
	};

	React.useEffect(() => {
		fetchJob(jobId);
	}, []);

	React.useEffect(() => {
		fetchJob(jobId);
	}, [ jobId ]);

	const onSectionClick = (e, currentSection = '') => {
		e.preventDefault();
		if (currentSection !== modalSection) {
			setModalSection(currentSection);
		}
	};

	const toggleCta = (currentCta = '') => setCtas({
		...ctas,
		[currentCta]: !ctas[currentCta]
	});

	const onCtaClick = (e, currentCta = '') => {
		e.preventDefault();
		toggleCta(currentCta);
	};

	// Modals
	const toggleModalSection = () => setModalSection('');

	const onModalViewClick = (e, currentModalView = '') => {
		e.preventDefault();

		if (currentModalView !== modalSection) {
			setModalSection(currentModalView);
		}
	};

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="row align-items-end">
					<div className="col-lg mb-3 mb-lg-0 mb-4">
						<Breadcrumb options={JOBS_INFO_BREADCRUMB_OPTIONS} />
						<Layout.Title>
							Bosch 0392020039 Electric Water Pump
							&nbsp;
							<small className="badge bg-soft-success text-success">
								New
							</small>
						</Layout.Title>
						<div className="mt-2">
							<a className="text-body me-3">
								<i className="bi-clipboard me-1" /> Duplicate
							</a>
							<a className="text-body">
								<i className="bi-eye me-1" /> Preview
							</a>
						</div>
					</div>
					<div className="col-lg-auto">
						<GetSupport />
						<NavPill 
							id="accountTab" 
							options={NAV_TAB_OPTIONS}
							handleTabClick={setModalSection}
						/>
					</div>
				</div>
			</Layout.StickyHeader>

			<div className="row mt-13">
				<div className="col-9 mb-4 mt-5">
					<div className="row">
						<div className="col-12 mb-4">
							<Details id={jobId} options={data?.contacts} />
						</div>
						<div className="col-12 mb-4">
							<Variants
								hasActiveCta={ctas.VARIANT} 
								toggleCta={() => toggleCta(SUPPORTED_SECTIONS.VARIANT)} 
							/>
						</div>
						<div className="col-12 mb-4">
							<Suppliers id={jobId} options={data?.contacts} />
						</div>
					</div>
				</div>
				<div className="col-3 mb-4 mt-5">
					<div className="row">
						<div className="col-12 mb-4">
							<div className="row">
								<div className="col-4">
									<div className="card card-hover-shadow h-100">
										<div className="card-body">
											<h6 className="card-subtitle mb-2">
												Average price
											</h6>
											<div className="row align-items-center gx-2">
												<div className="col">
													<span className="display-5 text-dark">
														$150.00
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card card-hover-shadow h-100">
										<div className="card-body">
											<h6 className="card-subtitle mb-2">
												Average Cost
											</h6>
											<div className="row align-items-center gx-2">
												<div className="col">
													<span className="display-5 text-dark">
														$50.00
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="card card-hover-shadow h-100">
										<div className="card-body">
											<h6 className="card-subtitle mb-2">
												Average Volume
											</h6>
											<div className="row align-items-center gx-2">
												<div className="col">
													<span className="display-5 text-dark">1200</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 mb-4">
							<Tags id={jobId} options={data?.contacts} />
						</div>
						{/*
						<div className="col-12 mb-4">
							<Pricing id={jobId} options={data?.contacts} />
						</div>
						*/}
						<div className="col-12 mb-4">
							<Media />
						</div>
						<div className="col-12 mb-4">
							<Specifications id={jobId} options={data?.contacts} />
						</div>
					</div>
				</div>
			</div>
			{modalSection === SUPPORTED_SECTIONS.RELATED && (
				<Modal onCloseRequest={toggleModalSection} size="lg">
					<Projects id={jobId} options={data?.contacts} />
				</Modal>
			)}

			{modalSection === SUPPORTED_SECTIONS.WAREHOUSE && (
				<Modal onCloseRequest={toggleModalSection} size="xl">
					<Warehouse id={jobId} options={data?.contacts} />
				</Modal>
			)}

			{modalSection === SUPPORTED_SECTIONS.NOTES && (
				<Modal onCloseRequest={toggleModalSection} size="xl">
					<Notes 
						hasActiveCta={ctas.NOTES} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.NOTES)} 
					/>
				</Modal>
			)}

			{modalSection === SUPPORTED_SECTIONS.ACTIVITY && (
				<Modal onCloseRequest={toggleModalSection} size="lg">
					<Activity
						hasActiveCta={ctas.ACTIVITY} 
						toggleCta={() => toggleCta(SUPPORTED_SECTIONS.ACTIVITY)} 
					/>
				</Modal>
			)}
		</Layout>
	);
};

export default ProductInfo;
