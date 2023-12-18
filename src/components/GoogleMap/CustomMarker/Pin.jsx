import React from 'react';

const Pin = ({ color = '#000', children }) => (
	<div className="pin" style={{ borderColor: color }}>
		{children}
	</div>
);

export default Pin;
