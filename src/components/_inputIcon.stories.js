import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Forms/Input Icon',
}

export const Sizes = () => Sections([
    Section(
        'Small',
        `
            <div class="sgbp-inputIcon sgbp-inputIcon--small">
              <input type="text" class="sgbp-inputIcon__input sgbp-input sgbp-input--small" value="input value">
              <svg class="sgbp-inputIcon__icon sgbp-icon"><use xlink:href="./assets/icons.svg#calendar"></use></svg>
              <div class="sgbp-inputIcon__tooltip">
                Tooltip content
              </div>
            </div>
    `),
    Section(
        'Default',
        `
            <div class="sgbp-inputIcon">
              <input type="text" class="sgbp-inputIcon__input sgbp-input" value="input value">
              <svg class="sgbp-inputIcon__icon sgbp-icon"><use xlink:href="./assets/icons.svg#visibility-on"></use></svg>
              <div class="sgbp-inputIcon__tooltip">
                Tooltip content
              </div>
            </div>
    `),
    Section(
        'Big',
        `
            <div class="sgbp-inputIcon sgbp-inputIcon--big">
              <input type="text" class="sgbp-inputIcon__input sgbp-input sgbp-input--big" value="input value">
              <svg class="sgbp-inputIcon__icon sgbp-icon"><use xlink:href="./assets/icons.svg#calendar"></use></svg>
              <div class="sgbp-inputIcon__tooltip">
                Tooltip content
              </div>
            </div>
    `),
]);

export const textarea = () => `
    <div class="sgbp-inputIcon sgbp-inputIcon--textarea">
      <textarea class="sgbp-inputIcon__input sgbp-input" placeholder="Type something in ..."></textarea>
      <svg class="sgbp-inputIcon__icon sgbp-icon sgbp-icon--tiny"><use xlink:href="./assets/icons.svg#check"></use></svg>
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
        <option>Option 1 with very very very very long label</option>
        <option>Option 2</option>
      </select>
      <svg class="sgbp-inputIcon__icon sgbp-icon sgbp-icon--tiny"><use xlink:href="./assets/icons.svg#check"></use></svg>
      <div class="sgbp-inputIcon__tooltip">
        Tooltip content<br>
        <span class="sgbp-fontSize sgbp-fontSize--extraLarge">HTML allowed</span><br>
        Line 2 ...<br>
        Line 3 ...
      </div>
    </div>
`;
