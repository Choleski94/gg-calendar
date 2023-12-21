import React from 'react';

const InlineError = ({ text }) => (
	<small className="text-danger invalid-feedback">
		{text}
	</small>
);

export default InlineError;
