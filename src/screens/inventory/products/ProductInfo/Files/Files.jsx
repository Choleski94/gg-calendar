import React from 'react';
import { Link } from 'react-router-dom';

import api from '@api';
import { Modal } from '@components';
import mockFiles from '@mocks/files';
import { useClickOutside } from '@utils/hooks';
import formatMessage from '@utils/formatMessage';

import { FileMenuDropdown } from './Files.controller';

export const FilesCTA = ({ onClick }) => (
	<div className="btn-group" role="group">
		<button type="button" className="btn btn-primary" onClick={onClick}>
			<i className="bi-cloud-arrow-up-fill me-1" /> Upload
		</button>
	</div>
);

const Files = ({ id = '' }) => {
	const [ options, setOptions ] = React.useState([])
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);

	const fetchFiles = () => {
		setOptions([]);
		setLoading(true);
		setOptions(mockFiles.list);
		setLoading(false);
	}

	React.useEffect(() => fetchFiles(), []);

	const onFileClick = (e, fileId = '') => {
		console.log('File id:::', fileId);
	}

	return (
		<ul className="list-group">
			{options.map((payload) => (
				<li key={payload?.id} className="list-group-item" onClick={(e) => onFileClick(e, payload.id)}>
					<div className="row align-items-center">
						<div className="col-auto">
							<img
								className="avatar avatar-xs avatar-4x3"
								alt="Image Description"
								src={payload?.img_src}
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
							<FileMenuDropdown id={payload.id} />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Files;
