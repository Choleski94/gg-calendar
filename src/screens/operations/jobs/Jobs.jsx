import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import JobInfo from './info';
import JobControl from './JobControl';

const JobsScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setJobId = (id = '') => (
		navigate(`/operations/jobs/${id}`)
	);

	const jobId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		jobId && jobId.length ? (
			<JobInfo 
				id={jobId} 
			/>
		) : (
			<JobControl 
				setJobId={setJobId} 
			/>
		)
	);
};

export default withPrivateRouter(JobsScreen);
