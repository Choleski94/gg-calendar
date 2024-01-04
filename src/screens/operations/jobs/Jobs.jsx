import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import JobEdit from './edit';
import JobControl from './control';

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
			<JobEdit 
				jobId={jobId} 
			/>
		) : (
			<JobControl 
				setJobId={setJobId} 
			/>
		)
	);
};

export default withPrivateRouter(JobsScreen);
