## Input Group

### Input Group (with label and error message)
  
    @example
    <label class="sgbp-inputGroup">
        <span class="sgbp-inputGroup__label">Titel</span>
        <input type="text" class="sgbp-input sgbp-input--stateful is-invalid" value="input value">
        <div class="sgbp-inputGroup__subtext sgbp-inputGroup__subtext--error">This is an error!</div>
    </label>


### Input Group (constrained width)
  
    @example
    <label class="sgbp-inputGroup sgbp-inputGroup--constrainedWidth">
        <span class="sgbp-inputGroup__label">Titel</span>
        <input type="text" class="sgbp-input">
    </label>
### Input Group (aligned button)
  
    @example
    <div class="sgbp-grid sgbp-grid--gutters">
      <div class="sgbp-grid__cell">
        <label class="sgbp-inputGroup">
            <span class="sgbp-inputGroup__label">Suchwort</span>
            <input type="text" class="sgbp-input">
        </label>
      </div>
      <div class="sgbp-grid__cell">
        <button type="button" class="sgbp-inputGroup__alignedButton sgbp-button sgbp-button--primary">Suchen</button>
      </div>
    </div>
