import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { Modal, Card } from '@components';
import formatMessage from '@utils/formatMessage';

// import MediaEdit from './MediaEdit';

const Media = ({ id: customerId = '' }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	const toggleModal = () => setShowModal(!showModal);


	const onEditMediaClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	}

	return (
		<>
			<Card>
				<Card.Header>
					<Card.Title>
						Media
					</Card.Title>
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
				</Card.Header>
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
									src="/assets/img/400x400/img7.jpg"
									alt="Image Description"
								/>
								<div className="card-body">
									<div className="row col-divider text-center">
										<div className="col">
											<a
												className="text-body"
												href="/assets/img/725x1080/img1.jpg"
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
									src="/assets/img/400x400/img8.jpg"
									alt="Image Description"
								/>
								<div className="card-body">
									<div className="row col-divider text-center">
										<div className="col">
											<a
												className="text-body"
												href="/assets/img/1920x1080/img1.jpg"
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
									src="/assets/img/400x400/img9.jpg"
									alt="Image Description"
								/>
								<div className="card-body">
									<div className="row col-divider text-center">
										<div className="col">
											<a
												className="text-body"
												href="/assets/img/1920x1080/img2.jpg"
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
									src="/assets/img/400x400/img10.jpg"
									alt="Image Description"
								/>
								<div className="card-body">
									<div className="row col-divider text-center">
										<div className="col">
											<a
												className="text-body"
												href="/assets/img/1920x1080/img3.jpg"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												data-fslightbox="gallery"
												aria-label="View"
												data-bs-original-title="View"
											>
												<i className="bi-eye" />
											</a>
										</div>
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
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable">
						<div className="dz-message">
							<img
								className="avatar avatar-xl avatar-4x3 mb-3"
								src="/assets/svg/illustrations/oc-browse.svg"
								alt="Image Description"
								data-hs-theme-appearance="default"
							/>
							<h5>Drag and drop your file here</h5>
							<p className="mb-2">or</p>
							<span className="btn btn-white btn-sm">Browse files</span>
						</div>
					</div>
				</div>
			</Card>
			{showModal && (
				<Modal onCloseRequest={toggleModal} title="Edit servie location" size="md" withFooter>
					<MediaEdit />
				</Modal>
			)}
		</>
	);
};

export default Media;
