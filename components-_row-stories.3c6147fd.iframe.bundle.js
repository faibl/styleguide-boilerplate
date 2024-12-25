"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[937],{"./src/components/_row.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_renderers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/renderers.js"),_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Row",decorators:[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Rows add defined vertical margins to an element"])]};const Standard=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Default (margin bottom, size s)",'\n        <div class="sgbp-row">\n            Row 1\n        </div>\n        <div class="sgbp-row">\n            Row 2\n        </div>\n        <div class="sgbp-row">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Inverse (margin top)",'\n        <div class="sgbp-row sgbp-row--inverse">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--inverse">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--inverse">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("XS",'\n        <div class="sgbp-row sgbp-row--xs">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--xs">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--xs">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("S (Default)",'\n        <div class="sgbp-row sgbp-row--s">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--s">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--s">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("M",'\n        <div class="sgbp-row sgbp-row--m">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--m">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--m">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("L",'\n        <div class="sgbp-row sgbp-row--l">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--l">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--l">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("XL",'\n        <div class="sgbp-row sgbp-row--xl">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--xl">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--xl">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("[m] none",'\n        <div class="sgbp-row sgbp-row[m]--none">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row[m]--none">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row[m]--none">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("[l] none",'\n        <div class="sgbp-row sgbp-row[l]--none">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row[l]--none">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row[l]--none">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("[xl] none",'\n        <div class="sgbp-row sgbp-row[xl]--none">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row[xl]--none">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row[xl]--none">\n            Row 3\n        </div>\n      '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("xl, [m] none, inverse",'\n        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">\n            Row 1\n        </div>\n        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">\n            Row 2\n        </div>\n        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">\n            Row 3\n        </div>\n      ')]),__namedExportsOrder=["Standard"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return MaxWidthDecorator},y:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,MaxWidthDecorator=maxWidth=>storyFn=>`\n        <div style="max-width: ${maxWidth}">\n            ${storyFn()}\n        </div>\n    `},"./.storybook/renderers.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Sections},w:function(){return Section}});const Section=(title,content,classes="")=>`\n        <section class="sgbp-row sgbp-row--xl ${classes}">\n            <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText">\n                ${title}\n            </h3>\n            ${content}\n        </section>\n    `,Sections=sections=>sections.join("")}}]);