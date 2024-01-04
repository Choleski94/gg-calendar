import React from 'react';

import api from '@api';
import formatMessage from '@utils/formatMessage';
import useClickOutside from '@utils/hooks/useClickOutside';

const dropdownMenuStyle = {
	margin: '0',
	minWidth: '13rem',
	position: 'absolute',
	inset: '0 0 auto auto',
	transform: 'translate(0, 40px)'
};

const setMenuBtnClassName = (isActive) => [
	'btn btn-white btn-sm',
	(isActive ? 'show' : '')
].join(' ');

const setMenuClassName = (isActive) => [
	'dropdown-menu dropdown-menu-end',
	(isActive ? 'show' : '')
].join(' ');

export const FileMenuDropdown = (id = '') => {
	const [ showMenu, setShowMenu ] = React.useState(false);

	const closeMenu = () => {
		setShowMenu(false);
	};

	const onMenuClick = (e) => {
		setShowMenu(!showMenu);
	};

	const menuRef = useClickOutside(closeMenu);

	return (
		<div className="dropdown">
			<button type="button" className={setMenuBtnClassName(showMenu)} onClick={onMenuClick}>
				<span className="d-none d-sm-inline-block me-1">
					More
				</span>
				<i className="bi-chevron-down" />
			</button>
			<div
				className={setMenuClassName(showMenu)}
				style={dropdownMenuStyle}
				ref={menuRef}
			>
				<span className="dropdown-header">
					Settings
				</span>
				{/*
				<a className="dropdown-item" href="#">
					<i className="bi-share dropdown-item-icon" />
					Share file
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-folder-plus dropdown-item-icon" />
					Move to
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-star dropdown-item-icon" />
					Add to stared
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-pencil dropdown-item-icon" />
					Rename
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-download dropdown-item-icon" />
					Download
				</a>
				<div className="dropdown-divider" />
				*/}
				<a className="dropdown-item" href="#">
					<i className="bi-chat-left-dots dropdown-item-icon" />
					Report
				</a>
				<a className="dropdown-item" href="#">
					<i className="bi-trash dropdown-item-icon" />
					Delete
				</a>
			</div>
		</div>
	);
}
