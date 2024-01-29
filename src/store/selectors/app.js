import { createSelector } from 'reselect';

const appSelect = (state) => state.app;

export const selectApp = createSelector([ appSelect ], (app) => app);

export const isPrimed = createSelector([ appSelect ], (app) => !!app.isPrime); 
