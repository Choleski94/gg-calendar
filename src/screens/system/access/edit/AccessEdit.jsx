import React from 'react';

import { 
	Card, 
	Table, 
	Layout, 
	NavPill, 
	Breadcrumb, 
	GetSupport, 
	VerticalNavTab, 
} from '@components';
import { 
	ENTITY_ROLE, 
	SUPPORTED_SERVICES_ROWS,
	BREADCRUMB_ACCESS_OPTIONS,
	SUPPORTED_SERVICES_SECTIONS,
	ADMINISTRATION_NAV_TAB_OPTIONS,
	DEFAULT_PERMISSION_TABLE_HEADER, 
} from '@constants/access';
import { hasObjectKey } from '@utils';
import mockPermission from '@mocks/jobs';
import { request } from '@utils/request';

import { parseOptions } from './AccessEdit.controller';

const AccessEdit = ({ roleId }) => {
	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);

	const fetchRolePermissions = (roleId) => {
		setLoading(true);

		request.read({ entity: ENTITY_ROLE, id: roleId }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setData(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	// TODO: get current account userId
	React.useEffect(() => {
		fetchRolePermissions(roleId);
	}, []);

	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SERVICES_SECTIONS.ADMINISTRATION);

	const permissionOptions = React.useMemo(() => {
		let permissionRows = [];

		if (hasObjectKey(data)) {
			const sectionPermissions = SUPPORTED_SERVICES_ROWS[activeSection] || [];

			permissionRows = sectionPermissions.map((rule) => {
				const [ create = false, view = false, update = false, remove = false ] = data.permissions[rule.slug] || [];
				return {
					...rule,
					create,
					view,
					update,
					remove,
				}
			});
		}

		return permissionRows;
	}, [ data, activeSection ]);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={BREADCRUMB_ACCESS_OPTIONS} />
									<h1 className="page-header-title">
										Edit {data?.name} Role
									</h1>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				<div className="row">
					<div className="col-lg-3">
						<Card>
							<Card.Header>
								<Card.Title>
									Services
								</Card.Title>
							</Card.Header>
							<VerticalNavTab 
								id="services"
								handleTabClick={setActiveSection}
								options={ADMINISTRATION_NAV_TAB_OPTIONS}
							/>
						</Card>
					</div>
					<div className="col-lg-9">
						<div className="d-grid gap-3 gap-lg-5">
							<Table
								fullHeight
								loading={loading}
								title="Permissions"
								elementsPerPage={100}
								noDataMessage="No permission found"
								data={parseOptions(permissionOptions)}
								headers={DEFAULT_PERMISSION_TABLE_HEADER}
							/>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AccessEdit;
