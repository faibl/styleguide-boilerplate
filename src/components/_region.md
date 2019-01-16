## Region

Regions have nice paddings and different background colors depending on their type

### Region (default)

    @example
    <div class="sgbp-region sgbp-region--default">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (primary)

    @example
    <div class="sgbp-region sgbp-region--primary">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (secondary)
  
    @example
    <div class="sgbp-region sgbp-region--secondary">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (focusable)

Highlight the region if an element inside that region is focused

    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--focusable">
        <input type="text" class="sgbp-input" placeholder="Placeholder ...">
    </div>

### Region (small)
  
    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--small">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (big)
  
    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--big">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (rounded)
  
    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--rounded">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (vertical only)
  
    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--verticalOnly">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (horizontal only)
  
    @example
    <div class="sgbp-region sgbp-region--secondary sgbp-region--horizontalOnly">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.
    </div>

### Region (example layout):

    @example
    <div class="sgbp-pageWrapper">
        <div class="sgbp-region sgbp-region--secondary">
            <div class="sgbp-region sgbp-centered sgbp-centered--horizontally sgbp-row sgbp-row--bigMargin">
                [LOGO]
            </div>
                <h2 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText ">Sie haben Ihr Passwort vergessen?</h2>
            <div class="sgbp-region sgbp-region--big sgbp-region--primary sgbp-region--focusable">               
                <label class="sgbp-row sgbp-row--extraBigMargin">Geben Sie Ihre E-Mail-Adresse an, um Ihr Passwort zurückzusetzen:
                  <input type="text" class="sgbp-input" placeholder="me@mail.com">
                </label>
            </div>
        </div>
    </div>
