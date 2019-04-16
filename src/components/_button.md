## Button

### Button (default)

    @example
    <a class="sgbp-button sgbp-button">Default</a>
    <a class="sgbp-button sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--danger">Danger</a>

### Button (outline)

    @example
    <a class="sgbp-button sgbp-button--outline">Default</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--danger">Danger</a>

### Button (link)

    @example
    <a class="sgbp-button sgbp-button--link">Default</a>
    <a class="sgbp-button sgbp-button--link sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--link sgbp-button--danger">Danger</a>

### Button (is-active)

You can force the hover state by adding the `is-active` flag

    @example
    <a class="sgbp-button  is-active">Default</a>
    <a class="sgbp-button sgbp-button--accent is-active">Accent</a>
    <a class="sgbp-button sgbp-button--danger is-active">Danger</a>

### Button (disabled)

You can either use the `disabled` attribute or the `is-disabled` class.

    @example
    <button class="sgbp-button" disabled>Default</button>
    <button class="sgbp-button sgbp-button--accent" disabled>Accent</button>
    <button class="sgbp-button sgbp-button--danger" disabled>Disabled</button>

### Button (block)

    @example
    <a class="sgbp-button sgbp-button--block sgbp-button--accent">Button</a>

### Button (sizes)

    @example
    <a class="sgbp-button sgbp-button--small">Small</a>
    <a class="sgbp-button">Default</a>
    <a class="sgbp-button sgbp-button--big">Big</a>

### Button (with text and icon left)

    @example
    <a class="sgbp-button sgbp-button--accent">
        <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
        Button
    </a>

### Button (text and icon right)

    @example
    <a class="sgbp-button sgbp-button--accent">
        Button
        <svg class="sgbp-button__icon sgbp-button__icon--right sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
    </a>

### Button (icon only)

    @example
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--small sgbp-button--icon">
          <svg class="sgbp-icon sgbp-icon--small"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--small sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon sgbp-icon--small"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--big sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--big sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
