## Button

### Button (default)
  
    @example
    <a class="sgbp-button sgbp-button--primary">Primary</a>
    <a class="sgbp-button sgbp-button--secondary">Secondary</a>
    <a class="sgbp-button sgbp-button--danger">Danger</a>

### Button (outline)
  
    @example
    <a class="sgbp-button sgbp-button--outline sgbp-button--primary">Primary</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--secondary">Secondary</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--danger">Danger</a>

### Button (is-active)
  
You can force the hover state by adding the `is-active` flag
  
    @example
    <a class="sgbp-button sgbp-button--primary is-active">Primary</a>
    <a class="sgbp-button sgbp-button--secondary  is-active">Secondary</a>
    <a class="sgbp-button sgbp-button--danger is-active">Danger</a>

### Button (disabled)

You can either use the ```disabled``` attribute or the ```is-disabled``` class.

    @example
    <button class="sgbp-button sgbp-button--primary" disabled>Primary</button>
    <button class="sgbp-button sgbp-button--secondary" disabled>Secondary</button>
    <button class="sgbp-button sgbp-button--danger" disabled>Disabled</button>

### Button (block)
  
    @example
    <a class="sgbp-button sgbp-button--block sgbp-button--primary">Button</a>

### Button (big)
  
    @example
    <a class="sgbp-button sgbp-button--big sgbp-button--primary">Button</a>

### Button (with text and icon left)

    @example
    <a class="sgbp-button sgbp-button--primary">
        <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
        Button
    </a>

### Button (text and icon right)
  
    @example
    <a class="sgbp-button sgbp-button--primary">
        Button
        <svg class="sgbp-button__icon sgbp-button__icon--right sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
    </a>

### Button (icon only)
  
    @example
    <a class="sgbp-button sgbp-button--primary sgbp-button--icon">
        <svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
    </a>
    <a class="sgbp-button sgbp-button--secondary sgbp-button--icon">
        <svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
    </a>
