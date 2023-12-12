import React from 'react';

import formatMessage from '@utils/formatMessage';

const BillingNotes = () => {
	return (
		<td className="align-top">
			<div className="mb-3">
				<div className="col-md-8 col-lg-8">
					<ul className="fs-6">
						<li>
							<small>
								Garantie d'un an sur les pièces installées et achetées de
								nous, et la main-d'œuvre associée.
							</small>
						</li>
						<li>
							<small>
								Garantie de trois mois sur la main-d'œuvre pour toutes les
								réparations sans pièces installées.
							</small>
						</li>
						<li>
							<small>
								Garantie de trois mois sur les réparations du système scellé.
							</small>
						</li>
						<li>
							<small>
								Usage commercial, garantie de trois mois sur les pièces
								installées et achetées de nous, et la main-d'œuvre associée.
							</small>
						</li>
						<li>
							<small>
								Les dépôts sur les pièces commander ne sont pas remboursables.
							</small>
						</li>
					</ul>
					<ul className="fs-6">
						<li>
							<small>
								One year guarantee on parts installed and bought from us, and
								related labour.
							</small>
						</li>
						<li>
							<small>
								Three month guarantee on labour on all repairs with no parts
								installed.
							</small>
						</li>
						<li>
							<small>Three month guarantee on sealed system repairs.</small>
						</li>
						<li>
							<small>
								Commercial use, three month guarantee on parts installed and
								bought from us, and related labour.
							</small>
						</li>
						<li>
							<small>Deposits on ordered parts are non-refundable.</small>
						</li>
					</ul>
				</div>
			</div>
		</td>
	);
};

export default BillingNotes;
