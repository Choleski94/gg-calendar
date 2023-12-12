import { createSelector } from 'reselect';
const userSelect = (state) => state.user;

export const selectAuth = createSelector([userSelect], (user) => user);
export const selectCurrentAdmin = createSelector([userSelect], (user) => user);

export const isLoggedIn = createSelector([userSelect], (user) => user.isLoggedIn);
