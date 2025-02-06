"use strict";(self.webpackChunk_faibl_styleguide_boilerplate=self.webpackChunk_faibl_styleguide_boilerplate||[]).push([[567],{"./src/components/_region.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:function(){return Colors},ExampleLayout:function(){return ExampleLayout},Padding:function(){return Padding},Sizes:function(){return Sizes},__namedExportsOrder:function(){return __namedExportsOrder},clickable:function(){return clickable},geometry:function(){return geometry}});var _storybook_renderers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/renderers.js"),_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js");__webpack_exports__.default={title:"Components/Region",decorators:[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.yf)(["Regions come with different paddings, colors and shapes"])]};const loremIpsum='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.',Colors=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Default",`\n                <div class="sgbp-region">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("White",`\n                <div class="sgbp-region sgbp-region--white">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Black",`\n                <div class="sgbp-region sgbp-region--black">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Warning",`\n                <div class="sgbp-region sgbp-region--warning">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Gray 25",`\n                <div class="sgbp-region sgbp-region--white">\n                    <div class="sgbp-region sgbp-region--gray25">\n                        ${loremIpsum}\n                    </div>\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Gray 50",`\n                <div class="sgbp-region sgbp-region--gray50">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Gray 100",`\n                <div class="sgbp-region sgbp-region--gray100">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Gray 200",`\n                <div class="sgbp-region sgbp-region--gray200">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent",`\n                <div class="sgbp-region sgbp-region--accent">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 50",`\n                <div class="sgbp-region sgbp-region--accent50">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 100",`\n                <div class="sgbp-region sgbp-region--accent100">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 200",`\n                <div class="sgbp-region sgbp-region--accent200">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 400",`\n                <div class="sgbp-region sgbp-region--accent400">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 500",`\n                <div class="sgbp-region sgbp-region--accent500">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 600",`\n                <div class="sgbp-region sgbp-region--accent600">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 700",`\n                <div class="sgbp-region sgbp-region--accent700">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight",`\n                <div class="sgbp-region sgbp-region--highlight">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 100",`\n                <div class="sgbp-region sgbp-region--highlight100">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 300",`\n                <div class="sgbp-region sgbp-region--highlight300">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 500",`\n                <div class="sgbp-region sgbp-region--highlight500">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 700",`\n                <div class="sgbp-region sgbp-region--highlight700">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 800",`\n                <div class="sgbp-region sgbp-region--highlight800">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight, high contrast in accessible color scheme",`\n                <div id="demoRegionHIghContrast">\n                    <button class="sgbp-button sgbp-row"\n                            onclick="document.getElementById('demoRegionHIghContrast').classList.toggle('is-sgbp-accessibleColorScheme')">\n                        Toggle accessible color scheme\n                    </button>\n                    <div class="sgbp-region sgbp-region--highlight sgbp-region--highContrastInAccessibleColorScheme">\n                        ${loremIpsum}\n                    </div>\n                </div>\n            `)]),Sizes=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("XS",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--xs">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("S",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--s">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("M (default)",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--m">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("L",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--l">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("2XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--2xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("3XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--3xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("4XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--4xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("5XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--5xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("6XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--6xl">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("7XL",`\n    <div class="sgbp-region sgbp-region--gray200 sgbp-region--7xl">${loremIpsum}</div>`)]),Padding=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Default",`\n                <div class="sgbp-region sgbp-region--gray200">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Vertical only",`\n                <div class="sgbp-region sgbp-region--gray200 sgbp-region--verticalOnly">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Horizontal only",`\n                <div class="sgbp-region sgbp-region--gray200 sgbp-region--horizontalOnly">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("No padding",`\n                <div class="sgbp-region sgbp-region--gray200 sgbp-region--noPadding">\n                    ${loremIpsum}\n                </div>\n            `),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Unpad top",'\n                <div class="sgbp-region sgbp-region--gray200">\n                    <div class="sgbp-region__unpadTop">\n                        <div class="sgbp-region sgbp-region--accent">\n                            Inner region - top unpadded\n                        </div>\n                    </div>\n                    <div class="sgbp-row sgbp-row--xl">Outer region content</div>\n                </div>\n            '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Unpad bottom",'\n                <div class="sgbp-region sgbp-region--gray200">\n                    <div class="sgbp-row sgbp-row--xl">Outer region content</div>\n                    <div class="sgbp-region__unpadBottom">\n                        <div class="sgbp-region sgbp-region--accent">\n                            Inner region - bottom unpadded\n                        </div>\n                    </div>\n                </div>\n            '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Unpad horizontally",'\n                <div class="sgbp-region sgbp-region--gray200">\n                    <div class="sgbp-row">Outer region content</div>\n                    <div class="sgbp-region__unpadHorizontally">\n                        <div class="sgbp-region sgbp-region--accent">\n                            Inner region - horizontally unpadded\n                        </div>\n                    </div>\n                </div>\n            '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Unpad bottom and horizontally",'\n                <div class="sgbp-region sgbp-region--gray200">\n                    <div class="sgbp-row">Outer region content</div>\n                    <div class="sgbp-region__unpadBottom sgbp-region__unpadHorizontally">\n                        <div class="sgbp-region sgbp-region--accent">\n                            Inner region - horizontally and bottom unpadded\n                        </div>\n                    </div>\n                </div>\n            '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Override top padding: top L, top [XL] 6XL",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--topL sgbp-region[xl]--top6XL">\n                ${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Override bottom padding: bottom L, bottom [XL] 3XL",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--bottomL sgbp-region[xl]--bottom3XL">\n                ${loremIpsum}\n            </div>`)]),geometry=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded (default)",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded 2XS",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded2XS">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded XS",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedXS">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded S",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedS">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded M",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedM">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded L",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedL">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded Top Only",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--roundedTopOnly">${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded Bottom Only",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--roundedBottomOnly">\n                ${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Force rounded",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--forceRounded">${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered",`\n            <div class="sgbp-region sgbp-region--white sgbp-region--bordered">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered highlight100",`\n            <div class="sgbp-region sgbp-region--highlight100 sgbp-region--bordered">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered gray50",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered">${loremIpsum}</div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered and rounded gray50",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--rounded">${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered gray 50, black border",`\n            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered  sgbp-region--borderedBlack sgbp-region--rounded">\n                ${loremIpsum}\n            </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Depth",`\n            <div class="sgbp-region sgbp-region--depth">${loremIpsum}</div>`)]),clickable=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Rounded",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--clickable">${loremIpsum}\n                    /div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--clickable">${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered and rounded",`\n                <div class="sgbp-region sgbp-region--white sgbp-region--bordered sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bordered (black)",`\n                <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--borderedBlack sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent",`\n                <div class="sgbp-region sgbp-region--accent sgbp-region--rounded sgbp-region--clickable">${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 200",`\n                <div class="sgbp-region sgbp-region--accent200 sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 600",`\n                <div class="sgbp-region sgbp-region--accent600 sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Accent 700",`\n                <div class="sgbp-region sgbp-region--accent700 sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight",`\n                <div class="sgbp-region sgbp-region--highlight sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Highlight 300",`\n                <div class="sgbp-region sgbp-region--highlight300 sgbp-region--rounded sgbp-region--clickable">\n                    ${loremIpsum}\n                </div>`)]),ExampleLayout=()=>'\n    <div class="sgbp-region sgbp-region--accent">\n        Header (accent)\n    </div>\n    <div class="sgbp-region sgbp-region--gray200">\n        Sub-Header (gray)\n    </div>\n    <div style="display: flex;">\n        <div class="sgbp-region sgbp-region--gray50" style="flex-basis: 200px">\n            Sidebar (lightGray)\n        </div>\n        <div class="sgbp-region sgbp-region--white">\n            Main Content (default)\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n            <p class="sgbp-row sgbp-row--m">...</p>\n        </div>\n    </div>\n    <div class="sgbp-region sgbp-region--accent sgbp-region--xl">\n        <div class="sgbp-row">Footer (accent)</div>\n        <div class="sgbp-region sgbp-region--m sgbp-region--accent600 sgbp-region--rounded">\n\n            <div class="sgbp-row">Nested Footer (accent medium, rounded)</div>\n\n            <div class="sgbp-region sgbp-region--m sgbp-region--accent700 sgbp-region--rounded sgbp-row">\n                Deeply nested 1 (accent dark, rounded)\n            </div>\n\n            <div class="sgbp-region sgbp-region--m sgbp-region--highlight sgbp-region--rounded">\n                Deeply nested 2 (highlight, rounded)\n            </div>\n        </div>\n    </div>\n';ExampleLayout.story={decorators:[_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.iI]};const __namedExportsOrder=["Colors","Sizes","Padding","geometry","clickable","ExampleLayout"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{iI:function(){return UnpadHorizontally},yf:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,UnpadHorizontally=function(storyFn){return`\n        <div class="sgbp-region__unpadHorizontally">\n            ${storyFn()}\n        </div>\n    `}},"./.storybook/renderers.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Sections},w:function(){return Section}});const Section=(title,content,classes="")=>`\n        <section class="sgbp-row sgbp-row--xl ${classes}">\n            <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText">\n                ${title}\n            </h3>\n            ${content}\n        </section>\n    `,Sections=sections=>sections.join("")}}]);