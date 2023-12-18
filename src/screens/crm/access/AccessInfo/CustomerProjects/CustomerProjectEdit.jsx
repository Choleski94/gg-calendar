import React from 'react';

import api from '@api';
import { Modal } from '@components';
import formatMessage from '@utils/formatMessage';

export const CustomerProjectEditsCTA = () => {
	return (
		<a className="btn btn-primary" href="./users-add-user.html">
			<i className="bi bi-box-seam-fill me-1" /> Add equipments
		</a>
	);
};

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

const CustomerProjectEdit = ({ id: customerId = '' }) => {
	return (
		<div className="d-grid gap-3 gap-lg-5">
			<div className="row">
				<div className="col-lg-7">
					<div className="card mb-3 mb-lg-5">
						<div className="card-header">
							<h4 className="card-header-title">
								Project information
							</h4>
						</div>
						<div className="card-body">
							<div className="row">
								<div className="col-sm-6">
									<div className="mb-4">
										<label htmlFor="SKULabel" className="form-label">
											Brand
										</label>
										<input
											type="text"
											className="form-control"
											name="productName"
											id="productNameLabel"
											placeholder="Samsung, LG, etc."
											defaultValue="Samsung"
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="mb-4">
										<label htmlFor="weightLabel" className="form-label">
											Type
										</label>
										<div className="tom-select-custom">
											<select
												autoComplete="off"
												className="js-select form-select"
											>
												<option value>Select type...</option>
												<option value={4}>Fridge</option>
												<option value={1}>Front load dryer</option>
												<option value={3}>Top load dryer</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<div className="mb-4">
										<label htmlFor="SKULabel" className="form-label">
											Model
										</label>
										<input
											type="text"
											className="form-control"
											name="SKU"
											id="SKULabel"
											placeholder="eg. 348121032"
											aria-label="eg. 348121032"
											defaultValue="WF46BG6500AVUS"
										/>
									</div>
								</div>
								<div className="col-sm-6">
									<div className="mb-4">
										<label htmlFor="weightLabel" className="form-label">
											Serial
										</label>
										<input
											type="text"
											className="form-control"
											name="SKU"
											id="SKULabel"
											placeholder="eg. 348121032"
											aria-label="eg. 348121032"
											defaultValue={124617209}
										/>
									</div>
									{/* End Form */}
								</div>
								{/* End Col */}
							</div>
							{/* End Row */}
							{/* End Quill */}
						</div>
						{/* Body */}
					</div>
					{/* End Card */}
					{/* Card */}
					<div className="card mb-3 mb-lg-5">
						{/* Header */}
						<div className="card-header card-header-content-between">
							<h4 className="card-header-title">Media</h4>
							{/* Dropdown */}
							<div className="dropdown">
								<button
									type="button"
									className="btn btn-ghost-secondary btn-sm"
									id="mediaDropdown"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Add media from URL <i className="bi-chevron-down" />
								</button>
								<div className="dropdown-menu dropdown-menu-end mt-1">
									<a
										className="dropdown-item"
										data-bs-toggle="modal"
										data-bs-target="#addImageFromURLModal"
									>
										<i className="bi-link dropdown-item-icon" /> Add image from URL
									</a>
									<a
										className="dropdown-item"
										data-bs-toggle="modal"
										data-bs-target="#embedVideoModal"
									>
										<i className="bi-youtube dropdown-item-icon" /> Embed video
									</a>
								</div>
							</div>
							{/* End Dropdown */}
						</div>
						{/* End Header */}
						{/* Body */}
						<div className="card-body">
							{/* Gallery */}
							<div
								id="fancyboxGallery"
								className="js-fancybox row justify-content-sm-center gx-3"
							>
								<div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
									{/* Card */}
									<div className="card card-sm">
										<img
											className="card-img-top"
											src="https://www.canadianappliance.ca/img/xxlarge/samsung/washer/WF46BG6500AVUS_2.jpg"
											alt="Image Description"
										/>
										<div className="card-body">
											<div className="row col-divider text-center">
												<div className="col">
													<a
														className="text-body"
														href="./assets/img/725x1080/img1.jpg"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														data-fslightbox="gallery"
														aria-label="View"
														data-bs-original-title="View"
													>
														<i className="bi-eye" />
													</a>
												</div>
												{/* End Col */}
												<div className="col">
													<a
														className="text-danger"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														aria-label="Delete"
														data-bs-original-title="Delete"
													>
														<i className="bi-trash" />
													</a>
												</div>
												{/* End Col */}
											</div>
											{/* End Row */}
										</div>
										{/* End Col */}
									</div>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
									{/* Card */}
									<div className="card card-sm">
										<img
											className="card-img-top"
											src="https://www.canadianappliance.ca/img/xxlarge/samsung/washer/WF46BG6500AVUS_6.jpg"
											alt="Image Description"
										/>
										<div className="card-body">
											<div className="row col-divider text-center">
												<div className="col">
													<a
														className="text-body"
														href="./assets/img/1920x1080/img1.jpg"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														data-fslightbox="gallery"
														aria-label="View"
														data-bs-original-title="View"
													>
														<i className="bi-eye" />
													</a>
												</div>
												{/* End Col */}
												<div className="col">
													<a
														className="text-danger"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														aria-label="Delete"
														data-bs-original-title="Delete"
													>
														<i className="bi-trash" />
													</a>
												</div>
												{/* End Col */}
											</div>
											{/* End Row */}
										</div>
										{/* End Col */}
									</div>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
									{/* Card */}
									<div className="card card-sm">
										<img
											className="card-img-top"
											src="https://www.canadianappliance.ca/img/xxlarge/samsung/washer/WF46BG6500AVUS_4.jpg"
											alt="Image Description"
										/>
										<div className="card-body">
											<div className="row col-divider text-center">
												<div className="col">
													<a
														className="text-body"
														href="./assets/img/1920x1080/img2.jpg"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														data-fslightbox="gallery"
														aria-label="View"
														data-bs-original-title="View"
													>
														<i className="bi-eye" />
													</a>
												</div>
												{/* End Col */}
												<div className="col">
													<a
														className="text-danger"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														aria-label="Delete"
														data-bs-original-title="Delete"
													>
														<i className="bi-trash" />
													</a>
												</div>
												{/* End Col */}
											</div>
											{/* End Row */}
										</div>
										{/* End Col */}
									</div>
									{/* End Card */}
								</div>
								{/* End Col */}
								<div className="col-6 col-sm-4 col-md-3 mb-3 mb-lg-5">
									{/* Card */}
									<div className="card card-sm">
										<img
											className="card-img-top"
											src="https://www.canadianappliance.ca/img/xxlarge/samsung/washer/WF46BG6500AVUS_5.jpg"
											alt="Image Description"
										/>
										<div className="card-body">
											<div className="row col-divider text-center">
												<div className="col">
													<a
														className="text-body"
														href="./assets/img/1920x1080/img3.jpg"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														data-fslightbox="gallery"
														aria-label="View"
														data-bs-original-title="View"
													>
														<i className="bi-eye" />
													</a>
												</div>
												{/* End Col */}
												<div className="col">
													<a
														className="text-danger"
														data-bs-toggle="tooltip"
														data-bs-placement="top"
														aria-label="Delete"
														data-bs-original-title="Delete"
													>
														<i className="bi-trash" />
													</a>
												</div>
												{/* End Col */}
											</div>
											{/* End Row */}
										</div>
										{/* End Col */}
									</div>
									{/* End Card */}
								</div>
								{/* End Col */}
							</div>
							{/* End Gallery */}
							{/* Dropzone */}
							<div
								id="attachFilesNewProjectLabel"
								className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable"
							>
								<div className="dz-message">
									<img
										className="avatar avatar-xl avatar-4x3 mb-3"
										src="./assets/svg/illustrations/oc-browse.svg"
										alt="Image Description"
										data-hs-theme-appearance="default"
									/>
									<h5>Drag and drop your file here</h5>
									<p className="mb-2">or</p>
									<span className="btn btn-white btn-sm">Browse files</span>
								</div>
							</div>
						</div>
					</div>
					<div className="js-add-field card mb-3 mb-lg-5" />
				</div>
				<div className="col-lg-5">
					<div className="card d-print-none">
						<div className="card-header card-header-content-between">
							<h4 className="card-header-title">
								Notes history
							</h4>
							<a className="btn btn-ghost-secondary btn-sm" href="#">
								<i className="bi-plus me-1" />
								Add note
							</a>
						</div>
						<div className="card-body">
							<span className="h1 d-block mb-3">
								18 <span className="h4 text-body">Notes</span>
							</span>
							<div className="progress rounded-pill">
								<div
									className="progress-bar"
									role="progressbar"
									style={{ width: "76%" }}
									aria-valuenow={76}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
								<div
									className="progress-bar bg-warning"
									role="progressbar"
									style={{ width: "8%" }}
									aria-valuenow={8}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
								<div
									className="progress-bar bg-danger"
									role="progressbar"
									style={{ width: "2%" }}
									aria-valuenow={2}
									aria-valuemin={0}
									aria-valuemax={100}
								/>
							</div>
						</div>
						<hr className="my-0" />
						<div className="card-body">
							<ul
								className="nav nav-segment nav-fill"
								id="invoicesStatusTab"
								role="tablist"
							>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link active"
										id="paid-tab"
										data-bs-toggle="tab"
										href="#paid"
										role="tab"
										aria-controls="paid"
										aria-selected="true"
									>
										<span className="legend-indicator bg-primary" />
										Service (5)
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="pending-tab"
										data-bs-toggle="tab"
										href="#pending"
										role="tab"
										aria-controls="pending"
										aria-selected="false"
										tabIndex={-1}
									>
										<span className="legend-indicator bg-warning" />
										Parts (10)
									</a>
								</li>
								<li className="nav-item" role="presentation">
									<a
										className="nav-link"
										id="declined-tab"
										data-bs-toggle="tab"
										href="#declined"
										role="tab"
										aria-controls="declined"
										aria-selected="false"
										tabIndex={-1}
									>
										<span className="legend-indicator bg-danger" />
										Projects (3)
									</a>
								</li>
							</ul>
						</div>
						<hr className="my-0" />
						<div className="card-body card-body-height">
							<div className="tab-content" id="invoicesStatusTabContent">
								<div
									className="tab-pane fade show active"
									id="paid"
									role="tabpanel"
									aria-labelledby="paid-tab"
								>
									<ul className="list-group list-group-flush list-group-no-gutters">
										<li className="list-group-item">
											<div className="d-flex justify-content-between">
												<span className="h4 text-primary">
													First Visit
												</span>
												<span className="fs-5">
													25 May, 2020
												</span>
											</div>
											<div className="mb-3">
												<span className="fs-5">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
													Vestibulum sit amet posuere urna. Donec elementum a eros 
													sit amet rutrum. Cras arcu augue, scelerisque sagittis 
													porttitor id, consectetur a neque.
												</span>
												<h5 className="mt-2">
													T1. Marek
												</h5>
											</div>
											<div className="mb-3">
												<span className="fs-5">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
													Vestibulum sit amet posuere urna. Donec elementum a eros 
													sit amet rutrum. Cras arcu augue, scelerisque sagittis 
													porttitor id, consectetur a neque.
												</span>
												<h5 className="mt-2">
													T3. Duncan
												</h5>
											</div>
										</li>
										<li className="list-group-item">
											<div className="d-flex justify-content-between">
												<span className="h4 text-primary">
													Second Visit
												</span>
												<span className="fs-5">
													25 May, 2020
												</span>
											</div>
											<div className="mb-3">
												<span className="fs-5">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
													Vestibulum sit amet posuere urna. Donec elementum a eros 
													sit amet rutrum. Cras arcu augue, scelerisque sagittis 
													porttitor id, consectetur a neque.
												</span>
												<h5 className="mt-2">
													T1. Marek
												</h5>
											</div>
											<div className="mb-3">
												<span className="fs-5">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
													Vestibulum sit amet posuere urna. Donec elementum a eros 
													sit amet rutrum. Cras arcu augue, scelerisque sagittis 
													porttitor id, consectetur a neque.
												</span>
												<h5 className="mt-2">
													T3. Duncan
												</h5>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<a className="card-footer text-center" href="#">
							View all notes <i className="bi-chevron-right" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerProjectEdit;
