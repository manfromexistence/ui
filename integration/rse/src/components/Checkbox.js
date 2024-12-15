import React from 'react';

import cls from '../utils/cls';
import stylize from '../utils/stylize';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const classes = stylize('Checkbox', {
    root: {
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginTop: -2,
        marginRight: 4,
        width: 12,
        height: 12,
        border: 'solid 1px #333333',
        userSelect: 'none',
    },
    checked: {
        '&:after': {
            position: 'absolute',
            content: '""',
            left: 3,
            top: 0,
            width: 3,
            height: 7,
            border: 'solid 1px #000',
            borderTop: 'none',
            borderLeft: 'none',
            transform: 'rotate(45deg)',
        },
    },
    mixed: {
        // currently unused
        '&:after': {
            position: 'absolute',
            content: '""',
            left: 2,
            top: 2,
            width: 6,
            height: 6,
            background: '#333',
        },
    },
});

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class Checkbox extends React.PureComponent {
    /**
     *
     */
    render() {
        const {tick} = this.props;
        return (
            <div
                className={cls(classes.root, tick === 1 && classes.checked, tick === 2 && classes.mixed)}
                onClick={this.onClick}
            />
        );
    }

    /**
     *
     */
    onClick = (event) => {
        event.stopPropagation();
        const {onTick, id, tick} = this.props;
        onTick(id, [true, false, true][tick]); // 0 => true, 1 => false, 2 => true
    };
}

// =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================
Checkbox.defaultProps = {
    tick: 0,
};
export default Checkbox;
