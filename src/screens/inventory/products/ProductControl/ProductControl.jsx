
import React from 'react';

import { Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import {
	NAV_TAB_OPTIONS,
	SUPPORTED_SCREEN_SECTIONS,
	CUSTOMERS_BREADCRUMB_OPTIONS,
} from './ProductControl.controller';
import ProductOverview from './ProductOverview';
import ProductSettings from './ProductSettings';
import ProductStatistics from './ProductStatistics';

const ProductControl = ({ productId, setProductId }) => {
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SCREEN_SECTIONS.OVERVIEW);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={CUSTOMERS_BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
											'Manage Products'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
											'Relocate Products'
										)}
										{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
											'Product Permissions'
										)}
									</h1>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
									<NavPill
										options={NAV_TAB_OPTIONS}
										handleTabClick={setActiveSection}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				{activeSection === SUPPORTED_SCREEN_SECTIONS.OVERVIEW && (
					<ProductOverview setProductId={setProductId} />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.STATISTICS && (
					<ProductStatistics />
				)}
				{activeSection === SUPPORTED_SCREEN_SECTIONS.SETTINGS && (
					<ProductSettings />
				)}
			</div>
		</Layout>
	);
};

export default ProductControl;

