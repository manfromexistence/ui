export default `
/* This is a stylesheet fragment from material.io */
html {
    font-family: sans-serif;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,aside,footer,header,nav,section {
    display: block
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

figcaption,figure {
    display: block
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

/* This a giant „lorem ipsum” comment:
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus aliquet est ut quam rutrum fringilla. Suspendisse et odio. Sed fringilla risus vel est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam auctor mi quis eros. Morbi justo nulla, lobortis imperdiet, consequat at, auctor ut, tortor. Sed est ipsum, posuere dictum, egestas ac, aliquam eu, sapien. Aenean ornare enim at mi. Phasellus id libero viverra felis elementum lobortis. Curabitur nec sapien gravida lacus lobortis tempor. Quisque eget mi a turpis rutrum venenatis. Nam tempus luctus nunc. Nulla ut orci ac est laoreet malesuada.
*/

main {
    display: block
}

pre {
    font-family: monospace,monospace;
    font-size: 1em
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
}

a:active,a:hover {
    outline-width: 0
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
}

b,strong {
    font-weight: inherit
}

b,strong {
    font-weight: bolder
}

code,kbd,samp {
    font-family: monospace,monospace;
    font-size: 1em
}

audio,video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

img {
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

button,input,optgroup,select,textarea {
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.15;
    margin: 0
}

button {
    overflow: visible
}

button,select {
    text-transform: none
}

[type=reset],[type=submit],button,html [type=button] {
    -webkit-appearance: button
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring {
    outline: 1px dotted ButtonText
}

input {
    overflow: visible
}


legend {
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal
}

progress {
    display: inline-block;
    vertical-align: baseline
}

textarea {
    overflow: auto
}

details {
    display: block
}

summary {
    display: list-item
}

menu {
    display: block
}

canvas {
    display: inline-block
}

template {
    display: none
}

[hidden] {
    display: none
}

@keyframes mdc-ripple-fg-radius-in {
    from {
        animation-timing-function: cubic-bezier(.4,0,.2,1);
        transform: translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)
    }

    to {
        transform: translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))
    }
}

@keyframes mdc-ripple-fg-opacity-in {
    from {
        animation-timing-function: linear;
        opacity: 0
    }

    to {
        opacity: var(--mdc-ripple-fg-opacity,0)
    }
}

@keyframes mdc-ripple-fg-opacity-out {
    from {
        animation-timing-function: linear;
        opacity: var(--mdc-ripple-fg-opacity,0)
    }

    to {
        opacity: 0
    }
}

.mdc-ripple-surface--test-edge-var-bug {
    --mdc-ripple-surface-test-edge-var:1px solid #000;visibility: hidden
}

.mdc-ripple-surface--test-edge-var-bug::before {
    border: var(--mdc-ripple-surface-test-edge-var)
}

.mdc-button {
    font-family: Roboto,sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: .04em;
    text-decoration: none;
    text-transform: uppercase;
    --mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color: transparent;
    will-change: transform,opacity;
    padding-right: 8px;
    padding-left: 8px;
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    box-sizing: border-box;
    min-width: 64px;
    height: 36px;
    border: none;
    outline: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 2px
}

.mdc-button::after,.mdc-button::before {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: ""
}

.mdc-button::before {
    transition: opacity 15ms linear;
    z-index: 1
}
.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before {
    transition-duration: 75ms;
    opacity: .24
}

.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear
}

.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: .32
}

.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity:0.32}

.mdc-button--raised {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    transition: box-shadow 280ms cubic-bezier(.4,0,.2,1)
}

.mdc-button--raised:focus,.mdc-button--raised:hover {
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)
}

.mdc-button--raised:active {
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)
}

.mdc-button--raised:disabled {
    box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)
}

.mdc-button--stroked {
    border-style: solid;
    padding-right: 14px;
    padding-left: 14px;
    border-width: 2px;
    line-height: 32px
}

.mdc-button--stroked:disabled {
    border-color: rgba(0,0,0,.38);
    border-color: var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))
}

.mdc-button--stroked.mdc-button--dense {
    line-height: 27px
}

.mdc-button--stroked:not(:disabled) {
    border-color: #6200ee;
    border-color: var(--mdc-theme-primary,#6200ee)
}

.mdc-button--dense {
    height: 32px;
    font-size: .8125rem;
    line-height: 32px
}

.mdc-dialog {
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    visibility: hidden;
    z-index: 5
}

.mdc-dialog__backdrop {
    background-color: rgba(0,0,0,.87);
    background-color: var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87));
    position: fixed;
    top: 0;
    left: 0;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: -1
}

.mdc-dialog__surface {
    box-shadow: 0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);
    background-color: #fff;
    background-color: var(--mdc-theme-background,#fff);
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc(100% - 30px);
    min-width: 640px;
    max-width: 865px;
    transform: translateY(150px) scale(.8);
    border-radius: 2px;
    opacity: 0
}

.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface {
    text-align: right
}

.mdc-dialog__header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 24px 24px 0
}

.mdc-dialog[dir=rtl] .mdc-dialog__header,[dir=rtl] .mdc-dialog .mdc-dialog__header {
    text-align: right
}

.mdc-dialog__header__empty {
    padding: 0
}

.mdc-dialog__header__title {
    font-family: Roboto,sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: .02em;
    text-decoration: inherit;
    text-transform: inherit;
    -ms-flex: 1;
    flex: 1;
    margin: 0
}

.mdc-dialog__body {
    color: rgba(0,0,0,.54);
    color: var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54));
    font-family: Roboto,sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .04em;
    text-decoration: inherit;
    text-transform: inherit;
    margin-top: 20px;
    padding: 0 24px 24px
}

.mdc-snackbar {
    display: -ms-flexbox;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 50%;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: start;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-right: 24px;
    padding-left: 24px;
    transform: translate(-50%,100%);
    transition: transform .25s 0s cubic-bezier(.4,0,1,1);
    background-color: #323232;
    pointer-events: none;
    will-change: transform
}

@media (max-width: 599px) {
    .mdc-snackbar {
        left:0;
        width: 100%;
        transform: translate(0,100%)
    }
}

@media (min-width: 600px) {
    .mdc-snackbar {
        min-width:288px;
        max-width: 568px;
        border-radius: 2px
    }
}

@media (min-width: 600px) {
    .mdc-snackbar--align-start {
        left:24px;
        right: initial;
        bottom: 24px;
        transform: translate(0,200%)
    }

    .mdc-snackbar--align-start[dir=rtl],[dir=rtl] .mdc-snackbar--align-start {
        left: initial;
        right: 24px
    }
}

@media (max-width: 599px) {
    .mdc-snackbar--align-start {
        bottom:0;
        left: 0;
        width: 100%;
        transform: translate(0,100%)
    }
}

.mdc-snackbar--active {
    transform: translate(0);
    transition: transform .25s 0s cubic-bezier(0,0,.2,1);
    pointer-events: auto
}

.mdc-snackbar--active:not(.mdc-snackbar--align-start) {
    transform: translate(-50%,0)
}

@media (max-width: 599px) {
    .mdc-snackbar--active:not(.mdc-snackbar--align-start) {
        bottom:0;
        left: 0;
        width: 100%;
        transform: translate(0)
    }
}

.mdc-snackbar__action-wrapper {
    padding-left: 24px;
    padding-right: 0
}

.mdc-snackbar__action-wrapper[dir=rtl],[dir=rtl] .mdc-snackbar__action-wrapper {
    padding-left: 0;
    padding-right: 24px
}

.mdc-snackbar--action-on-bottom {
    -ms-flex-direction: column;
    flex-direction: column
}

.mdc-snackbar__text {
    font-family: Roboto,sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-size: .875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: .04em;
    text-decoration: inherit;
    text-transform: inherit;
    margin-left: 0;
    margin-right: auto;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    height: 48px;
    transition: opacity .3s 0s cubic-bezier(.4,0,1,1);
    opacity: 0;
    color: #fff
}

@media screen and (min-width: 921px) {
    .multi-up--2 .tile .ratio--1x1,.multi-up--2 .tile .tile__image--1x1 {
        display:block
    }

    .multi-up--2 .tile .lazy-wrapper:not(.ratio--1x1),.multi-up--2 .tile .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--2.multi-up--hero .tile:nth-child(1) .ratio--2x1,.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image--2x1 {
        display: block
    }

    .multi-up--2.multi-up--hero .tile:nth-child(1) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--hero .tile:nth-child(1) .tile__image:not(.tile__image--2x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up--3 .tile:nth-child(1) .ratio--1x1,.multi-up--3 .tile:nth-child(1) .tile__image--1x1,.multi-up--3 .tile:nth-child(2) .ratio--1x1,.multi-up--3 .tile:nth-child(2) .tile__image--1x1 {
        display:block
    }

    .multi-up--3 .tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--3 .tile:nth-child(2) .lazy-wrapper:not(.ratio--1x1),.multi-up--3 .tile:nth-child(2) .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) .ratio--1x1,.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image--1x1 {
        display: block
    }

    .multi-up--3.multi-up--hero .tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--3.multi-up--hero .tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up--4 .tile:nth-child(even) .ratio--1x1,.multi-up--4 .tile:nth-child(even) .tile__image--1x1 {
        display:block
    }

    .multi-up--4 .tile:nth-child(even) .lazy-wrapper:not(.ratio--1x1),.multi-up--4 .tile:nth-child(even) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

.multi-up--5>.tile:nth-child(2) {
    margin-bottom: 0
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--5>.tile:nth-child(1) {
        -ms-flex-preferred-size:100%;
        flex-basis: 100%;
        max-width: 100%
    }

    .multi-up--5:not([class*='multi-up--5 multi-up--'])>.tile:nth-child(2) {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
        max-width: 100%;
        padding: 0
    }

    .multi-up--5>.tile:nth-child(2)>.tile {
        -ms-flex: 1 1 50%;
        flex: 1 1 50%;
        padding: 0 20px
    }
}

@media screen and (min-width: 921px) {
    .multi-up--5>.tile:nth-child(1) .ratio--1x1,.multi-up--5>.tile:nth-child(1) .tile__image--1x1,.multi-up--5>.tile:nth-child(4) .ratio--1x1,.multi-up--5>.tile:nth-child(4) .tile__image--1x1 {
        display:block
    }

    .multi-up--5>.tile:nth-child(1) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(1) .tile__image:not(.tile__image--1x1),.multi-up--5>.tile:nth-child(4) .lazy-wrapper:not(.ratio--1x1),.multi-up--5>.tile:nth-child(4) .tile__image:not(.tile__image--1x1) {
        display: none
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) {
        -ms-flex-preferred-size: 33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .ratio--1x1,.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image--1x1 {
        display: block
    }

    .multi-up--5.multi-up--hero>.tile:nth-child(1n) .lazy-wrapper:not(.ratio--1x1),.multi-up--5.multi-up--hero>.tile:nth-child(1n) .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

@media screen and (min-width: 921px) {
    .multi-up.multi-up--max .tile {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }

    .multi-up.multi-up--max .tile .ratio--1x1,.multi-up.multi-up--max .tile .tile__image--1x1 {
        display: block
    }

    .multi-up.multi-up--max .tile .lazy-wrapper:not(.ratio--1x1),.multi-up.multi-up--max .tile .tile__image:not(.tile__image--1x1) {
        display: none
    }
}

.multi-up--1.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .ratio--2x1,.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image--2x1 {
    display: block
}

.multi-up--1.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--1.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--2.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--3.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--4.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--5.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .lazy-wrapper:not(.ratio--2x1),.multi-up--max.multi-up--slim .tile:nth-child(1n) .tile__image:not(.tile__image--2x1) {
    display: none
}

@media screen and (min-width: 521px) and (max-width:920px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:50%;
        flex-basis: 50%;
        max-width: 50%
    }
}

@media screen and (min-width: 921px) {
    .multi-up--1.multi-up--slim .tile:nth-child(1n),.multi-up--2.multi-up--slim .tile:nth-child(1n),.multi-up--3.multi-up--slim .tile:nth-child(1n),.multi-up--4.multi-up--slim .tile:nth-child(1n),.multi-up--5.multi-up--slim .tile:nth-child(1n),.multi-up--max.multi-up--slim .tile:nth-child(1n) {
        -ms-flex-preferred-size:33.333%;
        flex-basis: 33.333%;
        max-width: 33.333%
    }
}

.tooltip {
    font-size: 10px;
    font-weight: 500;
    line-height: 22px;
    text-align: center
}

.tooltip--large {
    font-size: 14px;
    line-height: 14px
}

.tooltip {
    background: rgba(95,99,104,.9);
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    height: 22px;
    left: -500px;
    max-width: 170px;
    padding-right: 8px;
    padding-left: 8px;
    position: fixed;
    top: -500px;
    transform-origin: top center;
    transform: scale(0);
    z-index: 3
}

@media screen and (min-width: 921px) {
    .section__container {
        -ms-flex:1 1 auto;
        flex: 1 1 auto;
        margin: 0 720px 0 0;
        max-width: none;
        min-width: 536px;
        padding: 0 5%;
        position: relative;
        width: auto
    }

    .section--odd .section__container {
        margin: 0 0 0 720px
    }
}

@media screen and (min-width: 1545px) {
    .section__container {
        margin-right:880px
    }

    .section--odd .section__container {
        margin: 0 0 0 880px
    }
}
`;
