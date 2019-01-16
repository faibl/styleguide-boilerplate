## Modal

### Modal (default)

    @example
    <script>
    function shpModalDemoOpen(id, animationClass) {
      var animationClasses = ['sgbp-modal--bounceInDown', 'sgbp-modal--slideInUp', 'sgbp-modal--zoomIn', 'sgbp-modal--fadeIn'];
      var element = document.getElementById(id);
      
      if (animationClass) {
        animationClasses.forEach(function(className) { element.classList.remove(className); });
        element.classList.add(animationClass);
      }
    
      var demoElement = document.getElementById(id);
      demoElement.classList.add('is-open');
      document.querySelector('html').classList.add('is-sgbp-modal-open');
    }
    
    function shpModalDemoClose(id) {
      document.getElementById(id).classList.remove('is-open');
      document.querySelector('html').classList.remove('is-sgbp-modal-open');
    }
    </script>
    <div class="sgbp-modal" id="test-modal-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region">
                <div class="sgbp-modal__headerContent">
                    <div class="sgbp-row sgbp-row--extraSmallMargin"><h1 class="sgbp-headline sgbp-headline--h4 sgbp-headline--primary">Modal Headline</h1></div>
                    <h2 class="sgbp-headline sgbp-headline--h6 sgbp-headline--primary">Subheadline</h2>
                </div>
                <div class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </div>
           </div>
           <div class="sgbp-modal__content sgbp-region">
                <div class="sgbp-readingBlock">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                </div>
           </div>
           <div class="sgbp-modal__footer sgbp-region">
                <div class="sgbp-postfix sgbp-postfix--between">
                     <div class="sgbp-postfix__fixed">
                         <button type="button" class="sgbp-button sgbp-button--secondary sgbp-button--wide" onclick="shpModalDemoClose('test-modal-open')">Close</button>
                     </div>
                     <div class="sgbp-postfix__fixed">
                         <button type="button" class="sgbp-button sgbp-button--primary sgbp-button--wide">Submit</button>
                     </div>
                </div>
           </div>
       </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>

### Modal (fullWidth)

    @example
    <div class="sgbp-modal sgbp-modal--fullWidth" id="test-modal-fullWidth-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region">
                <div class="sgbp-modal__headerContent">
                    <div class="sgbp-row sgbp-row--extraSmallMargin"><h1 class="sgbp-headline sgbp-headline--h4 sgbp-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullWidth-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </span>
           </div>
           <div class="sgbp-modal__content sgbp-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-fullWidth-open')">Open modal</button>


### Modal (fullHeight)

    @example
    <div class="sgbp-modal sgbp-modal--fullHeight sgbp-modal--zoomIn" id="test-modal-fullHeight-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region">
                <div class="sgbp-modal__headerContent">
                    <div class="sgbp-row sgbp-row--extraSmallMargin"><h1 class="sgbp-headline sgbp-headline--h4 sgbp-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullHeight-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#clear"></use>
                    </svg>
                </span>
           </div>
           <div class="sgbp-modal__content sgbp-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-fullHeight-open')">Open modal</button>

### Modal (custom animation)

You can control the entry animation by adding these modifiers: `sgbp-modal--zoomIn`, `sgbp-modal--fadeIn`, `sgbp-modal--slideInUp`, `sgbp-modal--bounceInDown` (if the animation component is included).

    @example
    <div class="sgbp-modal sgbp-modal--fadeIn" id="test-modal-animation">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__content sgbp-region" style="width: 300px; height: 250px;">
               Modal Content
           </div>
           <div class="sgbp-modal__footer sgbp-region">
                <button type="button" class="sgbp-button sgbp-button--secondary sgbp-button--wide" onclick="shpModalDemoClose('test-modal-animation')">Close</button>
           </div>
       </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--zoomIn')">zoomIn</button>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--fadeIn')">fadeIn</button>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--slideInUp')">slideInUp</button>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--bounceInDown')">bounceInDown</button>
