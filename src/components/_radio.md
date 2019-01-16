## Radio Button

### Radio Button (default)

    @example
    <label class="sgbp-radio">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-default">
        <span class="sgbp-radio__label">Radio Button 1</span>
    </label>
    <label class="sgbp-radio">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-default">
        <span class="sgbp-radio__label">Radio Button 2</span>
    </label>

### Radio Button (inline)
  
    @example
    <label class="sgbp-radio sgbp-radio--inline">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-inline">
        <span class="sgbp-radio__label">Radio Button 1</span>
    </label>
    <label class="sgbp-radio sgbp-radio--inline">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-inline">
        <span class="sgbp-radio__label">Radio Button 2</span>
    </label>

### Radio (disabled)

    @example
    <label class="sgbp-checkbox is-disabled">
        <input type="checkbox" class="sgbp-checkbox__control" disabled>
        <span class="sgbp-checkbox__label">Radio 1</span>
    </label>
    <label class="sgbp-checkbox is-disabled">
        <input type="checkbox" class="sgbp-checkbox__control" disabled checked>
        <span class="sgbp-checkbox__label">Radio 2</span>
    </label>

### Radio Button (small)
  
    @example
    <label class="sgbp-radio sgbp-radio--small">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-small">
        <span class="sgbp-radio__label">Radio Button 1</span>
    </label>
    <label class="sgbp-radio sgbp-radio--small">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-small">
        <span class="sgbp-radio__label">Radio Button 2</span>
    </label>

### Radio Button (big)

    @example
    <label class="sgbp-radio sgbp-radio--big">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-big">
        <span class="sgbp-radio__label">Yes, please subscribe me to your email list.</span>
    </label>
    <label class="sgbp-radio sgbp-radio--big">
        <input type="radio" class="sgbp-radio__control" name="sgbp-radio-demo-big">
        <span class="sgbp-radio__label">No, please leave me alone</span>
    </label>

### Radio Button (Fake)

You can visually fake radioes without using ```<input type="radio">``` form elements.
Please make sure to toggle the class ```is-checked``` on the ```sgbp-radio``` element.

    @example
    <label class="sgbp-radio">
        <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio Button 1</span>
    </label>
    <label class="sgbp-radio">
        <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio Button 2</span>
    </label>
