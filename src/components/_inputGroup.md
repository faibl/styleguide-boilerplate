## Input Group

### Input Group (with label and error message)

    @example
    <label class="sgbp-inputGroup">
        <span class="sgbp-inputGroup__label">Title</span>
        <div class="sgbp-inputGroup__text sgbp-inputGroup__text--error">This is an error!</div>
        <input type="text" class="sgbp-input sgbp-input--stateful is-invalid" value="input value">
    </label>

### Input Group (with label and text)

    @example
    <label class="sgbp-inputGroup">
        <span class="sgbp-inputGroup__label">Title</span>
        <div class="sgbp-inputGroup__text">This is some help text to further clarify the usage of the given form field.</div>
        <input type="text" class="sgbp-input" value="input value">
    </label>

### Input Group (inline)

    @example
    <label class="sgbp-inputGroup sgbp-inputGroup--inline">
        <span class="sgbp-inputGroup__label">Title</span>
        <input type="text" class="sgbp-input">
    </label>
    <label class="sgbp-inputGroup sgbp-inputGroup--inline">
        <span class="sgbp-inputGroup__label">Firstname</span>
        <input type="text" class="sgbp-input">
    </label>
    <label class="sgbp-inputGroup sgbp-inputGroup--inline">
        <span class="sgbp-inputGroup__label">Lastname</span>
        <input type="text" class="sgbp-input">
    </label>

### Input Group (constrained width)

    @example
    <label class="sgbp-inputGroup sgbp-inputGroup--constrainedWidth">
        <span class="sgbp-inputGroup__label">Title</span>
        <input type="text" class="sgbp-input">
    </label>

### Input Group (with input addon)

    @example
    <label class="sgbp-inputGroup sgbp-inputGroup--constrainedWidth">
        <span class="sgbp-inputGroup__label">Amount</span>
        <div class="sgbp-inputGroup__text">This is some help text to further clarify the usage of the given form field.</div>
        <div class="sgbp-inputAddon sgbp-row">
            <div class="sgbp-inputAddon__addon">$</div>
            <input type="text" class="sgbp-inputAddon__input sgbp-input">
        </div>
    </label>

### Input Group (horizontal)

    @example
    <label class="sgbp-inputGroup sgbp-inputGroup--horizontal">
        <span class="sgbp-inputGroup__label">Title</span>
        <div class="sgbp-inputGroup__text">This is some help text to further clarify the usage of the given form field.</div>
        <input type="text" class="sgbp-input">
    </label>

    <label class="sgbp-inputGroup sgbp-inputGroup--horizontal">
        <span class="sgbp-inputGroup__label">Switch</span>
        <div class="sgbp-inputGroup__text">This is some help text to further clarify the usage of the given form field.</div>
        <div class="sgbp-checkboxSwitch">
            <input type="checkbox" class="sgbp-checkboxSwitch__control">
            <div class="sgbp-checkboxSwitch__switch"></div>
        </div>
    </label>
