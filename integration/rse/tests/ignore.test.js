import parse from '../src/utils/parse.js';
import ignore from '../src/utils/ignore.js';
import stringify from '../src/utils/stringify.js';
import identify from '../src/utils/identify.js';

const tests = [
    // -----------------------------------------------------------------------------------------------------------------
    [
        1,
        {
            rulesBlob: `  div  {  color  :  red  ;  /*  hello  */  background  :  blue  ;  }  `,
            idToIgnore: `div{`,
        },
        `/*  div  {  color  :  red  ;  !*  hello  *!  background  :  blue  ;  }*/  `,
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
usedTests.forEach((item) => {
    it(item[1].rulesBlob, () => {
        const {rulesBlob, idToIgnore} = item[1];
        const rules = parse(rulesBlob);
        identify(rules);
        const actual = ignore(rules, idToIgnore);
        const actualBlob = stringify(actual);
        return expect(actualBlob).toEqual(item[2]);
    });
});
