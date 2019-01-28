## Checkbox

### Checkbox (default)

    @example
    <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>

### Checkbox (standalone)

You need to provide an empty `sgbp-checkbox__label` element in order to display standalone checkboxes without labels

    @example
    <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label"></span>
    </label>

### Checkbox (inline)
  
    @example
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>


### Checkbox (disabled)

    @example
    <label class="sgbp-checkbox is-disabled">
        <input type="checkbox" class="sgbp-checkbox__control" disabled>
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox is-disabled">
        <input type="checkbox" class="sgbp-checkbox__control" disabled checked>
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>


### Checkbox (small)
  
    @example
    <label class="sgbp-checkbox sgbp-checkbox--small">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--small">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>

### Checkbox (big)

    @example
    <label class="sgbp-checkbox sgbp-checkbox--big">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Yes, please subscribe me to your email list. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</span>
    </label>

### Checkbox (Fake)

You can visually fake checkboxes without using ```<input type="checkbox">``` form elements.
Please make sure to toggle the class ```is-checked``` on the ```sgbp-checkbox``` element.

    @example
    <label class="sgbp-checkbox">
        <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox">
        <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 2</span>
    </label>
