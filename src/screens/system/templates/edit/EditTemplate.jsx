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
import { Card, Editor, Forms, Layout, NavPill, Breadcrumb, GetSupport } from '@components';

const BREADCRUMB_OPTIONS = [
	{
		path: '/system',
		value: 'System'
	},
	{
		path: '/system/templates',
		value: 'Templates'
	},
];

const SUPPORTED_SCREEN_SECTIONS = {
	OVERVIEW: 'OVERVIEW',
	SETTINGS: 'SETTINGS',
	STATISTICS: 'STATISTICS',
};

const NAV_TAB_OPTIONS = [
	{
		key: SUPPORTED_SCREEN_SECTIONS.OVERVIEW,
		value: 'Overview',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.STATISTICS,
		value: 'Statistics',
	},
	{
		key: SUPPORTED_SCREEN_SECTIONS.SETTINGS,
		value: 'Settings',
	},
];

// Define the initial Handlebars layout
const initialLayout = 
`<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<title> </title>
		<!--[if !mso]><!-- --> 
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!--<![endif]--> 
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style type="text/css"> #outlook a { padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .ExternalClass * { line-height: 100%; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } </style>
		<!--[if !mso]><!--> 
		<style type="text/css"> @media only screen and (max-width:480px) { @-ms-viewport { width: 320px; } @viewport { width: 320px; } } </style>
		<!--<![endif]--> <!--[if mso]> 
		<xml>
			<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
		</xml>
		<![endif]--> <!--[if lte mso 11]> 
		<style type="text/css"> .outlook-group-fix { width:100% !important; } </style>
		<![endif]--> 
		<style type="text/css"> @media only screen and (min-width:480px) { .mj-column-per-100 { width: 100% !important; } } </style>
		<style type="text/css"></style>
	</head>
	<body style="background-color:#f9f9f9;">
		<div style="background-color:#f9f9f9;">
			<!--[if mso | IE]> 
			{{> body }}
			<![endif]--> 
		</div>
	</body>
</html>`;

const contentPartial = 
`<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600">
	<tr>
		<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
			<![endif]--> 
			<div style="background:#f9f9f9;background-color:#f9f9f9;Margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9f9f9;background-color:#f9f9f9;width:100%;">
					<tbody>
						<tr>
							<td style="border-bottom:#333957 solid 5px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
								<!--[if mso | IE]> 
								<table role="presentation" border="0" cellpadding="0" cellspacing="0">
									<tr> </tr>
								</table>
								<![endif]--> 
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!--[if mso | IE]> 
		</td>
	</tr>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600">
	<tr>
		<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
			<![endif]--> 
			<div style="background:#fff;background-color:#fff;Margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff;background-color:#fff;width:100%;">
					<tbody>
						<tr>
							<td style="border:#dddddd solid 1px;border-top:0px;direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
								<!--[if mso | IE]> 
								<table role="presentation" border="0" cellpadding="0" cellspacing="0">
									<tr>
										<td style="vertical-align:bottom;width:600px;">
											<![endif]--> 
											<div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
												<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:bottom;" width="100%">
													<tbody>
														<tr>
															<td align="center" style="font-size:0px;padding:10px 25px;word-break:break-word;">
																<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
																	<tbody>
																		<tr>
																			<td style="width:64px;"> <img height="auto" src="https://i.imgur.com/KO1vcE9.png" style="border:0;display:block;outline:none;text-decoration:none;width:100%;" width="64"> </td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td align="center" style="font-size:0px;padding:10px 25px;padding-bottom:40px;word-break:break-word;">
																<div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:28px;font-weight:bold;line-height:1;text-align:center;color:#555;"> Welcome to {{company}}</div>
															</td>
														</tr>
														<tr>
															<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
																<div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:16px;line-height:22px;text-align:left;color:#555;"> Hello {{client}}!<br/><br/>Thank you for signing up for {{company}}. We are thrilled to have you as a member of our {{company}} family. With your new account, you will have access to exclusive content, special offers, and much more!<br/><br/>To get started, please click the link below to verify your account and set up your login credentials: </div>
															</td>
														</tr>
														<tr>
															<td align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;padding-bottom:50px;word-break:break-word;">
																<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
																	<tbody>
																		<tr>
																			<td align="center" bgcolor="#2F67F6" role="presentation" style="border:none;border-radius:3px;color:#ffffff;cursor:auto;padding:15px 25px;" valign="middle"> <a style="background:#2F67F6;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;font-weight:normal;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" href=""> Activate Your Account</a> </td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
														<tr>
															<td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
																<div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;line-height:20px;text-align:left;color:#525252;"> Best regards,<br/><br/>The {{company}} Team<br/> </div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<!--[if mso | IE]> 
										</td>
									</tr>
								</table>
								<![endif]--> 
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!--[if mso | IE]> 
		</td>
	</tr>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600">
	<tr>
		<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
			<![endif]--> 
			<div style="Margin:0px auto;max-width:600px;">
				<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
					<tbody>
						<tr>
							<td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
								<!--[if mso | IE]> 
								<table role="presentation" border="0" cellpadding="0" cellspacing="0">
									<tr>
										<td style="vertical-align:bottom;width:600px;">
											<![endif]--> 
											<div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:bottom;width:100%;">
												<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
													<tbody>
														<tr>
															<td align="center" style="font-size:0px;padding:0;word-break:break-word;">
																<div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;"> Copyright &copy; {{getCurrentYear}} {{comapny}}</div>
															</td>
														</tr>
														<tr>
															<td align="center" style="font-size:0px;padding:10px;word-break:break-word;">
																<div style="font-family:'Helvetica Neue',Arial,sans-serif;font-size:12px;font-weight:300;line-height:1;text-align:center;color:#575757;"> <a href="/unsubscribe" style="color:#575757">Unsubscribe</a> from our emails </div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<!--[if mso | IE]> 
										</td>
									</tr>
								</table>
								<![endif]--> 
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!--[if mso | IE]> 
		</td>
	</tr>
</table>`;

