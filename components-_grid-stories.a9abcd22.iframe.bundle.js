"use strict";(self.webpackChunkzeit_styleguide=self.webpackChunkzeit_styleguide||[]).push([[835],{"./src/components/_grid.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alignment:function(){return Alignment},Double:function(){return Double},ResponsiveFlowing:function(){return ResponsiveFlowing},ResponsiveFlowingCenterWidowLine:function(){return ResponsiveFlowingCenterWidowLine},ResponsiveUnEqual:function(){return ResponsiveUnEqual},Shrink:function(){return Shrink},Triple:function(){return Triple},Unequal:function(){return Unequal},__namedExportsOrder:function(){return __namedExportsOrder},equalColumns:function(){return equalColumns},gutters:function(){return gutters},inline:function(){return inline},nesting:function(){return nesting},responsive:function(){return responsive},responsiveReordering:function(){return responsiveReordering},vertical:function(){return vertical}});var _storybook_decorators__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/decorators.js"),_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./.storybook/renderers.js");__webpack_exports__.default={title:"Components/Layout/Grid"};const equalColumns=()=>'\n    <div class="sgbp-grid">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 2</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n    </div>\n';equalColumns.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They’re also equal height by default."])];const gutters=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Row and column gutters (default gutters)",'\n        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Only row gutters",'\n        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--rowGutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        </div>\n        '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Only column gutters",'\n        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--columnGutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        </div>\n        '),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Big row and column gutters",'\n        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters sgbp-grid--bigGutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        </div>\n        ')]);gutters.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["By default, grid cells do not have any padding between each other.","This is especially useful for non-textual content like images, video, street maps etc.","However, if you do need padding, you can simply add the class `sgbp-grid--gutters` to your grid container element, as done in most of the examples that follow."])];const inline=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters sgbp-grid--inlineBlock">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 with more content</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--full sgbp-grid__example">cell 4 full width</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 with even more content</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 5</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 6</div>\n    </div>\n',Double=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--double sgbp-grid__example">cell 2 (double)</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n    </div>\n',Triple=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--triple sgbp-grid__example">cell 2 (triple)</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n    </div>\n',Shrink=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n    </div>\n',vertical=()=>'\n    <div style="height: 400px;">\n        <div class="sgbp-grid sgbp-grid--vertical sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n            <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>\n    </div>\n';vertical.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Stack your grid vertically by adding the `sgbp-grid--vertical` modifier"])];const Unequal=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__cell--1of12 sgbp-grid__example">1of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--2of12 sgbp-grid__example">2of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--3of12 sgbp-grid__example">3of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__example">6of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--8of12 sgbp-grid__example">8of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--4of12 sgbp-grid__example">4of12</div>\n    </div>\n',responsive=()=>'\n    <div class="sgbp-grid sgbp-grid--full sgbp-grid--medium-fit sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n    </div>\n';responsive.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly."])];const ResponsiveFlowing=()=>'\n    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n    </div>\n',ResponsiveFlowingCenterWidowLine=()=>'\n    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters sgbp-grid--centerWidowLine">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>\n    </div>\n',responsiveReordering=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-backgroundColor--accent">Small first, medium last</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--medium-orderFirst sgbp-backgroundColor--highlight">Small last, medium first</div>\n    </div>\n';responsive.decorators=[(0,_storybook_decorators__WEBPACK_IMPORTED_MODULE_0__.y)(["The two cells swap ordering when switching from small to medium."])];const ResponsiveUnEqual=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-3of12 sgbp-grid__example">small 6of12; medium 3of12</div>\n        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-9of12 sgbp-grid__example">small 6of12; medium 9of12</div>\n    </div>\n',Alignment=()=>(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.Z)([(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Stretched (Default)",'\n        <div class="sgbp-grid sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>\n            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Top",'\n        <div class="sgbp-grid sgbp-grid--top sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>\n            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Center",'\n        <div class="sgbp-grid sgbp-grid--center sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>\n            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Bottom",'\n        <div class="sgbp-grid sgbp-grid--bottom sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>\n            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Baseline",'\n        <div class="sgbp-grid sgbp-grid--baseline sgbp-grid--gutters">\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>\n            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>\n            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n        </div>'),(0,_storybook_renderers__WEBPACK_IMPORTED_MODULE_1__.w)("Mixed",'\n        <div class="sgbp-grid sgbp-grid--gutters" style="height: 300px">\n            <div class="sgbp-grid__cell sgbp-grid__cell--top sgbp-grid__example">.sgbp-grid__cell--top</div>\n            <div class="sgbp-grid__cell sgbp-grid__cell--center sgbp-grid__example">.sgbp-grid__cell--center</div>\n            <div class="sgbp-grid__cell sgbp-grid__cell--bottom sgbp-grid__example">.sgbp-grid__cell--bottom</div>\n        </div>')]),nesting=()=>'\n    <div class="sgbp-grid sgbp-grid--gutters">\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>\n        <div class="sgbp-grid__cell sgbp-grid__example">\n           <div class="sgbp-grid sgbp-grid--gutters">\n               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.a</div>\n               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.b</div>\n           </div>\n        </div>\n        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>\n    </div>\n',__namedExportsOrder=["equalColumns","gutters","inline","Double","Triple","Shrink","vertical","Unequal","responsive","ResponsiveFlowing","ResponsiveFlowingCenterWidowLine","responsiveReordering","ResponsiveUnEqual","Alignment","nesting"]},"./.storybook/decorators.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return MaxWidthDecorator},y:function(){return DescriptionDecorator}});const DescriptionDecorator=descriptions=>storyFn=>`\n        ${descriptions.reduce(((text,description)=>`${text}<div class="sgbp-paragraph">${description}</div>`),"")}\n        <hr class="sgbp-separator sgbp-separator--light">\n        ${storyFn()}\n    `,MaxWidthDecorator=maxWidth=>storyFn=>`\n        <div style="max-width: ${maxWidth}">\n            ${storyFn()}\n        </div>\n    `},"./.storybook/renderers.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Sections},w:function(){return Section}});const Section=(title,content,classes="")=>`\n        <section class="sgbp-row sgbp-row--xl ${classes}">\n            <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText">\n                ${title}\n            </h3>\n            ${content}\n        </section>\n    `,Sections=sections=>sections.join("")}}]);