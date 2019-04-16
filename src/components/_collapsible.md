## Collapsible

The collapsible component comes with no special styling in order to be used as a foundation for more opinionated components e.g. Accordion.

### Collapsible (short content)

Toggle the class `is-open` to open/close the collapsible content

    @example
    <button class="sgbp-button sgbp-button--secondary sgbp-row" onclick="document.getElementById('sgbp-collapsible-demo-1').classList.toggle('is-open')">Toggle</button>
    <div class="sgbp-collapsible" id="sgbp-collapsible-demo-1">
        <div class="sgbp-collapsible__content">
           <p class="sgbp-row sgbp-row--extraBigMargin">Collapsible Content</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
        </div>
    </div>

### Collapsible (large content)

    @example
    <button class="sgbp-button sgbp-button--secondary sgbp-row" onclick="document.getElementById('sgbp-collapsible-demo-2').classList.toggle('is-open')">Toggle</button>
    <div class="sgbp-collapsible" id="sgbp-collapsible-demo-2">
        <div class="sgbp-collapsible__content">
           <p class="sgbp-row sgbp-row--extraBigMargin">Collapsible Content</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
           <p class="sgbp-row sgbp-row--extraBigMargin">&hellip;</p>
        </div>
    </div>

### Collapsible (overflowing content)

Add the modifier `sgbp-collapsible--withOverflow` if you have content inside the collapsible the should overlow (e.g. a tooltip).
Note: Thethe open/close transition does not work with overflowing content and is automatically turned off.

    @example
    <button class="sgbp-button sgbp-button--secondary sgbp-row" onclick="document.getElementById('sgbp-collapsible-demo-overflow').classList.toggle('is-open')">Toggle</button>
    <div class="sgbp-collapsible sgbp-collapsible--overflow" id="sgbp-collapsible-demo-overflow">
        <div class="sgbp-collapsible__content">
           <p class="sgbp-row">Collapsible Content with overflowing tooltip example</p>
           <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--right">
             <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
             <div class="sgbp-tooltip__content" style="width: 250px">
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
               Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
             </div>
           </div>
        </div>
    </div>
