import parse from '../src/utils/parse.js';
import validate from '../src/utils/validate.js';

import {ATRULE, COMMENT, DECLARATION, RULE} from '../src/utils/COMMON.js';

const tests = [
    // =================================================================================================================
    //                                                 R U L E S E T
    // =================================================================================================================
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
                children: [],
                isValid: false,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `  {background:red}`,
        [
            {
                type: RULE,
                selector: `  `,
                hasBraceBegin: true,
                hasBraceEnd: true,
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `background`,
                        hasColon: true,
                        value: `red`,
                        isValid: false, // because all children of invalid rules are also invalid
                    },
                ],
                isValid: false,
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{background-color:red;background:blue}`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                isValid: true,
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: true,
                        property: `background-color`,
                        hasColon: true,
                        value: `red`,
                        isValid: false,
                    },
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `background`,
                        hasColon: true,
                        value: `blue`,
                        isValid: true,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{background:blue;background:blue}`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                isValid: true,
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: true,
                        property: `background`,
                        hasColon: true,
                        value: `blue`,
                        isValid: false,
                    },
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `background`,
                        hasColon: true,
                        value: `blue`,
                        isValid: true,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `div{background:blue}div{background:red}`,
        [
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                isValid: true,
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `background`,
                        hasColon: true,
                        value: `blue`,
                        isValid: true,
                    },
                ],
            },
            {
                type: RULE,
                selector: `div`,
                hasBraceBegin: true,
                hasBraceEnd: true,
                isValid: true,
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `background`,
                        hasColon: true,
                        value: `red`,
                        isValid: true,
                    },
                ],
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
                children: [],
                isValid: false, // will always be false due to severe restrictions
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
                isValid: false, // because support is conditioned by a flag
                children: [
                    {
                        type: DECLARATION,
                        hasSemicolon: false,
                        property: `  `,
                        hasColon: false,
                        value: ``,
                        isValid: false,
                    },
                ],
            },
        ],
    ],
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        `*.foo{}`,
        [
            {
                type: RULE,
                selector: `*.foo`, // Note: the browser removes the star in the stylesheet
                hasBraceBegin: true,
                hasBraceEnd: true,
                isValid: true,
                children: [],
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
usedTests.forEach((item) => it(item[1], () => expect(validate(parse(item[1]))).toEqual(item[2])));
