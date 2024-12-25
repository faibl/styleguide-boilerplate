"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[914],{"./src/components/_loadingContainer.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder},blocking:function(){return blocking}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Loading/Loading Container",decorators:[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Add class `is-loading` to show loading indicator"])]};const Standard=()=>'\n    <div class="sgbp-loadingContainer sgbp-region sgbp-region--lightGray sgbp-row" id="test-loading-container1">\n        <div class="sgbp-loadingContainer__loader">\n            <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator">Loading</div>\n        </div>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n    </div>\n    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById(\'test-loading-container1\').classList.toggle(\'is-loading\');">Toggle loading</button>\n',blocking=()=>'\n    <div class="sgbp-loadingContainer sgbp-region sgbp-region--lightGray is-blocking sgbp-row" id="test-loading-container2">\n        <div class="sgbp-loadingContainer__loader">\n            <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator">Loading</div>\n        </div>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n        <p>Lorem ipsum</p>\n    </div>\n    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById(\'test-loading-container2\').classList.toggle(\'is-loading\');">Toggle loading</button>\n';blocking.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Add class `is-blocking` to show blocking loading indicator"])];const __namedExportsOrder=["Standard","blocking"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return MaxWidthDecorator},y:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,MaxWidthDecorator=maxWidth=>storyFn=>`\n        <div style="max-width: ${maxWidth}">\n            ${storyFn()}\n        </div>\n    `}}]);