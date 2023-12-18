import React from 'react';

import api from '@api';
import mockFiles from '@mocks/files';
import Modal from '@components/Modal';
import formatMessage from '@utils/formatMessage';

export const FilesCTA = ({ onClick }) => (
	<div className="btn-group" role="group">
		<button type="button" className="btn btn-primary" onClick={onClick}>
			<i className="bi-cloud-arrow-up-fill me-1" /> Upload
		</button>
	</div>
);

const renderMoreOption = (id = '') => {
	const [ showDropdown, setShowDropdown ] = React.useState(false);

	const onMoreBtnClick = (e) => {
		e.preventDefault();
		console.log('ID::', id);
	};

	return (
		<div className="dropdown">
			<button type="button" className="btn btn-white btn-sm" onClick={onMoreBtnClick}>
				<span className="d-none d-sm-inline-block me-1">
					More
				</span>
				<i className="bi-chevron-down" />
			</button>
			<div className="dropdown-menu dropdown-menu-end"
				style={{ minWidth: "13rem" }}
			>
				<span className="dropdown-header">Settings</span>
				<a className="dropdown-item" href="#">
					<i className="bi-share dropdown-item-icon" />
					&nbsp;
					Share file
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-folder-plus dropdown-item-icon" />
					&nbsp;
					Move to
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-star dropdown-item-icon" />
					&nbsp;
					Add to stared
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-pencil dropdown-item-icon" />
					&nbsp;
					Rename
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-download dropdown-item-icon" />
					&nbsp;
					Download
				</a>
				<div className="dropdown-divider" />
				<a className="dropdown-item" href="#">
					<i className="bi-chat-left-dots dropdown-item-icon" />
					&nbsp;
					Report
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-trash dropdown-item-icon" />
					&nbsp;
					Delete
				</a>
			</div>
		</div>
	);
}

const Files = ({ id = '' }) => {
	const [ options, setOptions ] = React.useState([]);
	const [ loading, setLoading ] = React.useState(false);

	const fetchFiles = () => {
		setLoading(true);
		setOptions(mockFiles.list);
		setLoading(false);
	}

	React.useEffect(() => {
		fetchFiles();
	}, []);

	return(
		<ul className="list-group">
			{options.map((payload) => (
				<li key={payload?.id} className="list-group-item">
					<div className="row align-items-center">
						<div className="col-auto">
							<img
								className="avatar avatar-xs avatar-4x3"
								src={payload?.img_src} alt="Image Description"
							/>
						</div>
						<div className="col">
							<h5 className="mb-0">
								<a className="text-dark" href="#">
									{payload?.name}
								</a>
							</h5>
							<ul className="list-inline list-separator small text-body">
								<li className="list-inline-item">
									{payload?.last_updated}
								</li>
								<li className="list-inline-item">
									{payload?.size}
								</li>
							</ul>
						</div>
						<div className="col-auto">
							{renderMoreOption(payload?.id)}
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Files;
