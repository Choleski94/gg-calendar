import * as actionTypes from '../types';

export const workforceState = {
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

const workforceReducer = (state = workforceState, action) => {
	switch (action.type) {
		case actionTypes.WORKFORCE_FETCHED:
			return { ...state, ...action.workforce };
		default:
			return state;
	}
};

export default workforceReducer;
