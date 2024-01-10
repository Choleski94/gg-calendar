import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { withPrivateRouter } from '@utils/hocs';

import EditorWithPreview from './edit';
import TemplateControl from './control';

const TemplatesScreen = () => {
	const navigate = useNavigate();

	const { id = '' } = useParams();

	const setTemplateId = (id = '') => (
		navigate(`/system/templates/${id}`)
	);

	const templateId = React.useMemo(() => (
		(id || '').toLowerCase()
	), [ id ]);

	return (
		templateId && templateId.length ? (
			<EditorWithPreview
				type="INVOICE"
				id={templateId} 
			/>
		) : (
			<TemplateControl
				setTemplateId={setTemplateId}
			/>
		)
	);
};

export default withPrivateRouter(TemplatesScreen);
