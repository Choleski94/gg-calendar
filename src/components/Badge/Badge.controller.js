'use strict';

export const setBadgeClassName = (badgeType = '') => {
	let res = '';

	switch (badgeType) {
		case 'primary':
			res = 'bg-soft-primary text-primary';
			break;
		case 'secondary':
			res = 'bg-soft-secondary text-secondary';
			break;
		case 'success':
			res = 'bg-soft-success text-success';
			break;
		case 'danger':
			res = 'bg-soft-danger text-danger';
			break;
		case 'warning':
			res = 'bg-soft-warning text-warning';
			break;
		case 'info':
			res = 'bg-soft-info text-info';
			break;
		case 'light':
			res = 'bg-soft-light text-light';
			break;
		case 'dark':
		default:
			res = 'badge bg-soft-dark text-dark';
	}

	return 'badge ' + res + ' rounded-pill';
};

