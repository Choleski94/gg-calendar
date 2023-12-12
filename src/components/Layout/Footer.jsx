import React from 'react';
import { Link } from 'react-router-dom';

import formatMessage from '@utils/formatMessage';

const getYear = () => {
	const dt = new Date();
	return dt.getFullYear(); 
}

const FooterBody = () => (
	<div className="row justify-content-between align-items-center">
		<div className="col"> 
			<p className="fs-6 mb-0">
				&copy;
				<span className="d-none d-sm-inline-block">
					{getYear()} Tigado.
				</span>
				&nbsp;
				All Rights Reserved
			</p> 
		</div>
		<div className="col-auto">
			<div className="d-flex justify-content-end">
				<ul className="list-inline list-separator">
					<li className="list-inline-item">
						<Link className="list-separator-link" to="https://www.tigado.com/terms" target="_blank" rel="noopener noreferrer">
							Terms &amp; Conditions
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="list-separator-link" to="https://www.tigado.com/privacy" target="_blank" rel="noopener noreferrer">
							Privacy Policy
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="list-separator-link" to="https://www.tigado.com/disclaimer" target="_blank" rel="noopener noreferrer">
							Disclaimer
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</div>
);

const Footer = ({ withContainer = false }) => (
	<div className="footer">
		{withContainer ? (
			<div className="container">
				<FooterBody />
			</div>
		) : (
			<FooterBody />
		)}
	</div>
);

export default Footer;
