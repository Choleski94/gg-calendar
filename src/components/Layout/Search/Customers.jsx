import React from 'react';
import { useNavigate } from 'react-router-dom';

import formatMessage from '@utils/formatMessage';

const Customers = () => {
	const navigate = useNavigate();

	return (
		<>
			<span className="dropdown-header">
				Customers
			</span>
			<a className="dropdown-item" href="#">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							className="avatar avatar-xs avatar-circle"
							src="/assets/img/160x160/img10.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="flex-grow-1 text-truncate ms-2">
						<span>
							Amanda Harvey{" "}
							<i
								className="tio-verified text-primary"
								data-toggle="tooltip"
								data-placement="top"
								title="Top endorsed"
							/>
						</span>
					</div>
				</div>
			</a>
			<a className="dropdown-item" href="#">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img
							className="avatar avatar-xs avatar-circle"
							src="/assets/img/160x160/img3.jpg"
							alt="Image Description"
						/>
					</div>
					<div className="flex-grow-1 text-truncate ms-2">
						<span>David Harrison</span>
					</div>
				</div>
			</a>
			<a className="dropdown-item" href="#">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<div className="avatar avatar-xs avatar-soft-info avatar-circle">
							<span className="avatar-initials">A</span>
						</div>
					</div>
					<div className="flex-grow-1 text-truncate ms-2">
						<span>Anne Richard</span>
					</div>
				</div>
			</a>
		</>
	);
}

export default Customers;
