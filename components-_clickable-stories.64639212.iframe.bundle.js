"use strict";(self.webpackChunk_faibl_styleguide_boilerplate=self.webpackChunk_faibl_styleguide_boilerplate||[]).push([[609],{"./src/components/_clickable.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},touchy:function(){return touchy}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Clickable"};const Standard=()=>'\n    <div class="sgbp-clickable">\n        Clickable\n    </div>\n';Standard.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(['Changes the cursor to "pointer" on hovering'])];const touchy=()=>'\n    <div class="sgbp-clickable sgbp-clickable--touchy">\n        Clickable\n    </div>\n\n';touchy.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(["Slightly increases the touchable area"])];const __namedExportsOrder=["Standard","touchy"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{iI:function(){return UnpadHorizontally},yf:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,UnpadHorizontally=function(storyFn){return`\n        <div class="sgbp-region__unpadHorizontally">\n            ${storyFn()}\n        </div>\n    `}}}]);