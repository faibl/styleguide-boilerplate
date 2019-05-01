## Tooltip

### Tooltip (Default)

    @example
    <div class="sgbp-centered sgbp-centered--horizontally">
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--left">
            <span class="sgbp-tooltip__trigger">left</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">right</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom">
            <span class="sgbp-tooltip__trigger">bottom</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--top">
            <span class="sgbp-tooltip__trigger">top</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--top sgbp-tooltip--left">
            <span class="sgbp-tooltip__trigger">top left</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">bottom right</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">image content</span>
            <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Left&w=300&h=200">
          </div>
      </div>
    </div>

### Tooltip (Icon Trigger)

    @example
    <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--right">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>

### Tooltip (styled)

    @example
    <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--help sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
      <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
    </div>
    <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--help sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>

### Tooltip (only if hover is supported)

Add the class `sgbp-tooltip--onlyIfHover` if you only want the tooltip to be displayed on devices with hovering capabilities.
The tooltip will then not be displayed e.g. on regular touch screens (you can still programatically open/cose the tooltip, see below).

    @example
    <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--onlyIfHover">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>

### Tooltip (programatically set open state / no hover)

Add class `is-open` to force the tooltip to be open regardless of its hover state

This can be used either in conjunction with `sgbp-tooltip--onlyIfHover` (see above) or with `sgbp-tooltip--noHover` if you do not want the tooltip to automatically appear on hover.

    @example
    <div style="margin-bottom: 280px">
      <div class="sgbp-tooltip sgbp-tooltip--noHover sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled is-open" id="sgbp-tooltip-demoNoHover">
        <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent sgbp-clickable" onclick="document.getElementById('sgbp-tooltip-demoNoHover').classList.toggle('is-open')"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
        <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
      </div>
    </div>
