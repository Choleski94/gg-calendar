import { createSelector } from 'reselect';

const workforceSelect = (state) => state.workforce;

export const selectWorkforce = createSelector([workforceSelect], (workforce) => workforce);

// export const isVerified = createSelector([workforceSelect], (workforce) => !!workforce.isVerified;
