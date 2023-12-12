import React from 'react';

const DEFAULT_MESSAGE_MAP = {
	info: 'info',
	error: 'danger',
	warning: 'warning',
	success: 'success',
};

const messageMapKey = Object.keys(DEFAULT_MESSAGE_MAP);

const BlockMessage = ({ type, text, ...rest }) => {
	// Overwrite type.
	type = (type || '').toLowerCase();
	type = messageMapKey.includes(type) ? type : 'info';

	const Message = () => (
		<div
			className={`alert alert-${DEFAULT_MESSAGE_MAP[type]} fade show animated bounceIn`}
			role="alert"
		>
			{text}
		</div>
	);

	return <Message {...rest} />;
};

export default BlockMessage;
