import parse from '../src/utils/parse.js';
import {ATRULE, COMMENT, DECLARATION, RULE} from '../src/utils/COMMON.js';

const tests = [
    // =================================================================================================================
    //                                                 R U L E S E T
    // =================================================================================================================
    /*
    There are 3 types of kids in a RULESET:
        1) RULE
        2) ATRULE
        3) COMMENT (a comment that follows a rule/atrule, not a comment that start in the middle of a rule/atrule)

    There are 4 delimiter characters:
        1) brace_begin    {
        2) brace_end      }
        3) at             @  (only for ATRULE)
        4) semicolon      ;  (only for ATRULE)

    There are 7 situations where the above characters do NOT represent their respective tokens:
        1) inside single-quotes
        2) inside double-quotes
        3) inside braces
        4) inside brackets
        5) inside parenthesis
        6) inside comment
        7) immediately after odd-backslash

    There are only 3 ATRULEs that act as RULEs (always expecting a list of declarations):
        1) @page
        2) @font-face
        3) @viewport
    */
    // -----------------------------------------------------------------------------------------------------------------
    [1, ``, []],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  `,
        [
            {
                type: RULE,
                selector: `  `,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  div  {  }`,
        [
            {
                type: RULE,
                selector: `  div  `,
                hasBraceBegin: true,
                hasBraceEnd: true,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  div  {  `,
        [
            {
                type: RULE,
                selector: `  div  `,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  div  }  `,
        [
            {
                type: RULE,
                selector: `  div  }  `,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @charset  "utf-8"  ;`,
        [
            {
                type: ATRULE,
                selector: `  @charset  "utf-8"  `,
                hasSemicolon: true,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @media  screen  {  }`,
        [
            {
                type: ATRULE,
                selector: '  @media  screen  ',
                hasSemicolon: false,
                hasBraceBegin: true,
                hasBraceEnd: true,
                kids: [
                    {
                        type: RULE,
                        selector: `  `,
                        hasBraceBegin: false,
                        hasBraceEnd: false,
                        kids: [],
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @media  screen  }  `,
        [
            {
                type: ATRULE,
                selector: '  @media  screen  }  ',
                hasSemicolon: false,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @media  screen  {  `,
        [
            {
                type: ATRULE,
                selector: '  @media  screen  ',
                hasSemicolon: false,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: RULE,
                        selector: `  `,
                        hasBraceBegin: false,
                        hasBraceEnd: false,
                        kids: [],
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @media  screen  `,
        [
            {
                type: ATRULE,
                selector: '  @media  screen  ',
                hasSemicolon: false,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  @media  screen;  `,
        [
            {
                type: ATRULE,
                selector: '  @media  screen',
                hasSemicolon: true,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
            {
                type: RULE,
                selector: `  `,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `/**/`,
        [
            {
                type: COMMENT,
                prefix: ``,
                content: ``,
                hasSlashEnd: true,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `/*  hello  */`,
        [
            {
                type: COMMENT,
                prefix: ``,
                content: `  hello  `,
                hasSlashEnd: true,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  /*  hello  */`,
        [
            {
                type: COMMENT,
                prefix: `  `,
                content: `  hello  `,
                hasSlashEnd: true,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  /*  hello  `,
        [
            {
                type: COMMENT,
                prefix: `  `,
                content: `  hello  `,
                hasSlashEnd: false,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  di  /*  hello  */  v  `,
        [
            {
                type: RULE,
                selector: `  di  /*  hello  */  v  `,
                hasBraceBegin: false,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `@page{  }`,
        [
            {
                type: RULE,
                selector: `@page`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `@font-face{  }`,
        [
            {
                type: RULE,
                selector: `@font-face`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `@viewport{  }`,
        [
            {
                type: RULE,
                selector: `@viewport`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],

    // =================================================================================================================
    //                                                      R U L E
    // =================================================================================================================
    /*
    There are 7 situations where the `;` character is NOT A SEMICOLON TOKEN:
        1) inside single-quotes                 `';'`
        2) inside double-quotes                 `";"`
        3) inside braces                        `{;}`
        4) inside brackets                      `[;]`
        5) inside parenthesis                   `(;)`
        6) inside comment                       `/*;*\/`
        7) immediately after odd-backslash      `\;`
    */
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{;`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: true,
                        property: ``,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  :  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  `,
                        hasColon: true,
                        value: `  red  `,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  :  red;  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: true,
                        property: `  color  `,
                        hasColon: true,
                        value: `  red`,
                    },
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{/**/`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: COMMENT,
                        prefix: ``,
                        content: ``,
                        hasSlashEnd: true,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  /*  hello  */`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: COMMENT,
                        prefix: `  `,
                        content: `  hello  `,
                        hasSlashEnd: true,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  /*  hello  */  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: COMMENT,
                        prefix: `  `,
                        content: `  hello  `,
                        hasSlashEnd: true,
                    },
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  /*  hello  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: COMMENT,
                        prefix: `  `,
                        content: `  hello  `,
                        hasSlashEnd: false,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  col/*x*/or  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  col/*x*/or  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{';'`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `';'`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{";"`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `";"`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{{;}`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `{;}`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{[;]`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `[;]`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{(;)`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `(;)`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{/*;*/`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: COMMENT,
                        prefix: ``,
                        content: `;`,
                        hasSlashEnd: true,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{\\;`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `\\;`,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],

    // =================================================================================================================
    //                                               D E C L A R A T I O N
    // =================================================================================================================
    /*
    There are 8 situations where the `:` character is NOT A COLON TOKEN:
        1) inside single-quotes                 `':'`
        2) inside double-quotes                 `":"`
        3) inside braces                        `{:}`
        4) inside brackets                      `[:]`
        5) inside parenthesis                   `(:)`
        6) inside comment                       `/*:*\/`
        7) immediately after odd-backslash      `\:`
        8) repeated instances                   `::`
    */
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  :  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  `,
                        hasColon: true,
                        value: `  red  `,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{:  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: ``,
                        hasColon: true,
                        value: `  red  `,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  ':'  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  ':'  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  ":"  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  ":"  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  {:}  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  {:}  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  [:]  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  [:]  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  (:)  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  (:)  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  /*:*/  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  /*:*/  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  \\:  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  \\:  red  `,
                        hasColon: false,
                        value: ``,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{  color  :  :  red  `,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  `,
                        hasColon: true,
                        value: `  :  red  `,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        2,
        `div {background-color: red;/*back/*foo*/ground:blue;*/}`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: false,
                kids: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  color  `,
                        hasColon: true,
                        value: `  :  red  `,
                    },
                ],
            },
        ],
    ],
];

const normalTests = [];
const importantTests = [];
tests.forEach((item) => {
    if (item[0] === 1) {
        normalTests.push(item);
    } else if (item[0] === 2) {
        importantTests.push(item);
    }
});

const usedTests = importantTests.length ? importantTests : normalTests;
usedTests.forEach((item) => it(item[1], () => expect(parse(item[1])).toEqual(item[2])));
