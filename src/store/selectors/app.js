import { createSelector } from 'reselect';

const appSelect = (state) => state.app;

export const selectApp = createSelector([ appSelect ], (app) => app);

export const selectView = createSelector([ appSelect ], (app) => app.view); 

export const selectModal = createSelector([ appSelect ], (app) => app.modal); 

export const selectTheme = createSelector([ appSelect ], (app) => app.theme); 

export const selectShortcut = createSelector([ appSelect ], (app) => app.shortcut); 

export const selectAnimation = createSelector([ appSelect ], (app) => app.animation); 

export const selectCollapsed = createSelector([ appSelect ], (app) => app.collapsed); 

export const selectCategories = createSelector([ appSelect ], (app) => app.categories); 
