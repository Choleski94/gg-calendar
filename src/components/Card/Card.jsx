import React from 'react';

import { setCardClassName } from './Card.controller';

const Card = ({ children = null, centered = false, withoutBorder = false, withoutHover = false, fullHeight = false, ...rest }) => (
	<div className={setCardClassName({ withoutBorder, withoutHover, centered, fullHeight })} {...rest}>
		{children}
	</div>
);

Card.Header = ({ children }) => (
	<div className="card-header card-header-content-md-between">
		{children}
	</div>
);

Card.Title = ({ children }) => (
	<h4 className="card-header-title">
		{children}
	</h4>
);

Card.CTA = ({ children }) => (
	<div className="d-grid d-sm-flex justify-content-md-end align-items-sm-center gap-2">
		{children}
	</div>
);

Card.Body = ({ children, fullHeight = false, title = '' }) => (
	<div className={`card-body ${fullHeight ? 'card-body-height' : ''}`}>
		{title && (
			<h6 className="card-subtitle">
				{title}
			</h6>
		)}

		{children}
	</div>
);

Card.Text = ({ children }) => (
	<p className="card-text">
		{children}
	</p>
);

Card.Subtitle = ({ children }) => (
	<h6 className="card-subtitle mb-2">
		{children}
	</h6>
);

Card.Footer = ({ children }) => (
	<div className="card-footer">
		{children}
	</div>
);

export default Card;
