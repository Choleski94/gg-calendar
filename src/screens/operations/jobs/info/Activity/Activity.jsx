import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';

export const ActivityCTA = ({ onClick }) => (
	<div className="row align-items-center g-0">
		<div className="col-auto">Last update:</div>
		<div className="col flatpickr-custom-position-fix-sm-down">
			<div
				id="projectDeadlineFlatpickr"
				className="js-flatpickr flatpickr-custom flatpickr-custom-borderless input-group input-group-sm"
			>
				<input
					type="text"
					className="flatpickr-custom-form-control form-control flatpickr-input"
					placeholder="Select dates"
					data-input="true"
					readOnly
					defaultValue="15/06/2023"
				/>
			</div>
		</div>
	</div>
);

const Activity = ({ id = '' }) => (
	<>
		<ul className="step">
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<small className="step-divider">Today</small>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<div className="step-avatar">
						<img
							className="step-avatar"
							src="/assets/img/160x160/img9.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="step-content">
						<h5 className="mb-1">Iana Robinson</h5>
						<p className="fs-5 mb-1">
							Uploaded weekly reports to the task{" "}
							<a className="text-uppercase" href="#">
								<i className="bi-journal-bookmark-fill" /> Fd-7
							</a>
						</p>
						<ul className="list-group list-group-sm">
							{/* List Item */}
							<li className="list-group-item list-group-item-light">
								<div className="row gx-1">
									<div className="col-sm-4">
										{/* Media */}
										<div className="d-flex">
											<div className="flex-shrink-0">
												<img
													className="avatar avatar-xs"
													src="/assets/svg/brands/excel-icon.svg"
													alt="Image Description"
												/>
											</div>
											<div className="flex-grow-1 text-truncate ms-2">
												<span
													className="d-block fs-6 text-dark text-truncate"
													title="weekly-reports.xls"
												>
													weekly-reports.xls
												</span>
												<span className="d-block small text-muted">
													12kb
												</span>
											</div>
										</div>
										{/* End Media */}
									</div>
									{/* End Col */}
									<div className="col-sm-4">
										{/* Media */}
										<div className="d-flex">
											<div className="flex-shrink-0">
												<img
													className="avatar avatar-xs"
													src="/assets/svg/brands/word-icon.svg"
													alt="Image Description"
												/>
											</div>
											<div className="flex-grow-1 text-truncate ms-2">
												<span
													className="d-block fs-6 text-dark text-truncate"
													title="weekly-reports.xls"
												>
													weekly-reports.xls
												</span>
												<span className="d-block small text-muted">
													4kb
												</span>
											</div>
										</div>
										{/* End Media */}
									</div>
									{/* End Col */}
									<div className="col-sm-4">
										{/* Media */}
										<div className="d-flex">
											<div className="flex-shrink-0">
												<img
													className="avatar avatar-xs"
													src="/assets/svg/brands/word-icon.svg"
													alt="Image Description"
												/>
											</div>
											<div className="flex-grow-1 text-truncate ms-2">
												<span
													className="d-block fs-6 text-dark text-truncate"
													title="monthly-reports.xls"
												>
													monthly-reports.xls
												</span>
												<span className="d-block small text-muted">
													8kb
												</span>
											</div>
										</div>
										{/* End Media */}
									</div>
									{/* End Col */}
								</div>
								{/* End Row */}
							</li>
							{/* End List Item */}
						</ul>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<span className="step-icon step-icon-soft-dark">B</span>
					<div className="step-content">
						<h5 className="mb-1">Bob Dean</h5>
						<p className="fs-5 mb-1">
							Marked project status as{" "}
							<span className="badge bg-soft-primary text-primary rounded-pill">
								<span className="legend-indicator bg-primary" />
								"In progress"
							</span>
						</p>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<small className="step-divider">Yesterday</small>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<div className="step-avatar">
						<img
							className="step-avatar-img"
							src="/assets/img/160x160/img3.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="step-content">
						<h5 className="h5 mb-1">Crane</h5>
						<p className="fs-5 mb-1">
							Added 5 card to <a href="#">Payments</a>
						</p>
						<ul className="list-group list-group-sm">
							<li className="list-group-item list-group-item-light">
								<div className="row gx-1">
									<div className="col">
										<img
											className="img-fluid rounded"
											src="/assets/svg/components/card-1.svg"
											alt="Image Description"
										/>
									</div>
									<div className="col">
										<img
											className="img-fluid rounded"
											src="/assets/svg/components/card-2.svg"
											alt="Image Description"
										/>
									</div>
									<div className="col">
										<img
											className="img-fluid rounded"
											src="/assets/svg/components/card-3.svg"
											alt="Image Description"
										/>
									</div>
									<div className="col-auto align-self-center">
										<div className="text-center">
											<a href="#">+2</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<span className="step-icon step-icon-soft-info">D</span>
					<div className="step-content">
						<h5 className="mb-1">David Lidell</h5>
						<p className="fs-5 mb-1">
							Added a new member to Front Dashboard
						</p>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<div className="step-avatar">
						<img
							className="step-avatar-img"
							src="/assets/img/160x160/img7.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="step-content">
						<h5 className="mb-1">Rachel King</h5>
						<p className="fs-5 mb-1">
							Earned a "Top endorsed"{" "}
							<i className="bi-patch-check-fill text-primary" /> badge
						</p>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<small className="step-divider">Last week</small>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<div className="step-avatar">
						<img
							className="step-avatar-img"
							src="/assets/img/160x160/img6.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="step-content">
						<h5 className="mb-1">
							<a className="text-dark" href="#">
								Mark Williams
							</a>
						</h5>
						<p className="fs-5">Attached two files.</p>
						<ul className="list-group list-group-sm">
							{/* List Item */}
							<li className="list-group-item list-group-item-light">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<i className="bi-paperclip" />
									</div>
									<div className="flex-grow-1 text-truncate ms-2">
										<span className="d-block text-dark text-truncate">
											Requirements.figma
										</span>
										<span className="d-block small">8mb</span>
									</div>
								</div>
							</li>
							{/* End List Item */}
							{/* List Item */}
							<li className="list-group-item list-group-item-light">
								<div className="d-flex">
									<div className="flex-shrink-0">
										<i className="bi-paperclip" />
									</div>
									<div className="flex-grow-1 text-truncate ms-2">
										<span className="d-block text-dark text-truncate">
											Requirements.sketch
										</span>
										<span className="d-block small">4mb</span>
									</div>
								</div>
							</li>
							{/* End List Item */}
						</ul>
					</div>
				</div>
			</li>
			{/* End Step Item */}
			{/* Step Item */}
			<li className="step-item">
				<div className="step-content-wrapper">
					<span className="step-icon step-icon-soft-primary">C</span>
					<div className="step-content">
						<h5 className="mb-1">
							<a className="text-dark" href="#">
								Costa Quinn
							</a>
						</h5>
						<p className="fs-5">
							Marked project status as{" "}
							<span className="badge bg-soft-primary text-primary rounded-pill">
								<span className="legend-indicator bg-primary" />
								"In progress"
							</span>
						</p>
					</div>
				</div>
			</li>
			{/* End Step Item */}
		</ul>
		<div className="d-grid">
			<a className="btn btn-white">
				<i className="bi-arrow-clockwise me-1" /> Load more activities
			</a>
		</div>
	</>
);

export default Activity;
