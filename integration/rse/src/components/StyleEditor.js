import React from 'react';

import Rule from './Rule';
import Area from './Area';
import {AFTER, AFTER_BEGIN, ATRULE, BEFORE, COMMENT, DECLARATION, RULE} from '../utils/COMMON';
import stylize, {prepareStyling, releaseStyling} from '../utils/stylize';
import analyze from '../utils/analyze';
import modify from '../utils/modify';
import stringify from '../utils/stringify';
import prettify from '../utils/prettify';
import ignore from '../utils/ignore';
import unignore from '../utils/unignore';
import cls from '../utils/cls';
import hasSelection from '../utils/hasSelection';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const classes = stylize('StyleEditor', {
    root: {
        fontFamily: 'Consolas, Liberation Mono, Menlo, monospace', // GitHub
        fontSize: '12px', // Chrome
        textAlign: 'left',
        overflow: 'auto',
        color: 'black',
        position: 'relative',
        cursor: 'default',
        boxSizing: 'border-box',
        border: 'solid 1px silver',
        padding: 4,
        '& *': {
            boxSizing: 'border-box',
        },
    },
    isEmpty: {
        minHeight: 20,
        cursor: 'text',
        background: '#eee',
        '&:hover': {
            background: '#ddd',
        },
    },
    isLocked: {
        '& *': {
            pointerEvents: 'none',
        },
    },
});
let hasControlledWarning = false;

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class StyleEditor extends React.Component {
    // Private variables:
    currentRules = [];
    memoRules = this.currentRules; // a simulation of `memoize-one`
    memoCSS = ''; // a simulation of `memoize-one`
    isControlled = false;

    /**
     *
     */
    constructor(props) {
        super(props);
        prepareStyling();
        this.state = {
            isEditing: false,
            hasArea: false,
            internalValue: props.defaultValue,
        };
    }

    /**
     *
     */
    render() {
        const {value, className, readOnly, ...other} = this.props;
        const {isEditing, hasArea, internalValue} = this.state;
        delete other.outputFormats; // not used in render

        this.isControlled = checkIsControlled(this.props);
        const usedValue = this.isControlled ? value : internalValue;

        this.currentRules = typeof usedValue === 'string' ? this.computeRules(usedValue) : usedValue;
        const isEmpty = !this.currentRules.length;

        return (
            <div
                onCopy={this.onCopy}
                onClick={isEmpty ? this.onClick : null}
                {...other}
                className={cls(
                    classes.root,
                    isEmpty && !hasArea && classes.isEmpty,
                    (isEditing || readOnly) && classes.isLocked,
                    className
                )}
            >
                {!isEmpty && (
                    <Rule
                        selector={'root'}
                        kids={this.currentRules}
                        isTop
                        onEditBegin={this.onEditBegin}
                        onEditChange={this.onEditChange}
                        onEditEnd={this.onEditEnd}
                        onTick={this.onTick}
                    />
                )}
                {hasArea && (
                    <Area
                        id={null}
                        defaultValue={''}
                        payloadProperty={'selector'}
                        onChange={this.onAreaChange}
                        onBlur={this.onAreaBlur}
                    />
                )}
            </div>
        );
    }

    /**
     *
     */
    // componentDidMount() {
    //     this.announceOnChange(this.currentRules);
    // }

    /**
     * Under no circumstances do we allow updates while an edit is on-going.
     * Alas, because of this small restriction, we had to quit using PureComponent and had to duplicate its
     * functionality by manually checking if values have actually changed.
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.isEditing) {
            return nextState.isEditing === false; // allow updates only in order to exit editing mode
        }
        for (const key in nextProps) {
            if (this.props[key] !== nextProps[key]) {
                if (key !== 'defaultValue') {
                    // we're ignoring changes to defaultValue
                    return true;
                }
            }
        }
        for (const key in nextState) {
            if (this.state[key] !== nextState[key]) {
                return true;
            }
        }
        return false;
    }

    /**
     *
     */
    componentWillUnmount() {
        releaseStyling();
    }

    /**
     *
     */
    computeRules = (css) => {
        if (this.memoCSS === css) {
            return this.memoRules;
        }
        const rules = analyze(css);
        this.memoCSS = css;
        this.memoRules = rules;
        return rules;
    };

    /**
     *
     */
    onEditBegin = () => {
        this.setState({
            isEditing: true,
        });
    };

    /**
     *
     */
    onEditChange = (id, payload) => {
        const {onChange} = this.props;
        if (onChange) {
            const freshBlob = computeBlobFromPayload(this.currentRules, id, payload);
            this.announceOnChange(freshBlob);
        }
    };

    /**
     *
     */
    announceOnChange = (rulesOrBlob) => {
        const {onChange, outputFormats} = this.props;
        if (onChange) {
            let rules = typeof rulesOrBlob === 'string' ? null : rulesOrBlob; // null means lazy initialization
            const formats = outputFormats.replace(/\s/g, '').split(',');
            const output = [];
            for (const format of formats) {
                switch (format) {
                    case 'preserved':
                        if (rules) {
                            output.push(stringify(rulesOrBlob));
                        } else {
                            output.push(rulesOrBlob);
                        }
                        break;
                    case 'machine':
                        if (!rules) {
                            rules = this.computeRules(rulesOrBlob);
                        }
                        output.push(JSON.parse(JSON.stringify(rules))); // TODO: use something faster
                        break;
                    case 'pretty':
                    default:
                        if (!rules) {
                            rules = this.computeRules(rulesOrBlob);
                        }
                        output.push(prettify(rules));
                        break;
                }
            }
            onChange(output.length > 1 ? output : output[0] || '');
        }
    };

    /**
     *
     */
    onEditEnd = (id, payload) => {
        if (this.isControlled) {
            this.setState({
                isEditing: false,
            });
            // there's no need to do anything else. Our parent already has the payload from the onChange event
        } else {
            // uncontrolled
            this.setState({
                isEditing: false,
                internalValue: computeBlobFromPayload(this.currentRules, id, payload),
            });
        }
    };

    /**
     *
     */
    onTick = (id, desiredTick) => {
        const freshBlob = desiredTick ? unignore(this.currentRules, id) : ignore(this.currentRules, id);
        this.announceOnChange(freshBlob);
        if (!this.isControlled) {
            this.setState({
                internalValue: freshBlob,
            });
        }
    };

    /**
     *
     */
    onCopy = (event) => {
        if (hasSelection()) return;
        const blob = prettify(this.currentRules);
        event.nativeEvent.clipboardData.setData('text/plain', blob);
        event.preventDefault();
    };

    /**
     *
     */
    onClick = () => {
        if (hasSelection()) return;
        this.setState({
            isEditing: true,
            hasArea: true,
        });
    };

    /**
     *
     */
    onAreaChange = (id, payload) => {
        const {onChange} = this.props;
        if (onChange) {
            this.announceOnChange(payload.selector);
        }
    };

    /**
     *
     */
    onAreaBlur = (id, payload) => {
        if (this.isControlled) {
            this.setState({
                isEditing: false,
                hasArea: false,
            });
            // there's no need to do anything else. Our parent already has the payload from the onChange event
        } else {
            // uncontrolled
            this.setState({
                isEditing: false,
                hasArea: false,
                internalValue: payload.selector,
            });
        }
    };
}

