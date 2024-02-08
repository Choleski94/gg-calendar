import { createSelector } from 'reselect';

const appSelect = (state) => state.app;

export const selectApp = createSelector([ appSelect ], (app) => app);

export const selectView = createSelector([ appSelect ], (app) => app.view); 

export const selectTheme = createSelector([ appSelect ], (app) => app.theme); 

export const selectCollapsed = createSelector([ appSelect ], (app) => app.collapsed); 
