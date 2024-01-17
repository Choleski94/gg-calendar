import _ from 'lodash';
import React from 'react';
import Handlebars from 'handlebars';
import { useNavigate } from 'react-router-dom';

import {
	ENTITY_TEMPLATE,
	// SUPPORTED_SERVICES_ROWS,
	// BREADCRUMB_ACCESS_OPTIONS,
} from '@constants/templates';
import { request } from '@utils/request';
import compileTemplate from '@utils/compileTemplate';
import { LANGUAGE_SELECTION } from '@constants/locales';
import { Card, Editor, Select, Forms, Layout, NavPill, Breadcrumb, GetSupport } from '@components';

import {
	initialLayout,
	contentPartial,
	NAV_TAB_OPTIONS,
	BREADCRUMB_OPTIONS,
	SUPPORTED_SCREEN_SECTIONS,
} from './EditTemplate.controller';

const EditTemplate = ({ templateId }) => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ lang, setLang ] = React.useState('en');
	const [ loading, setLoading ] = React.useState(false);
	const [ contentObj, setContentObj ] = React.useState({});
	const [ previewHTML, setPreviewHTML ] = React.useState('');
	const [ variables, setVariables ] = React.useState({
		client: 'Julian Guzman',
		company: 'Flash Repair',
		content: 'This is a demo with variable support.',
	});

	const languageOptions = React.useMemo(() => {
		let res = [];

		if (data?.languages) {
			res = LANGUAGE_SELECTION.filter(({ value }) => (
				data?.languages.includes(value)
			));
		}

		return res;
	}, [ data ]);

	const isLocaleReady = React.useMemo(() => Boolean(
		(languageOptions || []).length
	), [ languageOptions ]);

	const handleUpdateTemplate = (payload) => {
		setLoading(true);

		const entity = ENTITY_TEMPLATE + '/update/' + templateId;

		request.patch({ entity, jsonData: payload }).then((response) => {
			setLoading(false);

			if (response.success === true) {
				fetchTemplatePermissions(templateId);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const handleDeleteTemplate = (payload) => {
		setLoading(true);

		request.delete({ entity: ENTITY_TEMPLATE, id: payload?._id, jsonData: payload }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				navigate('/system/templates');
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	const fetchTemplate = (templateId) => {
		setLoading(true);

		request.read({ entity: ENTITY_TEMPLATE, id: templateId }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setData(data.result);
			}
		}).catch(() => {
			setLoading(false);
		});
	}

	const langContent = React.useMemo(() => {
		return contentObj[lang] || ''
	}, [ contentObj, lang ]);

	React.useEffect(() => {
		fetchTemplate(templateId);
		setContentObj({ [lang]: contentPartial });
	}, []);

	React.useEffect(() => {
		// Compile the template with Handlebars
		const template = compileTemplate({
			partials: {
				description: langContent,
			},
			variables,
		});

		setPreviewHTML(template);
	}, [ langContent, variables ]);

	// Handle editor content change
	const handleEditorChange = (value, event) => {
		setContentObj({ ...contentObj, [lang]: value });
	};

	const onDeleteTemplateClick = (e) => {
		e.preventDefault();

		if (data.system) return;

		handleDeleteTemplate(data);
	};

	const onUpdateTemplateClick = (e) => {
		e.preventDefault();

		if (data.system) return;

		// Check if we have valid content.
		const contentKeys = Object.keys(contentObj || {});

		if (!contentKeys || !contentKeys.length) {
			return null;
		}

		const content = contentKeys.reduce((agg, payload) => agg.concat({
			body: langContent, locale: lang, header: '', 
		}), []);

		handleUpdateTemplate({ layout: initialLayout, content });
	};

	const onSelectLangChange = (currentLanguageOptions) => (
		setLang(currentLanguageOptions)
	);

	return (
		<Layout>
			<Layout.StickyHeader>
				<div className="d-flex mb-3">
					<div className="flex-grow-1">
						<div className="row">
							<div className="row align-items-end">
								<div className="col-sm mb-2 mb-sm-0">
									<Breadcrumb options={BREADCRUMB_OPTIONS} />
									<h1 className="page-header-title">
										Edit Templates
									</h1>
								</div>
								<div className="col-sm-auto">
									<GetSupport />
									{/*
									<NavPill
										options={NAV_TAB_OPTIONS}
										handleTabClick={setActiveSection}
									/>
									*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout.StickyHeader>
			<div className="mt-15">
				<div className="row">
					<div className="col-md-12 mb-5">
						<Card fullHeight>
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
									<Forms.Template
										withActive
										defaultValues={data}
										disabled={data?.system}
										handleSubmit={handleUpdateTemplate}
									/>
								)}
							</Card.Body>
						</Card>
					</div>

					<div className="col-md-12 mb-5">
						<Card fullHeight>
							<Card.Header>
								<Card.Title>
									Live Editor
								</Card.Title>
								<Card.CTA>
									{!loading ? (
										<div className="col-sm-12 col-md-12 col-lg-12">
											<small className="text-cap me-10 mb-0">
												Language
											</small>
											<Select
												value={lang}
												closeMenuOnSelect
												options={languageOptions}
												onChange={onSelectLangChange}
											/>
										</div>
									) : null}
				
								</Card.CTA>
							</Card.Header>
							<Card.Body>
								{loading ? (
									<Card.Loader>
										Loading data
									</Card.Loader>
								) : (
									<>
										<div className="row">
											<div className="col-md-7">
												<div style={{ width: '100%', height: '100%' }}>
													<Editor
														id={lang}
														theme="light"
														height="100%"
														language="html"
														value={langContent}
														options={{
															minimap: {
																enabled: false,
															},
														}}
														onChange={handleEditorChange}
													/>
												</div>
											</div>
											<div className="col-md-5">
												<iframe
													title="Preview"
													srcDoc={previewHTML}
													style={{
														width: '100%', 
														height: '100%', 
														minHeight: '750px',
													}}
												/>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-12">
												<div className="mt-4 d-flex align-items-center">
													<div className="ms-auto">
														<button 
															type="button" 
															onClick={onUpdateTemplateClick}
															className="btn btn-sm btn-outline-primary">
															Update content
														</button>
													</div>
												</div>
											</div>
										</div>
									</>
								)}
							</Card.Body>
						</Card>
					</div>

					<div className="col-md-12">
						<Card>
							<Card.Header>
								<Card.Title>
									Delete template
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
											Permanently deleting your template will irreversibly erase the associated email/SMS message, ensuring that it cannot be recovered.
										</Card.Text>
										<div className="d-flex justify-content-end m-2">
											<button
												type="submit"
												onClick={onDeleteTemplateClick}
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
		</Layout>
	);
};

export default EditTemplate;
