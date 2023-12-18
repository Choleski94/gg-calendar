import React from 'react';

const Tag = ({ color = '#000' }) => (
	<div className="tag" style={{ backgroundColor: color }}>
		<i className="fa fa-check"/>
	</div>
);

export default Tag;
