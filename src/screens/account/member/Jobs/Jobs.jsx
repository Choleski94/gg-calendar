import React from 'react';

import mockJob from '@mocks/jobs';
import ViewJobList from '@views/ViewJobList';
import formatMessage from '@utils/formatMessage';

const Jobs = ({ userId = '' }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchJobByUserId = (userId) => {
		setLoading(true);
		setOptions(mockJob.list);
		setLoading(false);
	};

	// TODO: get current account userId
	React.useEffect(() => {
		fetchJobByUserId(userId);
	}, []);

	return (
		<div className="col-lg-12">
			{(options && options.length) ? (
				<ViewJobList options={options} wrapperClassName="card card-centered mb-3 mb-lg-5" />
			) : (
				<div className="card card-centered mb-3 mb-lg-5">
					<div className="card-body card-body-height card-body-centered pt-5 pb-5">
						<img
							alt="Image Description"
							data-hs-theme-appearance="default"
							className="avatar avatar-xxl mb-3"
							src="/assets/svg/illustrations/oc-error.svg"
						/>
						<p className="card-text">No data to show</p>
						<a className="btn btn-white btn-sm" href="projects.html">
							Start your Projects
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Jobs;
