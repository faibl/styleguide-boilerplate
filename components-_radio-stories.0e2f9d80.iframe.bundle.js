"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[600],{"./src/components/_radio.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Invalid:function(){return Invalid},Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},disabled:function(){return disabled},fake:function(){return fake},inInputGroup:function(){return inInputGroup},inline:function(){return inline},labelFirst:function(){return labelFirst},sizes:function(){return sizes},standalone:function(){return standalone},white:function(){return white}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Forms/Radio"};const Standard=()=>'\n    <label class="sgbp-radio sgbp-row">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 1</span>\n    </label>\n    <label class="sgbp-radio">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 2</span>\n    </label>\n',standalone=()=>'\n        <label class="sgbp-radio">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label"></span>\n    </label>\n';standalone.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(["You need to provide an empty `sgbp-radio__label` element in order to display standalone radioes without labels"])];const inInputGroup=()=>'\n<div class="sgbp-inputGroup">\n    <div class="sgbp-inputGroup__label">Label for the radio group</div>\n    <label class="sgbp-radio sgbp-row">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 1</span>\n    </label>\n    <label class="sgbp-radio">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 2</span>\n    </label>\n</div>\n';inInputGroup.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(["If wrapped in a `sgbp-inputGroup` element then an additional top margin is applied to the first radio button"])];const inline=()=>'\n    <label class="sgbp-radio sgbp-radio--inline">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 1</span>\n    </label>\n    <label class="sgbp-radio sgbp-radio--inline">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 2</span>\n    </label>\n',disabled=()=>'\n    <label class="sgbp-radio is-disabled">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control" disabled>\n        <span class="sgbp-radio__label">Radio 1</span>\n    </label>\n',white=()=>'\n    <div class="sgbp-region sgbp-region--gray">\n      <label class="sgbp-radio sgbp-radio--white sgbp-row">\n          <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n          <span class="sgbp-radio__label">Radio 1</span>\n      </label>\n      <label class="sgbp-radio sgbp-radio--white">\n          <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n          <span class="sgbp-radio__label">Radio 2</span>\n      </label>\n    </div>\n',sizes=()=>'\n    <label class="sgbp-radio sgbp-radio--small sgbp-row">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Small</span>\n    </label>\n\n    <label class="sgbp-radio sgbp-row">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Default</span>\n    </label>\n    \n    <label class="sgbp-radio sgbp-radio--big">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Big</span>\n    </label>\n',Invalid=()=>'\n    <label class="sgbp-radio sgbp-row">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio Option 1</span>\n    </label>\n    <label class="sgbp-radio is-invalid">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio Option 2 (invalid)</span>\n    </label>\n',labelFirst=()=>'\n    <label class="sgbp-radio sgbp-radio--labelFirst sgbp-row sgbp-row--s">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 1</span>\n    </label>\n    <label class="sgbp-radio sgbp-radio--labelFirst">\n        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">\n        <span class="sgbp-radio__label">Radio 2</span>\n    </label>\n',fake=()=>'\n    <div class="sgbp-row">\n        <label class="sgbp-radio">\n            <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle(\'is-checked\')">Radio 1</span>\n        </label>\n    </div>\n    <label class="sgbp-radio sgbp-row">\n        <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle(\'is-checked\')">Radio 2</span>\n    </label>\n';fake.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(['You can visually fake radioes without using `<input type="radio">` form elements.',"Please make sure to toggle the class `is-checked` on the `sgbp-radio` element."])];const __namedExportsOrder=["Standard","standalone","inInputGroup","inline","disabled","white","sizes","Invalid","labelFirst","fake"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{iI:function(){return UnpadHorizontally},yf:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,UnpadHorizontally=function(storyFn){return`\n        <div class="sgbp-region__unpadHorizontally">\n            ${storyFn()}\n        </div>\n    `}}}]);