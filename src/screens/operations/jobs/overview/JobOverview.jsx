import React from 'react';
import { useNavigate } from 'react-router-dom';

import api from '@api';
import {
	SUPPORTED_JOB_SECTIONS,
	SUPPORTED_JOB_STATUSES,
	SUPPORTED_JOB_PRIORITIES,
} from '@constants/jobs';
import mockJob from '@mocks/jobs';
import formatMessage from '@utils/formatMessage';
import { SUPPORTED_PHONE_TYPES } from '@constants/calls';
import { Table, Modal, Layout, Card, Counter } from '@components';

import {
	hasPrimary,
	parseOptions,
	NAV_TAB_OPTIONS,
	DEFAULT_JOBS_TABLE_HEADER,
} from './JobOverview.controller';
import JobMetrics from './JobMetrics';			

const JobOverview = () => {
	const navigate = useNavigate();

	const [ loading, setLoading ] = React.useState(false);
	const [ jobOptions, setJobOptions ] = React.useState([]);
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_JOB_SECTIONS.ALL);

	const fetchJobs = () => {
		setJobOptions([]);
		setLoading(true);
		setJobOptions(mockJob.list);
		setLoading(false);
	}

	React.useEffect(() => fetchJobs(), []);

	React.useEffect(() => fetchJobs(activeSection), [ activeSection ]);

	const onSectionClick = (e, currentSection = '') => {
		if (currentSection !== activeSection) {
			setActiveSection(currentSection);
		}
	}

	const onViewJobClick = (e, { id }) => {
		e.preventDefault();
		return navigate(`/operations/jobs/${id}`);
	}

	const onAddJobClick = (e) => {
		e.preventDefault();
		return navigate('/operations/jobs/create');
	}

	const renderAddJob = (
		<button 
			type="button" 
			onClick={onAddJobClick}
			className="btn btn-sm btn-outline-primary">
			<i className="bi-plus" />
			Create new job
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<JobMetrics 
				options={[]}
			/>
			<Table
				withFilter
				fullHeight
				height="63vh"
				loading={loading}
				cta={renderAddJob}
				elementsPerPage={100}
				onRowClick={onViewJobClick}
				data={parseOptions(jobOptions)}
				searchPlaceholder="Search jobs"
				headers={DEFAULT_JOBS_TABLE_HEADER}
			/>
		</div>
	);
};

export default JobOverview;
