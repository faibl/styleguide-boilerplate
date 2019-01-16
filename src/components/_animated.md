## Animated

    @example
    <script>
    function sgbpAnimatedDemo(id, effect) {
      var removeAllClassesFromElement = function(element) {
        var classNamesToRemove =  Array.prototype.slice.call(element.classList, 0).filter(function(className) {
          return /^sgbp-animated/.test(className);
        });
        
        classNamesToRemove.forEach(function(className) {
          element.classList.remove(className);
        });
      }
    
      var demoElement = document.getElementById(id);
      demoElement.classList.add('sgbp-animated');
      demoElement.classList.add('sgbp-animated--' + effect);
      
      setTimeout(removeAllClassesFromElement.bind(null, demoElement), 500);
    }
    </script>
    <div style="overflow:hidden" class="sgbp-region sgbp-region--primary sgbp-row">
        <div id="sgbp-animated-demo" class="sgbp-region sgbp-region--secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        </div>
    </div>
    
    <button class="sgbp-button sgbp-button--primary" onclick="sgbpAnimatedDemo('sgbp-animated-demo', 'fadeIn');">Fade in</button>
    <button class="sgbp-button sgbp-button--primary" onclick="sgbpAnimatedDemo('sgbp-animated-demo', 'zoomIn');">Zoom in</button>
    <button class="sgbp-button sgbp-button--primary" onclick="sgbpAnimatedDemo('sgbp-animated-demo', 'slideInUp');">slideInUp</button>
    <button class="sgbp-button sgbp-button--primary" onclick="sgbpAnimatedDemo('sgbp-animated-demo', 'slideOutDown');">slideOutDown</button>
    <button class="sgbp-button sgbp-button--primary" onclick="sgbpAnimatedDemo('sgbp-animated-demo', 'bounceInDown');">bounceInDown</button>
    
