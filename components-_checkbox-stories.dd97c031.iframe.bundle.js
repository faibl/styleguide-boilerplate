"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[164],{"./src/components/_checkbox.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},disabled:function(){return disabled},fake:function(){return fake},inInputGroup:function(){return inInputGroup},inline:function(){return inline},invalid:function(){return invalid},labelFirst:function(){return labelFirst},sizes:function(){return sizes},standalone:function(){return standalone},white:function(){return white}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Forms/Checkox"};const Standard=()=>'\n    <label class="sgbp-checkbox sgbp-row">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n    <label class="sgbp-checkbox">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 2</span>\n    </label>\n',standalone=()=>'\n        <label class="sgbp-checkbox">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label"></span>\n    </label>\n';standalone.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["You need to provide an empty `sgbp-checkbox__label` element in order to display standalone checkboxes without labels"])];const inInputGroup=()=>'\n<div class="sgbp-inputGroup">\n    <div class="sgbp-inputGroup__label">Label for the checkbox group</div>\n    <label class="sgbp-checkbox sgbp-row">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n    <label class="sgbp-checkbox">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 2</span>\n    </label>\n</div>\n<div class="sgbp-inputGroup">\n    <div class="sgbp-inputGroup__label">Label for the checkbox group</div>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 2</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 3</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 4</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 5</span>\n    </label>\n</div>\n';inInputGroup.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["If wrapped in a `sgbp-inputGroup` element then an additional top margin is applied to the first checkbox"])];const inline=()=>'\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--inline">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 2</span>\n    </label>\n',disabled=()=>'\n    <label class="sgbp-checkbox is-disabled">\n        <input type="checkbox" class="sgbp-checkbox__control" disabled>\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n',white=()=>'\n    <div class="sgbp-region sgbp-region--gray">\n      <label class="sgbp-checkbox sgbp-checkbox--white sgbp-row">\n          <input type="checkbox" class="sgbp-checkbox__control">\n          <span class="sgbp-checkbox__label">Checkbox 1</span>\n      </label>\n      <label class="sgbp-checkbox sgbp-checkbox--white">\n          <input type="checkbox" class="sgbp-checkbox__control">\n          <span class="sgbp-checkbox__label">Checkbox 2</span>\n      </label>\n    </div>\n',sizes=()=>'\n    <label class="sgbp-checkbox sgbp-checkbox--small sgbp-row">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Small</span>\n    </label>\n\n    <label class="sgbp-checkbox sgbp-row">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Default</span>\n    </label>\n    \n    <label class="sgbp-checkbox sgbp-checkbox--big">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Big</span>\n    </label>\n',invalid=()=>'\n    <label class="sgbp-checkbox is-invalid sgbp-row">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox with invalid state</span>\n    </label>\n',labelFirst=()=>'\n    <label class="sgbp-checkbox sgbp-checkbox--labelFirst sgbp-row sgbp-row--s">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 1</span>\n    </label>\n    <label class="sgbp-checkbox sgbp-checkbox--labelFirst">\n        <input type="checkbox" class="sgbp-checkbox__control">\n        <span class="sgbp-checkbox__label">Checkbox 2</span>\n    </label>\n',fake=()=>'\n    <div class="sgbp-row">\n        <label class="sgbp-checkbox">\n            <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle(\'is-checked\')">Checkbox 1</span>\n        </label>\n    </div>\n    <label class="sgbp-checkbox sgbp-row">\n        <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle(\'is-checked\')">Checkbox 2</span>\n    </label>\n';fake.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(['You can visually fake checkboxes without using `<input type="checkbox">` form elements.',"Please make sure to toggle the class `is-checked` on the `sgbp-checkbox` element."])];const __namedExportsOrder=["Standard","standalone","inInputGroup","inline","disabled","white","sizes","invalid","labelFirst","fake"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return MaxWidthDecorator},y:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,MaxWidthDecorator=maxWidth=>storyFn=>`\n        <div style="max-width: ${maxWidth}">\n            ${storyFn()}\n        </div>\n    `}}]);