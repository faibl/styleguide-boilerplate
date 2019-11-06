## Input

### Input (default)

    @example
    <input type="text" class="sgbp-input" placeholder="Placeholder ...">

### Input (inline)

    @example
    <input type="text" class="sgbp-input sgbp-input--inline" placeholder="Placeholder ...">

### Input (small)

    @example
    <input type="text" class="sgbp-input sgbp-input--small" placeholder="Placeholder ...">

### Input (big)

    @example
    <input type="text" class="sgbp-input sgbp-input--big" placeholder="Placeholder ...">

### Input (disabled)

    @example
    <input type="text" class="sgbp-input is-disabled" disabled value="input value">

### Input (readonly)

    @example
    <input type="text" class="sgbp-input is-readonly" readonly value="input value">

### Input (hidden)

Hide input element while still preserving accessibility features (i.e. tab order) and ensuring that its value gets submitted properly.
CSS properties such as display: none or visibility: hidden will not work out. The reasons are:

- the input value will not be sent to the server on form submit
- the input will be excluded out of tab order.


    @example
    <input type="text" class="sgbp-input" value="visible input (press tab to focus next input - the hidden one)">
    <input type="text" class="sgbp-input is-hidden" value="input value">
    <input type="text" class="sgbp-input" value="another visible input (after the hidden one)">

### Input (range / slider)

    @example
    <input type="range" class="sgbp-input">

### Input (textarea)

    @example
    <textarea class="sgbp-input" placeholder="Type something in ..."></textarea>

### File Input as Button

    @example
    <label class="sgbp-buttonFocusContainer sgbp-postfix sgbp-postfix--gutters sgbp-postfix--center">
        <div class="sgbp-postfix__fixed">
            <div class="sgbp-button">Choose File</div>
            <input type="file" class="sgbp-input is-hidden" onchange="document.getElementById(`sgbp-demo-selected-file-label`).innerText = this.value.split(`\\`).pop() || `No file chosen`;">
        </div>
        <div class="sgbp-postfix__fluid">
            <div id="sgbp-demo-selected-file-label">No file chosen</div>
        </div>
    </label>