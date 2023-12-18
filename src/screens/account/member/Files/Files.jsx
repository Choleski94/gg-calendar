import React from 'react';
import Link from 'next/link';

import api from '@api';
import Modal from '@components/Modal';
import formatMessage from '@utils/formatMessage';

export const FilesCTA = ({ onClick }) => (
	<div className="btn-group" role="group">
		<button type="button" className="btn btn-primary" onClick={onClick}>
			<i className="bi-cloud-arrow-up-fill me-1" /> Upload
		</button>
	</div>
);

const Files = ({ id = '' }) => {
	const [ showModal, setShowModal ] = React.useState(false);

	return (
		<ul className="list-group">
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-docs-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								WordPress contract terms
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 50 min ago</li>
							<li className="list-inline-item">25kb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown1"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/pdf-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Dashboard layout flow
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 1 hour ago</li>
							<li className="list-inline-item">1mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown2"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-slides-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								WordPress theme presentation
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 5 hours ago</li>
							<li className="list-inline-item">3mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown3"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown3"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-docs-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Untitled
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 5 hours ago</li>
							<li className="list-inline-item">1mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown4"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown4"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-sheets-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Hot startup 2019 - Report
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 3 weeks ago</li>
							<li className="list-inline-item">3mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown5"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown5"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-docs-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Marketing strategy
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 2 weeks ago</li>
							<li className="list-inline-item">2mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown6"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown6"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/components/placeholder-img-format.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Past-experience.jpg
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 1 month ago</li>
							<li className="list-inline-item">15mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown7"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown7"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/components/placeholder-img-format.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Front_2018.jpg
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 1 month ago</li>
							<li className="list-inline-item">9mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown8"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown8"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/pdf-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Business opportunities
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 2 months ago</li>
							<li className="list-inline-item">4mb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown9"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown9"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-sheets-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Untitled
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 3 months ago</li>
							<li className="list-inline-item">3kb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown10"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown10"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/components/placeholder-img-format.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								front-2.9.x.jpg
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 2 months ago</li>
							<li className="list-inline-item">73kb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown11"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown11"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-docs-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								Untitled
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 4 months ago</li>
							<li className="list-inline-item">25kb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown12"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown12"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
				{/* End Row */}
			</li>
			{/* End Item */}
			{/* Item */}
			<li className="list-group-item">
				<div className="row align-items-center">
					<div className="col-auto">
						<img
							className="avatar avatar-xs avatar-4x3"
							src="/assets/svg/brands/google-slides-icon.svg"
							alt="Image Description"
						/>
					</div>
					<div className="col">
						<h5 className="mb-0">
							<a className="text-dark" href="#">
								How to improve coding process
							</a>
						</h5>
						<ul className="list-inline list-separator small text-body">
							<li className="list-inline-item">Updated 5 months ago</li>
							<li className="list-inline-item">5kb</li>
						</ul>
					</div>
					{/* End Col */}
					<div className="col-auto">
						{/* Dropdown */}
						<div className="dropdown">
							<button
								type="button"
								className="btn btn-white btn-sm"
								id="filesListDropdown13"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<span className="d-none d-sm-inline-block me-1">More</span>
								<i className="bi-chevron-down" />
							</button>
							<div
								className="dropdown-menu dropdown-menu-end"
								aria-labelledby="filesListDropdown13"
								style={{ minWidth: "13rem" }}
							>
								<span className="dropdown-header">Settings</span>
								<a className="dropdown-item" href="#">
									<i className="bi-share dropdown-item-icon" /> Share file
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-folder-plus dropdown-item-icon" /> Move to
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-star dropdown-item-icon" /> Add to stared
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-pencil dropdown-item-icon" /> Rename
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-download dropdown-item-icon" /> Download
								</a>
								<div className="dropdown-divider" />
								<a className="dropdown-item" href="#">
									<i className="bi-chat-left-dots dropdown-item-icon" /> Report
								</a>
								<a className="dropdown-item" href="#">
									<i className="bi-trash dropdown-item-icon" /> Delete
								</a>
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	);
};

export default Files;