// =====================================================================================================================
//  H E L P E R S
// =====================================================================================================================
/**
 *
 */
const checkIsControlled = (props) => {
    if (props.value !== undefined) {
        if (!props.onChange && !props.readOnly && !hasControlledWarning) {
            hasControlledWarning = true;
            if (window.console && window.console.warn) {
                console.warn(
                    'You provided a `value` prop to StyleEditor without an `onChange` handler. ' +
                        'This will render a read-only field. If the StyleEditor should be mutable, use `defaultValue`. ' +
                        'Otherwise, set either `onChange` or `readOnly`.'
                );
            }
        }
        return true;
    } else {
        return false;
    }
};

/**
 *
 */
const computeBlobFromPayload = (rules, id, payload) => {
    // Without deep-cloning, writing inside #foo{} produces: #foo{c;} #foo{co;c;} #foo{col;co;c;} etc.
    // TODO: find a better way
    const rulesDeepClone = JSON.parse(JSON.stringify(rules));

    const {freshRules, freshNode, parentNode} = modify(rulesDeepClone, id, payload);
    if (payload[AFTER_BEGIN]) {
        // can only be dispatched by AT/RULE
        const node = createTemporaryDeclaration(payload[AFTER_BEGIN]);
        freshNode.kids.unshift(node);
    } else if (payload[BEFORE]) {
        // can only be dispatched by AT/RULE and can only create AT/RULE
        const node = createTemporaryRule(payload[BEFORE]);
        const siblings = parentNode.kids;
        const index = siblings.findIndex((item) => item.id === id);
        siblings.splice(index, 0, node);
    } else if (payload[AFTER]) {
        // can be dispatched by any type of node
        let text = payload[AFTER];
        let node;
        switch (
            freshNode.type // freshNode is in fact the anchor node, NOT the node we're about to create
        ) {
            case ATRULE:
                if (freshNode.hasBraceBegin && !freshNode.hasBraceEnd) {
                    text = '}' + text;
                } else if (!freshNode.hasSemicolon) {
                    text = ';' + text;
                }
                node = createTemporaryRule(text);
                break;
            case RULE:
                if (!freshNode.hasBraceEnd) {
                    text = '}' + text;
                }
                node = createTemporaryRule(text);
                break;
            case DECLARATION:
                if (!freshNode.hasSemicolon) {
                    text = ';' + text;
                }
                node = createTemporaryDeclaration(text);
                break;
            case COMMENT:
                if (!freshNode.hasSlashEnd) {
                    text = '*/' + text;
                }
                if (parentNode.type === ATRULE) {
                    node = createTemporaryRule(text);
                } else {
                    node = createTemporaryDeclaration(text);
                }
                break;
            default:
            // nothing
        }
        const siblings = parentNode.kids;
        const index = siblings.findIndex((item) => item.id === id);
        siblings.splice(index + 1, 0, node);
    } else if (payload.value) {
        freshNode.hasColon = true;
    }
    return stringify(freshRules);
};

/**
 *
 */
const createTemporaryDeclaration = (text) => {
    if (!text.match(/;\s*$/)) {
        // doesn't end with semicolon
        text += ';'; // close it
    }
    return {
        type: DECLARATION,
        property: text,
        value: '',
    };
};

/**
 *
 */
const createTemporaryRule = (text) => {
    if (text.match(/^\s*@/)) {
        // ATRULE
        if (!text.match(/[{};]/)) {
            // doesn't contain braces or semicolons
            text += ';'; // close it. We assume this is not a nested ATRULE
        }
    } else {
        // RULE
        if (!text.match(/[{}]/)) {
            // doesn't contain braces
            text += '{}'; // close it
        }
    }
    return {
        type: RULE,
        selector: text,
    };
};

// =====================================================================================================================
//  D E F I N I T I O N
// =====================================================================================================================
StyleEditor.defaultProps = {
    outputFormats: 'pretty',
    onChange: null,
    defaultValue: '',
    value: undefined,
    readOnly: false,
};
export default StyleEditor;
