import * as actionTypes from '../types';

export const organizationState = {
	id: null,
	isInit: false,
	name: null,
	orgNum: null,
	slogan: null,
	www: null,
	unit: null,
	buzzer: null,
	email: null,
	phone: null,
	tax_qst_num: null,
	tax_qst_percent: null,
	tax_gst_num: null,
	tax_gst_percent: null,
};

const organizationReducer = (state = organizationState, action) => {
	switch (action.type) {
		case actionTypes.ORGANIZATION_FETCHED:
			return { ...state, ...action.organization };
		default:
			return state;
	}
};

export default organizationReducer;
