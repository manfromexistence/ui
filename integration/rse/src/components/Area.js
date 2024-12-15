import React from 'react';

import stylize from '../utils/stylize';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const classes = stylize('Area', {
    root: {
        fontFamily: 'Consolas, Liberation Mono, Menlo, monospace', // synced with StyleEditor's fontFamily
        fontSize: '12px', // synced with StyleEditor's fontSize
        resize: 'none',
        verticalAlign: 'middle',
        overflow: 'hidden',
        padding: 2,
        border: 'none',
        outline: 'solid 1px #ccc',
        outlineOffset: '-1px',
        minWidth: 4,
        textDecoration: 'none', // to combat `isInvalid` from upstream
        pointerEvents: 'auto !important', // to combat the general lock imposed by StyleEditor
    },
});

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class Area extends React.PureComponent {
    ref = React.createRef();

    /**
     *
     */
    render() {
        const {defaultValue} = this.props;
        return (
            <textarea
                tabIndex={0}
                className={classes.root}
                defaultValue={defaultValue}
                onClick={this.onClick}
                onChange={this.onChange}
                onBlur={this.onBlur}
                onKeyDown={this.onKeyDown}
                ref={this.ref}
            />
        );
    }

    componentDidMount() {
        const textarea = this.ref.current;
        textarea.focus();
        textarea.select();
        this.autoSize();
    }

    /**
     *
     */
    autoSize = () => {
        const textarea = this.ref.current;
        textarea.style.whiteSpace = 'noWrap';
        textarea.style.width = '0';
        textarea.style.height = '0';
        const w = textarea.scrollWidth;

        const previousElement = textarea.previousElementSibling;
        let offset = 0;
        if (previousElement) {
            offset = previousElement.offsetLeft + previousElement.offsetWidth;
        }

        if (offset + w > textarea.parentNode.offsetWidth) {
            textarea.style.whiteSpace = 'normal';
            textarea.style.display = 'block';
            textarea.style.width = '100%';
        } else {
            textarea.style.display = 'inline-block';
            textarea.style.width = textarea.scrollWidth + 2 + 'px';
        }
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    /**
     *
     */
    onClick = (event) => {
        event.stopPropagation(); // prevent upstream handlers that would cause a blur
    };

    /**
     *
     */
    onChange = (event) => {
        event.stopPropagation(); // we're handling the change manually and this event collides with us upstream
        this.autoSize();
        const {onChange, id, payloadProperty} = this.props;
        onChange(id, {[payloadProperty]: event.currentTarget.value});
    };

    /**
     *
     */
    onBlur = (event) => {
        const {onBlur, id, payloadProperty} = this.props;
        onBlur(id, {[payloadProperty]: event.currentTarget.value});
    };

    /**
     *
     */
    onKeyDown = (event) => {
        // console.log(event.key);
        switch (event.key) {
            case 'Enter':
                if (event.shiftKey) {
                    return; // allow Shift+Enter
                }
                this.onBlur(event);
                cancelEvent(event);
                return;
            case 'Escape':
                event.currentTarget.value = this.props.defaultValue;
                this.onChange(event);
                this.onBlur(event);
                cancelEvent(event);
                break;
            default:
                break; // allow any other characters
        }
    };
}

// =====================================================================================================================
//  H E L P E R S
// =====================================================================================================================
/**
 *
 */
const cancelEvent = (event) => {
    event.preventDefault();
    event.stopPropagation();
};

// =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================
export default Area;