const EditTemplate = () => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ content, setContent ] = React.useState('');
	const [ loading, setLoading ] = React.useState(false);
	const [ previewHTML, setPreviewHTML ] = React.useState('');
	const [ variables, setVariables ] = React.useState({
		client: 'Julian Guzman',
		company: 'Flash Repair',
		content: 'This is a demo with variable support.',
	});

	const handleUpdateTemplate = (payload) => {
		setLoading(true);

		// const entity = ENTITY_TEMPLATE + '/update/' + roleId;

		// request.patch({ entity, jsonData: payload }).then((response) => {
		// 	setLoading(false);

		// 	if (response.success === true) {
		// 		fetchTemplatePermissions(roleId);
		// 	}
		// }).catch(() => {
		// 	setLoading(false);
		// });
	}

	const handleDeleteTemplate = (payload) => {
		setLoading(true);

		// request.delete({ entity: ENTITY_TEMPLATE, id: payload?._id, jsonData: payload }).then((data) => {
		// 	setLoading(false);

		// 	if (data.success === true) {
		// 		navigate('/system/templates');
		// 	}
		// }).catch((error) => {
		// 	setLoading(false);
		// });
	}

	React.useEffect(() => {
		setContent(contentPartial);
	}, []);

	React.useEffect(() => {
		// Compile the template with Handlebars
		const template = compileTemplate({
			partials: {
				description: content,
			},
			variables,
		});

		setPreviewHTML(template);
	}, [ content, variables ]);

	// Handle editor content change
	const handleEditorChange = (value, event) => {
		console.log('VALUE:::', value);
		setContent(value);
	};

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
									<h2>
										Profile
									</h2>
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
										ctaContent="Update template"
										handleSubmit={handleUpdateTemplate}
									/>
								)}
							</Card.Body>
						</Card>
					</div>
					<div className="col-md-12">
						<Card fullHeight>
							<Card.Header>
								<Card.Title>
									<h2>
										Live Editor
									</h2>
								</Card.Title>
								<Card.CTA>
									<button type="button" className="btn btn-sm btn-outline-success">
										<i className="bi-save"/>
										&nbsp;
										Save
									</button>
								</Card.CTA>
							</Card.Header>
							<Card.Body>
								<div className="row">
									<div className="col-md-7">
										<div style={{ width: '100%', height: '100%' }}>
											<Editor
												theme="light"
												height="100%"
												language="html"
												value={content}
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
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default EditTemplate;
