import React from 'react';

import {AFTER, AFTER_BEGIN, ATRULE, BEFORE, COMMENT, DECLARATION, RULE} from '../utils/COMMON';
import cls from '../utils/cls';
import Comment from './Comment';
import Declaration from './Declaration';
import Checkbox from './Checkbox';
import stylize from '../utils/stylize';
import clean from '../utils/clean';
import Area from './Area';
import Alert from './Alert';
import hasSelection from '../utils/hasSelection';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const classes = stylize('Rule', {
    root: {
        // background: 'lime',
    },
    header: {
        padding: '2px 0',
    },
    selector: {
        color: 'black',
        cursor: 'text',
        borderBottom: '1px dashed transparent',
        '&:hover': {
            borderBottomColor: 'currentColor',
        },
    },
    block: {
        marginLeft: 16,
        whiteSpace: 'nowrap',
    },
    blockIsTop: {
        marginLeft: 4,
    },
    footer: {
        marginBottom: 4,
    },
    isEmpty: {
        padding: '0 6px',
        background: '#eee',
        '&:hover': {
            background: '#ddd',
        },
    },
    isInvalid: {
        textDecoration: 'line-through',
        textDecorationColor: '#939395',
    },
});

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class Rule extends React.PureComponent {
    state = {
        isEditingSelector: false,
        isEditingBefore: false,
        isEditingAfterBegin: false,
        isEditingAfter: false,
    };

    /**
     *
     */
    render() {
        const {
            id,
            selector,
            hasBraceBegin,
            hasBraceEnd,
            hasSemicolon,
            kids,
            isTop,
            onEditBegin,
            onEditChange,
            onEditEnd,
            onTick,
            isValid,
        } = this.props;
        const {isEditingSelector, isEditingBefore, isEditingAfterBegin, isEditingAfter} = this.state;

        if (!kids.length && !selector.trim() && !hasBraceBegin && !hasBraceEnd && !hasSemicolon) {
            return null;
        }

        const cleanSelector = clean(selector);

        return (
            <div className={classes.root}>
                {isEditingBefore && this.renderArea(BEFORE)}

                {!isTop && (
                    <div className={classes.header} onClick={this.onHeaderClick}>
                        <Checkbox id={id} tick={1} onTick={onTick} />

                        {isEditingSelector ? (
                            <Area
                                defaultValue={selector.trim()}
                                id={id}
                                payloadProperty={'selector'}
                                onChange={onEditChange}
                                onBlur={this.onAreaBlur}
                            />
                        ) : (
                            <span
                                className={cls(
                                    classes.selector,
                                    !cleanSelector && classes.isEmpty,
                                    !isValid && classes.isInvalid
                                )}
                                onClick={this.onSelectorClick}
                            >
                                {cleanSelector}
                            </span>
                        )}
                        {!isValid && <Alert />}
                        {!hasSemicolon && <span onClick={this.onBraceClick}>{' {'}</span>}
                    </div>
                )}

                <div className={cls(classes.block, isTop && classes.blockIsTop)}>
                    {isEditingAfterBegin && this.renderArea(AFTER_BEGIN)}

                    {kids.map((item) => {
                        const Component = typeToComponent[item.type];
                        return (
                            <Component
                                {...item}
                                key={item.id}
                                onEditBegin={onEditBegin}
                                onEditChange={onEditChange}
                                onEditEnd={onEditEnd}
                                onTick={onTick}
                            />
                        );
                    })}
                </div>

                {!isTop && !hasSemicolon && (
                    <div className={classes.footer} onClick={this.onFooterClick}>
                        {'}'}
                    </div>
                )}

                {isEditingAfter && this.renderArea(AFTER)}
            </div>
        );
    }

    /**
     *
     */
    renderArea = (payloadProperty) => {
        const {id, onEditChange} = this.props;
        return (
            <div>
                <Checkbox tick={1} />
                <Area
                    defaultValue={''}
                    id={id}
                    payloadProperty={payloadProperty}
                    onChange={onEditChange}
                    onBlur={this.onAreaBlur}
                />
            </div>
        );
    };

    /**
     *
     */
    onSelectorClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingSelector: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onBraceClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingBefore: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onHeaderClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        if (this.props.hasBraceBegin) {
            this.setState({isEditingAfterBegin: true});
        } else {
            this.setState({isEditingAfter: true});
        }
        this.props.onEditBegin();
    };

    /**
     *
     */
    onFooterClick = (event) => {
        if (hasSelection()) return;
        event.stopPropagation();
        this.setState({isEditingAfter: true});
        this.props.onEditBegin();
    };

    /**
     *
     */
    onAreaBlur = (id, payload) => {
        this.setState({
            isEditingSelector: false,
            isEditingBefore: false,
            isEditingAfterBegin: false,
            isEditingAfter: false,
        });
        this.props.onEditEnd(id, payload);
    };
}

// =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================
const typeToComponent = {
    [ATRULE]: Rule,
    [RULE]: Rule,
    [DECLARATION]: Declaration,
    [COMMENT]: Comment,
};
export default Rule;
