"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[182],{"./src/components/_text.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},alignment:function(){return alignment},direction:function(){return direction},sizes:function(){return sizes},style:function(){return style},wrappingAndTruncation:function(){return wrappingAndTruncation}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js"),_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/renderers.js");__webpack_exports__.default={title:"Components/Text/Text",decorators:[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Regions have nice paddings and different background colors depending on their type"])]};const loremIpsum="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",alignment=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("centered",`<div class="sgbp-text sgbp-text--centered">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("right aligned",`<div class="sgbp-text sgbp-text--rightAligned">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("left aligned",`<div class="sgbp-text sgbp-text--leftAligned">${loremIpsum}</div>`)]),style=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bold",`<div class="sgbp-text sgbp-text--bold">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Light",`<div class="sgbp-text sgbp-text--light">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Italic",`<div class="sgbp-text sgbp-text--italic">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Uppercase",`<div class="sgbp-text sgbp-text--uppercase">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Underlined",`<div class="sgbp-text sgbp-text--underlined">${loremIpsum}</div>`)]),wrappingAndTruncation=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Force wrap",'\n        <div style="max-width: 200px; background-color: lightgrey;">\n          <div class="sgbp-text sgbp-text--forceWrap">With force wrap: verylongwordwithmanycharacterswillbewrapped.</div>\n          <div class="sgbp-text">Without force wrap: verylongwordwithmanycharacterswillnotbewrapped.</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("No Wrap",'\n        <div style="max-width: 200px; background-color: lightgrey;">\n          <div class="sgbp-text sgbp-text--noWrap">With no wrap: very long line with many words.</div>\n          <div>Without no wrap: very long line with many words.</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Truncated",'\n        <div style="max-width: 200px; background-color: lightgrey;">\n            <div class="sgbp-text sgbp-text--truncated sgbp-row">A very long line with a veryveryveryveryveryveryveryvery long word - LTR.</div>\n            <div class="sgbp-text sgbp-text--truncated sgbp-text--rtl">A very long line with a veryveryveryveryveryveryveryvery long word - RTL.</div>\n        </div>\n        '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Preserve line breaks",'\n        <div class="sgbp-text sgbp-text--preserveLineBreaks sgbp-row">\n            With preserveLineBreaks:\n            Line 1\n            Line 2\n            \n            Line 4 (line 3 is empty)\n        </div>\n        <div class="sgbp-text">\n            Without preserveLineBreaks:\n            Line 1\n            Line 2\n            \n            Line 4 (line 3 is empty)\n        </div>\n        ')]);wrappingAndTruncation.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Force Wrap: If long words exceed the maximum horizontal space then they will be forced to wrap anyways.","No Wrap: If the content exceeds the maximum horizontal space then the content will overflow horizontally.","Truncated: If the content exceeds the maximum horizontal space then the line will get truncated"])];const direction=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("LTR",`<div class="sgbp-text sgbp-text--ltr">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("RTL",`<div class="sgbp-text sgbp-text--rtl">${loremIpsum}</div>`)]),sizes=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("extra small",`<div class="sgbp-text sgbp-text--extraSmall">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("small",`<div class="sgbp-text sgbp-text--small">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("standard",`<div class="sgbp-text">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("large",`<div class="sgbp-text sgbp-text--large">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("extra large",`<div class="sgbp-text sgbp-text--extraLarge">${loremIpsum}</div>`)]),__namedExportsOrder=["alignment","style","wrappingAndTruncation","direction","sizes"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return MaxWidthDecorator},y:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,MaxWidthDecorator=maxWidth=>storyFn=>`\n        <div style="max-width: ${maxWidth}">\n            ${storyFn()}\n        </div>\n    `},"./.storybook/renderers.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Sections},w:function(){return Section}});const Section=(title,content,classes="")=>`\n        <section class="sgbp-row sgbp-row--xl ${classes}">\n            <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText">\n                ${title}\n            </h3>\n            ${content}\n        </section>\n    `,Sections=sections=>sections.join("")}}]);