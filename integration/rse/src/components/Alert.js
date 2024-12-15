import React from 'react';

import stylize from '../utils/stylize';

const classes = stylize('Alert', {
    root: {
        width: 12,
        height: 12,
        fill: '#d7b600',
        verticalAlign: -2,
        marginLeft: 4,
    },
});

const stopPropagation = (event) => event.stopPropagation();

export default () => (
    <svg viewBox="0 0 12 12" className={classes.root} onClick={stopPropagation}>
        <path
            d="M6 0a1 1 0 0 1 .89.54l5 9.6A1 1 0 0 1 11 11.6H1a1 1 0 0 1-.89-1.46l5-9.6A1 1 0 0 1 6 0z
        m-.25 8a.75.75 0 0 0-.75.75v.5c0 .41.34.75.75.75h.5c.41 0 .75-.34.75-.75v-.5A.75.75 0 0 0 6.25 8h-.5z
        M7 3.7a1 1 0 1 0-2 0v2.6a1 1 0 1 0 2 0V3.7z"
        />
    </svg>
);
