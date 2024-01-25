import * as actionTypes from '../types';

export const workspaceState = {
	id: null,
	www: null,
	name: null,
	unit: null,
	email: null,
	phone: null,
	buzzer: null,
	gstNum: null,
	orgNum: null,
	qstNum: null,
	slogan: null,
	orgType: null,
	enabled: false,
	removed: false,
	createdAt: null,
	orgSector: null,
	gstPercent: null,
	isVerified: false
	qstPercent: null,
	suspended:false
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
