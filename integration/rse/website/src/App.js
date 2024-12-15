import React from 'react';
import StyleEditor from 'react-style-editor';
// import StyleEditor from './tmp/components/StyleEditor';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/styles';
import clsx from 'clsx';

import LARGE_SAMPLE from './LARGE_SAMPLE';

// =====================================================================================================================
//  D E C L A R A T I O N S
// =====================================================================================================================
const styles = {
    '@global': {
        html: {
            fontFamily: 'Roboto, sans-serif',
            fontVariantLigatures: 'none',
        },
        body: {
            margin: 0,
        },
        code: {
            fontFamily: 'Consolas, Liberation Mono, Menlo, monospace', // GitHub
            backgroundColor: 'rgba(27,31,35,.05)',
            borderRadius: 3,
            fontSize: '85%',
            margin: 0,
            padding: '.2em .4em',
        },
    },
    root: {
        paddingBottom: 64,
    },
    container: {
        paddingTop: 32,
        padding: '32px 8px 0 8px',
        maxWidth: 950,
        margin: 'auto',
    },
    masthead: {
        position: 'relative',
    },
    main: {
        background: '#b3e5fc',
        marginTop: 32,
        textAlign: 'center',
        paddingBottom: 32,
    },
    styleEditor: {
        background: 'white',
        width: 320,
        height: 240,
        maxWidth: '100%',
        overflow: 'scroll',
        resize: 'both',
        margin: '8px auto 16px auto',
    },
    isLarge: {
        width: '100%',
    },
    stars: {
        float: 'right',
        width: 160,
        height: 30,
        border: 'none',
        overflow: 'hidden',
    },
    comparisonStyleEditor: {
        height: 240,
        border: 'none !important',
    },
    comparisonTextarea: {
        width: '100%',
        height: 240,
        whiteSpace: 'pre',
        wordBreak: 'break-all',
        border: 'none',
        resize: 'none',
        '&:focus-visible': {
            outlineWidth: 0,
        },
    },
    table: {
        marginTop: 16,
        width: '100%',
        borderCollapse: 'collapse',
        tableLayout: 'fixed',
        '& th': {
            fontWeight: 500,
            textAlign: 'left',
        },
        '& th, & td': {
            width: '50%',
            padding: 8,
            borderLeft: 'solid 1px silver',
            '&:first-child': {
                border: 'none',
            },
        },
    },
    exampleSurgery: {
        marginTop: 32,
    },
    surgeryTextarea: {
        width: '100%',
        height: 240,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
        border: 'none',
        resize: 'none',
    },
    surgeryStyleEditor: {
        height: 240,
        border: 'none !important',
    },
};
const SMALL_SAMPLE = `
    div{color:red;foo}
    /* Hello, World! */
    @media screen {
        article {
            display: flex;
        }
    }
`;
const COMPARISON_SAMPLE = 'div{color:red;foo';
const SURGERY_SAMPLE =
    'html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;' +
    '-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}' +
    'h1{font-size:2em;margin:.67em 0}figcaption,figure{display:block}figure{margin:1em 40px}' +
    'hr{box-sizing:content-box;height:0;overflow:visible}';

// =====================================================================================================================
//  C O M P O N E N T
// =====================================================================================================================
class App extends React.PureComponent {
    state = {
        isLarge: false,
        main: SMALL_SAMPLE,
        mainCount: 0,
        comparisonPreserved: '',
        comparisonMachine: '',
        comparisonPretty: '',
        surgery: SURGERY_SAMPLE,
    };
    comparisonRef = React.createRef();

