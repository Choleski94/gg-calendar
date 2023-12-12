import React from 'react';

const Button = ({ onClick, children, ...rest }) => (
	<button type="button" className="btn btn-primary" onClick={onClick} {...rest}>
		{children}
	</button>
);

export default Button;
