import React from 'react';

import useClickOutside from '@utils/hooks/useClickOutside';

import { setActionMenuClassName } from './ActionMenu.controller';

const ActionMenu = ({ id = '', options = [] }) => {
	const [ showActionMenu, setShowActionMenu ] = React.useState(false);
	const [ coordinates, setCoordinates ] = React.useState({ x: null, y: null });

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();

		setCoordinates({ x: e.clientX, y: e.clientY });
		setShowActionMenu(true);
	};

	const handleClickOutside = () => setShowActionMenu(false);

	const actionMenuRef = useClickOutside(handleClickOutside);

	const actionMenuStyle = {
		position: 'fixed',
		top: `${coordinates.y}px`,
		left: `${coordinates.x}px`,
	};

	return (
		<>
			<button type="button" className="btn btn-ghost-secondary btn-icon btn-sm rounded-circle show" onClick={handleClick}>
				<i className="bi-three-dots-vertical" />
			</button>
			<div className="hs-unfold">
				<div 
					ref={actionMenuRef} style={actionMenuStyle}
					className={setActionMenuClassName(showActionMenu)} 
				>
					{options.map((option) => (
						<a
							href="#"
							key={option.key}
							onClick={(e) => {
								e.stopPropagation();
								option.cb(e, id);
								setShowActionMenu(false);
							}}
							className="dropdown-item"
						>
							{option.value}
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default ActionMenu;
