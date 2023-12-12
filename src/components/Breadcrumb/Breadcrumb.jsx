import React from 'react';
import { useNavigate } from 'react-router-dom';

import { renderBreadcrumbItem } from './Breadcrumb.controller';
 
const Breadcrumb = ({ id = '', options = [] }) => {
        const navigate = useNavigate();
	
        const onBackClick = () => navigate(-1);

	const totalIdx = React.useMemo(() => options.length - 1, [ options ]);

	return (
		<nav aria-label="breadcrumb">
			<ol className="breadcrumb breadcrumb-no-gutter">
				<li className="breadcrumb-item inactive" aria-current="page">
					<a className="bg-light text-secondary" onClick={onBackClick}>
						<i className="bi bi-arrow-left"/>
					</a>
				</li>
				{options.map(({ path = '', value = '' }, currentIdx) => (
					renderBreadcrumbItem({ path, value, currentIdx, totalIdx})
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
