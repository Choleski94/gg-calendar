import * as actionTypes from '../types';

export const workspaceState = {
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

const workspaceReducer = (state = workspaceState, action) => {
	switch (action.type) {
		case actionTypes.WORKSPACE_FETCHED:
			return { ...state, ...action.workspace };
		default:
			return state;
	}
};

export default workspaceReducer;
