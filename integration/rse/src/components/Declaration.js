import React from 'react';

import cls from '../utils/cls';
import stylize from '../utils/stylize';
import clean from '../utils/clean';
import shorten from '../utils/shorten';
import Checkbox from './Checkbox';
import Area from './Area';
import {AFTER} from '../utils/COMMON';
import Alert from './Alert';
import hasSelection from '../utils/hasSelection';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const classes = stylize('Declaration', {
    root: {
        padding: '2px 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    property: {
        color: 'rgb(0, 116, 232)', // Firefox
        cursor: 'text',
        borderBottom: '1px dashed transparent',
        '&:hover': {
            borderBottomColor: 'currentColor',
        },
    },
    value: {
        color: 'rgb(221, 0, 169)', // Firefox
        cursor: 'text',
        borderBottom: '1px dashed transparent',
        '&:hover': {
            borderBottomColor: 'currentColor',
        },
    },
    isEmpty: {
        padding: '0 6px',
        background: '#eee',
        '&:hover': {
            background: '#ddd',
        },
    },
    after: {
        marginTop: 6,
    },
    isInvalid: {
        textDecoration: 'line-through',
        textDecorationColor: '#939395',
    },
});

const MAX_CHARS_VALUE = 32; // how many characters to display in the value. Protects against giant base64.
const MAX_CHARS_TITLE = 512; // how many characters to display in the tooltip. Protects against giant base64.

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class Declaration extends React.PureComponent {
    state = {
        isEditingProperty: false,
        isEditingValue: false,
        isEditingAfter: false,
    };

    /**
     *
     */
    render() {
        const {id, property, value, hasColon, onTick, isValid} = this.props;
        const {isEditingProperty, isEditingValue, isEditingAfter} = this.state;

        if (!hasColon && !property.trim()) {
            return null;
        }
        const cleanProperty = clean(property);
        const cleanValue = clean(value);

        let shortValue = cleanValue;
        let shortTitle = '';
        if (cleanValue.length > MAX_CHARS_VALUE) {
            shortValue = shorten(cleanValue, MAX_CHARS_VALUE);
            shortTitle = shorten(cleanValue, MAX_CHARS_TITLE);
        }

        return (
            <div className={cls(classes.root, !isValid && classes.isInvalid)} onClick={this.onDeclarationClick}>
                <Checkbox id={id} tick={1} onTick={onTick} tabIndex={0} />

                {isEditingProperty ? (
                    this.renderArea('property', property)
                ) : (
                    <span
                        tabIndex={0}
                        className={cls(classes.property, !cleanProperty && classes.isEmpty)}
                        onClick={this.onPropertyClick}
                        onFocus={this.onPropertyClick}
                    >
                        {cleanProperty}
                    </span>
                )}

                {': '}

                {isEditingValue ? (
                    this.renderArea('value', value)
                ) : (
                    <span
                        tabIndex={0}
                        className={cls(classes.value, !cleanValue && classes.isEmpty)}
                        onClick={this.onValueClick}
                        onFocus={this.onValueClick}
                        title={shortTitle}
                    >
                        {shortValue}
                    </span>
                )}

                {';'}

                {!isValid && <Alert />}

                {isEditingAfter && (
                    <div className={classes.after}>
                        <Checkbox tick={1} tabIndex={0} />
                        {this.renderArea(AFTER, '')}
                    </div>
                )}
            </div>
        );
    }

    /**
     *
     */
    renderArea = (payloadProperty, defaultValue) => {
        const {id, onEditChange} = this.props;
        return (
            <Area
                defaultValue={defaultValue.trim()}
                id={id}
                payloadProperty={payloadProperty}
                onChange={onEditChange}
                onBlur={this.onAreaBlur}
            />
        );
    };

    /**
     *
     */
    onDeclarationClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingAfter: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onPropertyClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingProperty: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onValueClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingValue: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onAreaBlur = (id, payload) => {
        this.setState({
            isEditingProperty: false,
            isEditingValue: false,
            isEditingAfter: false,
        });
        this.props.onEditEnd(id, payload);
    };
}

// =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================
export default Declaration;
