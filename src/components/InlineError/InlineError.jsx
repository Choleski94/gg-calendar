import React from 'react';

const Error = ({ text }) => (
	<small className="text-danger form-control-feedback">
		{ text  }
	</small>
);

export default Error;
