import React from 'react';

import formatMessage from '@utils/formatMessage';

const PageHead = ({ headTitle }) => (
	<>
		<title>
			{headTitle || formatMessage('meta.title.text')}
		</title>
		<meta charSet="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
		<meta name="author" content="Tigado" />
		{/* Favicon */}
		<link rel="shortcut icon" href="/assets/favicon.ico" />
		{/* Font */}
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"/>
		{/* CSS Implementing Plugins */}
		<link rel="stylesheet" href="/assets/css/vendor.min.css"/>
		{/* CSS Front Template */}
		<link rel="stylesheet" href="/assets/css/theme.min.css%3Fv=1.0.css"/>
		<link rel="preload" href="/assets/css/style.css" as="style"/>
	</>
);

export default PageHead;
