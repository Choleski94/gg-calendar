import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

const parseTech = (payload = {}) => {
	let res = 'N/A';

	if (payload?.jobs && payload?.jobs.length) {
		const allTechs = payload.jobs[0].techs;
		if (allTechs && allTechs.length) {
			const techNames = allTechs.map(({ firstName, lastName }) => `${firstName} ${lastName}`)
			res = techNames.slice(0, 3).join(', ');
		}
	}

	return res;
}

const ScheduleSection = () => (
	<div className="d-grid gap-3 gap-lg-5">
		<div className="row">
			<div className="col-lg-12">
				<div className="card mb-3 mb-lg-5">
					<div className="card-header">
						<h4 className="card-header-title">
							Schedule information
						</h4>
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-sm-6">
								<div className="mb-4">
									<label
										htmlFor="projectDeadlineNewProjectLabel"
										className="form-label"
									>
										Start date
									</label>
									<div
										id="projectDeadlineNewProject"
										className="input-group input-group-merge"
									>
										<div className="input-group-prepend input-group-text">
											<i className="bi-calendar-week" />
										</div>
										<input
											type="text"
											className="form-control"
											id="projectDeadlineNewProjectLabel"
											placeholder="Select start date"
										/>
									</div>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="mb-4">
									<label
										htmlFor="projectDeadlineNewProjectLabel"
										className="form-label"
									>
										End date
									</label>
									<div
										id="projectDeadlineNewProject"
										className="input-group input-group-merge"
									>
										<div className="input-group-prepend input-group-text">
											<i className="bi-calendar-week" />
										</div>
										<input
											type="text"
											className="form-control"
											id="projectDeadlineNewProjectLabel"
											placeholder="Select end date"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ScheduleSection;
