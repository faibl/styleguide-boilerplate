"use strict";(self.webpackChunk_faibl_styleguide_boilerplate=self.webpackChunk_faibl_styleguide_boilerplate||[]).push([[48],{"./src/components/_animated.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Standard:function(){return Standard},__namedExportsOrder:function(){return __namedExportsOrder}}),__webpack_exports__.default={title:"Components/Animated"},window.kgrAnimatedDemo=function(id,effect){var demoElement=document.getElementById(id);Array.prototype.slice.call(demoElement.classList,0).filter((function(className){return/^sgbp-animated--/.test(className)})).forEach((function(className){demoElement.classList.remove(className)})),setTimeout((function(){demoElement.classList.add("sgbp-animated--"+effect)}),0)};const Standard=()=>'\n    <div style="overflow:hidden" class="sgbp-region sgbp-region--accent sgbp-row">\n        <div id="sgbp-animated-demo" class="sgbp-animated sgbp-region sgbp-region--gray">\n          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet\n        </div>\n    </div>\n\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'fadeIn\');">Fade in</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'zoomIn\');">Zoom in</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'slideInUp\');">slideInUp</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'slideOutDown\');">slideOutDown</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'bounceInDown\');">bounceInDown</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'rippleError\');">rippleError</button>\n    <button class="sgbp-button" onclick="kgrAnimatedDemo(\'sgbp-animated-demo\', \'rippleSuccess\');">rippleSuccess</button>\n',__namedExportsOrder=["Standard"]}}]);