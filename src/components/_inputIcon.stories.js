export default {
    title: 'Components/Forms/Input Icon',
}

export const Standard = () => `
    <div class="sgbp-inputIcon">
      <input type="text" class="sgbp-inputIcon__input sgbp-input" value="input value">
      <svg class="sgbp-inputIcon__icon sgbp-icon sgbp-icon--xs"><use xlink:href="./assets/icons.svg#calendar"></use></svg>
      <div class="sgbp-inputIcon__tooltip">
        Tooltip content<br>
        <span class="sgbp-fontSize sgbp-fontSize--extraLarge">HTML allowed</span><br>
        Line 2 ...<br>
        Line 3 ...
      </div>
    </div>
`;

export const textarea = () => `
    <div class="sgbp-inputIcon sgbp-inputIcon--textarea">
      <textarea class="sgbp-inputIcon__input sgbp-input" placeholder="Type something in ..."></textarea>
      <svg class="sgbp-inputIcon__icon sgbp-icon sgbp-icon--xs"><use xlink:href="./assets/icons.svg#check"></use></svg>
      <div class="sgbp-inputIcon__tooltip">
        Tooltip content<br>
        <span class="sgbp-fontSize sgbp-fontSize--extraLarge">HTML allowed</span><br>
        Line 2 ...<br>
        Line 3 ...
      </div>
    </div>
`;

export const select = () => `
    <div class="sgbp-inputIcon sgbp-inputIcon--select">
      <select class="sgbp-inputIcon__input sgbp-select">
        <option>Option 1 with long label</option>
        <option>Option 2</option>
      </select>
      <svg class="sgbp-inputIcon__icon sgbp-icon sgbp-icon--xs"><use xlink:href="./assets/icons.svg#check"></use></svg>
      <div class="sgbp-inputIcon__tooltip">
        Tooltip content<br>
        <span class="sgbp-fontSize sgbp-fontSize--extraLarge">HTML allowed</span><br>
        Line 2 ...<br>
        Line 3 ...
      </div>
    </div>
`;
