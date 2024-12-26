"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[219],{"./src/components/_accordion.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder}}),__webpack_exports__.default={title:"Components/Accordion"};const Standard=()=>'\n<div class="sgbp-accordion">\n    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--gray50 sgbp-region--roundedSmall">\n        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle(\'is-open\');this.parentElement.querySelector(\'.sgbp-collapsible\').classList.toggle(\'is-open\')">\n            <div class="sgbp-accordion__itemHeaderLeft">\n                <span class="sgbp-accordion__itemHeadline">Accordion Item 1</span>\n            </div>\n            <div class="sgbp-accordion__itemHeaderRight">\n                <div class="sgbp-accordion__itemHeaderRight">\n                    <div class="sgbp-badge sgbp-badge--highlight">4/17</div>\n                    <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>\n                </div>\n            </div>\n        </button>\n        <div class="sgbp-collapsible">\n            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            </div>\n        </div>\n    </div>\n    <div class="sgbp-accordion__item  sgbp-accordion__item sgbp-region sgbp-region--gray50 sgbp-region--roundedSmall is-open">\n        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle(\'is-open\');this.parentElement.querySelector(\'.sgbp-collapsible\').classList.toggle(\'is-open\')">\n            <div class="sgbp-accordion__itemHeaderLeft">\n                <span class="sgbp-accordion__itemHeadline">Accordion Item 2</span>\n            </div>\n            <div class="sgbp-accordion__itemHeaderRight">\n                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>\n            </div>\n        </button>\n        <div class="sgbp-collapsible is-open">\n            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            </div>\n        </div>\n    </div>\n    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--gray50 sgbp-region--roundedSmall">\n        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle(\'is-open\');this.parentElement.querySelector(\'.sgbp-collapsible\').classList.toggle(\'is-open\')">\n            <div class="sgbp-accordion__itemHeaderLeft">\n                <span class="sgbp-accordion__itemHeadline">Accordion Item With overflowing content</span>\n            </div>\n            <div class="sgbp-accordion__itemHeaderRight">\n                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>\n            </div>\n        </button>\n        <div class="sgbp-collapsible sgbp-collapsible--overflow">\n            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">\n               <p class="sgbp-row">Collapsible Content with overflowing tooltip example (Using the "sgbp-collapsible--overflow" modifier). Open/Close transitions get automativally disabled in favor of overlowing content.</p>\n               <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--right">\n                 <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>\n                 <div class="sgbp-tooltip__content" style="width: 250px">\n                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>\n                   Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>\n                 </div>\n               </div>\n            </div>\n        </div>\n    </div>\n    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--gray50 sgbp-region--roundedSmall">\n        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle(\'is-open\');this.parentElement.querySelector(\'.sgbp-collapsible\').classList.toggle(\'is-open\')">\n            <div class="sgbp-accordion__itemHeaderLeft">\n                <span class="sgbp-accordion__itemHeadline">Long Content</span>\n            </div>\n            <div class="sgbp-accordion__itemHeaderRight">\n                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>\n            </div>\n        </button>\n        <div class="sgbp-collapsible">\n            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>\n            </div>\n        </div>\n    </div>\n    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--gray50 sgbp-region--roundedSmall">\n        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle(\'is-open\');this.parentElement.querySelector(\'.sgbp-collapsible\').classList.toggle(\'is-open\')">\n            <div class="sgbp-accordion__itemHeaderLeft">\n                <span class="sgbp-accordion__itemHeadline">Long Header item name Lorem ipsum dolor sit amet</span>\n            </div>\n            <div class="sgbp-accordion__itemHeaderRight">\n                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>\n            </div>\n        </button>\n        <div class="sgbp-collapsible">\n            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">\n                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.\n            </div>\n        </div>\n    </div>\n</div>\n',__namedExportsOrder=["Standard"]}}]);