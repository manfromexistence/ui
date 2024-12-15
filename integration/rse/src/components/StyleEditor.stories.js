import React from 'react';
import StyleEditor from './StyleEditor';

const large = `
div {
    background-color:red;
    back/*foo*/ground:blue;
    color:red; /* short comment*/
    overflow:hidden;
    /*border:none;*/
    foo: bar;
    font-weight: 
}
/*span {color:red}*/
@supports      (display: flex) {
    @media screen and (min-width: 900px) {
        div {
            display: flex;
        }
        /*
        GIANT COMMENT:
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus aliquet est ut quam rutrum fringilla. Suspendisse et odio. Sed fringilla risus vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam auctor mi quis eros. Morbi justo nulla, lobortis imperdiet, consequat at, auctor ut, tortor. Sed est ipsum, posuere dictum, egestas ac, aliquam eu, sapien. Aenean ornare enim at mi. Phasellus id libero viverra felis elementum lobortis. Curabitur nec sapien gravida lacus lobortis tempor. Quisque eget mi a turpis rutrum venenatis. Nam tempus luctus nunc. Nulla ut orci ac est laoreet malesuada.
        */
        @media screen {
            div {
                color:lime;
            }
        }
    }
}
`;

export default {
    component: StyleEditor,
};

export const Empty = {
    name: 'empty',
};
export const Large = {
    name: 'large',
    args: {
        defaultValue: large,
    },
};
export const Warning = {
    name: 'warning',
    args: {
        defaultValue: `@import 'custom.css';`,
    },
};
export const Height = {
    name: 'height forced',
    args: {
        defaultValue: 'div{color:red}',
        style: {height: 100},
    },
};
export const Invalid = {
    name: 'invalidRule',
    args: {
        defaultValue: '0div{mother:father;font-weight:bold}',
    },
};
export const Overwrite = {
    name: 'overwrite declarations',
    args: {
        defaultValue: 'div{background-color:red;background:blue;}',
    },
};
export const EmptySlots = {
    name: 'empty slots',
    args: {
        defaultValue: ' {mother:;: bold}',
    },
};
export const ReadOnly = {
    name: 'readOnly',
    args: {
        defaultValue: 'div{color:red}',
        readOnly: true,
    },
};
export const CommentsOutside = {
    name: 'comments outside',
    args: {
        defaultValue: '/*x*/h1{color:red} h2/*x*/{color:red} h3{color:red}/*x*/',
    },
};
export const CommentsInside = {
    name: 'comments inside',
    args: {
        defaultValue:
            'h1{/*x*/color:red} h2{c/*x*/olor:red} h3{color:/*x*/red} h4{color:red/*x*/} h5{color:red;/*x*/} h6{color:red;/*x*//*x*/} .empty{color:red;/**//**//**//**/}',
    },
};
