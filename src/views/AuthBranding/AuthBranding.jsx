import React from 'react';

import formatMessage from '@utils/formatMessage';

const AuthBranding = ({ browser, version, OS, language }) => (
	<div style={{ maxWidth: "23rem" }}>
		<div className="text-center mb-10">
			<img
				className="img-fluid"
				alt="Image Description"
				src="assets/img/logo.svg"
				style={{ width: "12rem" }}
			/>
		</div>
		<div className="mb-5">
			<h2 className="display-5">
				{formatMessage('page.service.header.text')}
			</h2>
		</div>
		<ul className="list-checked list-checked-lg list-checked-primary list-py-2">
			<li className="list-checked-item">
				<span className="d-block fw-semibold mb-1">
					{formatMessage('page.feature.one.header.text')}
				</span>
				{formatMessage('page.feature.one.description.text')}
			</li>
			<li className="list-checked-item">
				<span className="d-block fw-semibold mb-1">
					{formatMessage('page.feature.two.header.text')}
				</span>
				{formatMessage('page.feature.two.description.text')}
			</li>
		</ul>
		<div className="row justify-content-between mt-5 gx-3">
			<div className="col">
				<img
					className="img-fluid"
					src="assets/svg/brands/gitlab-gray.svg"
					alt="Logo"
				/>
			</div>
			<div className="col">
				<img
					className="img-fluid"
					src="assets/svg/brands/fitbit-gray.svg"
					alt="Logo"
				/>
			</div>
			<div className="col">
				<img
					className="img-fluid"
					src="assets/svg/brands/flow-xo-gray.svg"
					alt="Logo"
				/>
			</div>
			<div className="col">
				<img
					className="img-fluid"
					src="assets/svg/brands/layar-gray.svg"
					alt="Logo"
				/>
			</div>
		</div>
	</div>
);

export default AuthBranding;

