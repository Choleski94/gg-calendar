import _ from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { 
	Card, 
	Forms,
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
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ permissionOptions, setPermissionOptions ] = React.useState([]);
	const [ activeSection, setActiveSection ] = React.useState(SUPPORTED_SERVICES_SECTIONS.ADMINISTRATION);

	const handleUpdateRole = (payload) => {
		setLoading(true);

		const entity = ENTITY_ROLE + '/update/' + roleId;

		request.patch({ entity, jsonData: payload }).then((response) => {
			setLoading(false);

			if (response.success === true) {
				fetchRolePermissions(roleId);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const handleDeleteRole = (payload) => {
		setLoading(true);

		request.delete({ entity: ENTITY_ROLE, id: payload?._id, jsonData: payload }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				navigate('/system/access');
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

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

	React.useEffect(() => {
		fetchRolePermissions(roleId);
	}, []);

	const onChange = (e, rule) => {
		const permissionCopy = _.cloneDeep(permissionOptions);

		if (!permissionCopy || !permissionCopy.length) return

		const operation = e.target.name;

		setPermissionOptions([
			...permissionCopy.map((payload) => {
				const res = { ...payload };

				if (res.slug === rule) {
					res[operation] = e.target.value;
				}

				return res;
			})
		]);
	}

	const onSavePermissionClick = (e) => {
		e.preventDefault();

		if (data.system) return;

		handleUpdateRole({
			permissions: permissionOptions.map((payload) => ({
				[payload.slug]: [
					payload?.create, 
					payload?.view, 
					payload?.update, 
					payload?.remove
				],
			}))
		});
	};

	const onDeleteRoleClick = (e) => {
		e.preventDefault();

		if (data.system) return;

		handleDeleteRole(data);
	};

	React.useEffect(() => {
		if (!hasObjectKey(data)) return 

		const sectionPermissions = SUPPORTED_SERVICES_ROWS[activeSection] || [];

		const options = sectionPermissions.map((rule) => {
			const [ create, view, update, remove ] = (
				data.permissions[rule.slug] || [ false, false, false, false]
			);

			return {
				...rule, 
				create,
				view,
				update,
				remove,
			};
		});

		setPermissionOptions(options);
	}, [ data, activeSection ]);

	const renderSavePermission = (
		<button 
			type="button" 
			onClick={onSavePermissionClick}
			className="btn btn-sm btn-outline-success" 
		>
			<i className="bi-save" />
			&nbsp;
			Save
		</button>
	);

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
							<Card>
								<Card.Header>
									<Card.Title>
										Profile
									</Card.Title>
								</Card.Header>
								<Card.Body>
									{loading ? (
										<Card.Loader>
											Loading data
										</Card.Loader>
									) : (
										<Forms.NameDescription
											withActive
											defaultValues={data}
											disabled={data?.system}
											ctaContent="Update role"
											handleSubmit={handleUpdateRole}
										/>
									)}
								</Card.Body>
							</Card>

							<Table
								fullHeight
								loading={loading}
								title="Permissions"
								elementsPerPage={100}
								footerCta={renderSavePermission}
								noDataMessage="No permission found"
								headers={DEFAULT_PERMISSION_TABLE_HEADER}
								data={parseOptions(permissionOptions, onChange)}
							/>

							<Card>
								<Card.Header>
									<Card.Title>
										Delete role
									</Card.Title>
								</Card.Header>
								<Card.Body>
									{loading ? (
										<Card.Loader>
											Loading data
										</Card.Loader>
									) : (
										<>
											<Card.Text>
												Deleting your role removes the permissions for registered 
												Tigado services linked to that role for the user.
											</Card.Text>
											<div className="d-flex justify-content-end m-2">
												<button 
													type="submit" 
													onClick={onDeleteRoleClick}
													className="btn btn-sm btn-outline-danger" 
												>
													<i className="bi-trash" />
													&nbsp;
													Delete
												</button>
											</div>
										</>
									)}
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default AccessEdit;
