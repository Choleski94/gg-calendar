import React from 'react';

const Error = ({ text }) => (
	<small className="text-danger invalid-feedback">
		{text}
	</small>
);

export default Error;
