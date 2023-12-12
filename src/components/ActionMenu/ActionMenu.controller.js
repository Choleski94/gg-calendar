'use strict';

export const setActionMenuClassName = (show = false) => [
        'dropdown-menu dropdown-menu-end mt-1',
        (show ? 'show' : ''),
].join(' ');