    render() {
        const {classes} = this.props;
        const {isLarge, main, mainCount, comparisonPreserved, comparisonMachine, comparisonPretty, surgery} =
            this.state;
        return (
            <div className={classes.root}>
                <div className={clsx(classes.masthead, classes.container)}>
                    <iframe
                        className={classes.stars}
                        title={'GitHub'}
                        src={
                            'https://ghbtns.com/github-btn.html?user=Aurelain&repo=react-style-editor&' +
                            'type=star&count=true&size=large'
                        }
                    />

                    <Typography variant="h2" gutterBottom>
                        React Style Editor
                    </Typography>

                    <Typography variant="subtitle1">
                        A React component that displays and edits CSS, similar to the browser's DevTools.
                    </Typography>
                </div>

                <section className={classes.main}>
                    <div className={classes.container}>
                        <Typography>You can type, copy or paste CSS here:</Typography>
                        <StyleEditor
                            className={clsx(classes.styleEditor, isLarge && classes.isLarge)}
                            defaultValue={main}
                            key={mainCount}
                        />
                        <Button variant="contained" onClick={this.onCleanClick}>
                            Clean
                        </Button>{' '}
                        <Button variant="contained" onClick={this.onLargeClick}>
                            Use a large sample
                        </Button>
                    </div>
                </section>

                <div className={clsx(classes.features, classes.container)}>
                    <Typography variant="h4" gutterBottom>
                        Features
                    </Typography>
                    <ul>
                        <li>Parses any CSS string and formats it in a familiar fashion</li>
                        <li>Validates each rule and each declaration using the browsers's own engine</li>
                        <li>Facilitates commenting the CSS code through checkbox toggling</li>
                        <li>Allows easy additions by clicking next to the desired location</li>
                        <li>Has no dependencies (other than React)</li>
                        <li>Is tiny (&lt; 10 KB minified)</li>
                        <li>Is customizable through classes</li>
                        <li>Offers 3 output formats:</li>
                        <ul>
                            <li>the code with preserved formatting</li>
                            <li>a machine-friendly model of the code (recursive array of objects)</li>
                            <li>the prettified code</li>
                        </ul>
                    </ul>
                </div>

                <div className={clsx(classes.example1, classes.container)}>
                    <Typography variant="h4" gutterBottom>
                        Example: Output formats
                    </Typography>
                    Change the code in the StyleEditor to compare the different outputs received by
                    <code>onChange</code>.
                    <br />
                    The original input was <code>{COMPARISON_SAMPLE}</code>.
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>StyleEditor</th>
                                <th>
                                    Format <code>preserved</code>
                                </th>
                                <th>
                                    Format <code>machine</code>
                                </th>
                                <th>
                                    Format <code>pretty</code>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <StyleEditor
                                        ref={this.comparisonRef}
                                        className={classes.comparisonStyleEditor}
                                        defaultValue={COMPARISON_SAMPLE}
                                        onChange={this.onComparisonStyleEditorChange}
                                        outputFormats="preserved,machine,pretty"
                                    />
                                </td>
                                <td>
                                    <textarea
                                        className={classes.comparisonTextarea}
                                        value={comparisonPreserved}
                                        readOnly
                                    />
                                </td>
                                <td>
                                    <textarea
                                        className={classes.comparisonTextarea}
                                        value={comparisonMachine}
                                        readOnly
                                    />
                                </td>
                                <td>
                                    <textarea
                                        className={classes.comparisonTextarea}
                                        value={comparisonPretty}
                                        readOnly
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={clsx(classes.exampleSurgery, classes.container)}>
                    <Typography variant="h4" gutterBottom>
                        Example: Surgery of minified code
                    </Typography>
                    Change anything in either of the two sides (they are synchronized):
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th>Minified code</th>
                                <th>StyleEditor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <textarea
                                        className={classes.surgeryTextarea}
                                        value={surgery}
                                        onChange={this.onSurgeryTextareaChange}
                                    />
                                </td>
                                <td>
                                    <StyleEditor
                                        className={classes.surgeryStyleEditor}
                                        value={surgery}
                                        onChange={this.onSurgeryStyleEditorChange}
                                        outputFormats="preserved"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={classes.container}>
                    <Typography variant="h4" gutterBottom>
                        Documentation
                    </Typography>
                    The API is described in the <a href="https://github.com/Aurelain/react-style-editor">repository</a>.
                </div>
            </div>
        );
    }

    componentDidMount() {
        // The following is a hack that accesses private a private function inside StyleEditor. TODO: Find another way.
        this.comparisonRef.current.announceOnChange(COMPARISON_SAMPLE);
    }

    /**
     *
     */
    onCleanClick = () => {
        this.setState({
            main: '',
            mainCount: this.state.mainCount + 1,
        });
    };

    /**
     *
     */
    onLargeClick = () => {
        this.setState({
            isLarge: true,
            main: LARGE_SAMPLE,
            mainCount: this.state.mainCount + 1,
        });
    };

    /**
     *
     */
    onComparisonStyleEditorChange = (list) => {
        this.setState({
            comparisonPreserved: list[0],
            comparisonMachine: JSON.stringify(list[1], null, 4),
            comparisonPretty: list[2],
        });
    };

    /**
     *
     */
    onSurgeryTextareaChange = (event) => {
        this.setState({
            surgery: event.currentTarget.value,
        });
    };

    /**
     *
     */
    onSurgeryStyleEditorChange = (payload) => {
        console.log('payload:', payload);
        this.setState({
            surgery: payload,
        });
    };
}

export default withStyles(styles)(App);
