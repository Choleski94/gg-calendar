import React from 'react';

import { Loading } from './Button.styled';

const Button = ({ onClick, children, loading = false, ...rest }) => (
	<button type="button" className="btn btn-primary" onClick={onClick} {...rest}>
		{loading ? <Loading /> : children}
	</button>
);

export default Button;
