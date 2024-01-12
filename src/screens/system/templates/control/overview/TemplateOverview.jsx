import React from 'react';
import { useNavigate } from 'react-router-dom';

import { request } from '@utils/request';
import formatMessage from '@utils/formatMessage';
import { LANGUAGE_CODES } from '@constants/locales';
import { Table, Modal, Forms, ActionMenu } from '@components';
import { convertToEpoch, buildDate, parseTime } from '@utils';
import {
	ENTITY_TEMPLATE, 
	DEFAULT_CATEGORIES,
	DEFAULT_TABLE_HEADER, 
} from '@constants/templates';

import TemplateMetrics from './TemplateMetrics';

const pagination = {};

const setActionMenuOptions = ({
	payload,
	onCopy = () => null, 
	onDelete = () => null,
}) => {
	const options = [
		{
			key: 'clone',
			value: (
				<span>
					<i className="bi bi-files" /> Clone
				</span>
			),
			cb: () => onCopy(payload),
		},
	];

	if (!payload?.system) {
		options.push({
			key: 'delete',
			value: (
				<span className="text-danger">
					<i className="bi bi-trash3" /> Delete
				</span>
			),
			cb: () => onDelete(payload),
		});
	}

	return options;
}

const parseOptions = (options, onCopy, onDelete) => (
	options.map((payload) => ({
		query: [
			payload?.name,
			payload?.description,
		].join(' '),
		id: payload?._id,
		name: payload?.name,
		languages: (payload?.languages || []).map((lang = '') => {
			const langCode = lang.toUpperCase();
			return LANGUAGE_CODES[langCode];
		}).join(', '),
		system: payload?.system,
		category: DEFAULT_CATEGORIES[payload?.category || ''],
		type: payload?.type ? (
			payload?.type === 'EMAIL' ? (
				<span>
					<i className="bi-envelope m-1 mb-0" />
					Email
				</span>
			) : (
				<span>
					<i className="bi-phone m-1 mb-0" />
					Phone
				</span>
			)
		) : 'N/A',
		description: payload?.description,
		enabled: (
			payload?.enabled ? (
				<span className="badge bg-soft-success text-success">
					Active
				</span>
			) : (
				<span className="badge bg-soft-danger text-danger">
					Inactive
				</span>
			)
		),
		actions: (
			<ActionMenu 
				options={
					setActionMenuOptions({
						payload, onCopy, onDelete,
					})
				}
			/>
		),
	}))
);

const TemplatesOverview = () => {
	const navigate = useNavigate();

	const [ data, setData ] = React.useState({});
	const [ loading, setLoading ] = React.useState(false);
	const [ showModal, setShowModal ] = React.useState(false);
	const [ templateOptions, setTemplateOptions ] = React.useState([]);

	const options = {
		page: pagination.current || 1, 
		items: pagination.pageSize || 10
	};

	const fetchTemplates = async () => {
		setLoading(true);

		request.list({ entity: ENTITY_TEMPLATE, options }).then((data) => {
			setLoading(false);
			if (data.success === true) {
				setTemplateOptions(data.result);
			} else {
				setTemplateOptions([]);
			}
		}).catch(() => {
			setLoading(false);
		});
	};

	const handleCreateTemplate = (payload) => {
		setLoading(true);

		request.create({ entity: ENTITY_TEMPLATE, jsonData: payload }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				setShowModal(false);
				fetchTemplates();
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	const handleCopyTemplate = (payload) => {
		// Set new cloned payload.
		const newClonedPayload = _.cloneDeep({
			enabled: false,
			name: payload?.name + ' Copy',
			permissions: payload?.permissions,
			description: payload?.description,
		});

		handleCreateTemplate(newClonedPayload);
	};

	const handleDeleteTemplate = (payload) => {
		setLoading(true);

		request.delete({ entity: ENTITY_TEMPLATE, id: payload?._id, jsonData: payload }).then((data) => {
			setLoading(false);

			if (data.success === true) {
				fetchTemplates();
			}
		}).catch((error) => {
			setLoading(false);
		});
	}

	React.useEffect(() => {
		fetchTemplates();
	}, []);

	const toggleModal = () => setShowModal(false);

	const onViewTemplateClick = (e, { id }) => {
		e.preventDefault();
		return navigate(`/system/templates/${id}`);
	};

	const onAddTemplateClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	const renderAddTemplate = (
		<button 
			type="button" 
			onClick={onAddTemplateClick}
			className="btn btn-sm btn-outline-primary" 
		>
			<i className="bi-plus" />
			Create new template
		</button>
	);

	return (
		<div className="d-grid gap-3 gap-lg-5">
			<TemplateMetrics 
				options={templateOptions}
			/>
			<Table
				withFilter
				fullHeight
				loading={loading}
				elementsPerPage={100}
				cta={renderAddTemplate}
				headers={DEFAULT_TABLE_HEADER}
				onRowClick={onViewTemplateClick}
				searchPlaceholder="Search template"
				data={
					parseOptions(
						templateOptions, 
						handleCopyTemplate, 
						handleDeleteTemplate
					)
				}
			/>
			{showModal ? (
				<Modal 
					size="md" centered 
					title="Create new template" 
					onCloseRequest={toggleModal} 
				>
					<Forms.NameDescription
						data={data} 
						ctaContent="Create template"
						handleSubmit={handleCreateTemplate}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default TemplatesOverview;
