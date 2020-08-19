export default {
    title: 'Components/Animated',
}

window.kgrAnimatedDemo = function(id, effect) {
    var demoElement = document.getElementById(id);
    var classNamesToRemove =  Array.prototype.slice.call(demoElement.classList, 0).filter(function(className) {
        return /^sgbp-animated--/.test(className);
    });

    classNamesToRemove.forEach(function(className) {
        demoElement.classList.remove(className);
    });
    setTimeout(function() { demoElement.classList.add('sgbp-animated--' + effect); }, 0);

}

export const Standard = () => `
    <div style="overflow:hidden" class="sgbp-region sgbp-region--accent sgbp-row">
        <div id="sgbp-animated-demo" class="sgbp-animated sgbp-region sgbp-region--gray">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </div>
    </div>

    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'fadeIn');">Fade in</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'zoomIn');">Zoom in</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'slideInUp');">slideInUp</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'slideOutDown');">slideOutDown</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'bounceInDown');">bounceInDown</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'rippleError');">rippleError</button>
    <button class="sgbp-button" onclick="kgrAnimatedDemo('sgbp-animated-demo', 'rippleSuccess');">rippleSuccess</button>
`;
