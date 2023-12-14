import * as actionTypes from '../types';

const INITIAL_STATE = {
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

const organizationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ORGANIZATION_FETCHED:
			return { ...state, ...action.organization, loaded: true };
		case actionTypes.LOADING_REQUEST:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FAILED_REQUEST:
			return INITIAL_STATE;
		default:
			return state;
	}
};

export default organizationReducer;
