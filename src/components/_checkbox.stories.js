import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Forms/Checkox',
}

export const Standard = () => `
    <label class="sgbp-checkbox sgbp-row">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>
`;

export const standalone = () => `
        <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label"></span>
    </label>
`;
standalone.decorators = [DescriptionDecorator(['You need to provide an empty `sgbp-checkbox__label` element in order to display standalone checkboxes without labels'])];


export const inInputGroup = () => `
<div class="sgbp-inputGroup">
    <div class="sgbp-inputGroup__label">Label for the checkbox group</div>
    <label class="sgbp-checkbox sgbp-row">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>
</div>
<div class="sgbp-inputGroup">
    <div class="sgbp-inputGroup__label">Label for the checkbox group</div>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 3</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 4</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 5</span>
    </label>
</div>
`;
inInputGroup.decorators = [DescriptionDecorator(['If wrapped in a `sgbp-inputGroup` element then an additional top margin is applied to the first checkbox'])];


export const inline = () => `
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--inline">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>
`;

export const disabled = () => `
    <label class="sgbp-checkbox is-disabled">
        <input type="checkbox" class="sgbp-checkbox__control" disabled>
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
`;

export const white = () => `
    <div class="sgbp-region sgbp-region--gray">
      <label class="sgbp-checkbox sgbp-checkbox--white sgbp-row">
          <input type="checkbox" class="sgbp-checkbox__control">
          <span class="sgbp-checkbox__label">Checkbox 1</span>
      </label>
      <label class="sgbp-checkbox sgbp-checkbox--white">
          <input type="checkbox" class="sgbp-checkbox__control">
          <span class="sgbp-checkbox__label">Checkbox 2</span>
      </label>
    </div>
`;

export const sizes = () => `
    <label class="sgbp-checkbox sgbp-checkbox--s sgbp-row">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Size S</span>
    </label>

    <label class="sgbp-checkbox sgbp-row">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Default</span>
    </label>
    
    <label class="sgbp-checkbox sgbp-checkbox--l">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Size L</span>
    </label>
`;

export const invalid = () => `
    <label class="sgbp-checkbox is-invalid sgbp-row">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox with invalid state</span>
    </label>
`;

export const labelFirst = () => `
    <label class="sgbp-checkbox sgbp-checkbox--labelFirst sgbp-row sgbp-row--s">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 1</span>
    </label>
    <label class="sgbp-checkbox sgbp-checkbox--labelFirst">
        <input type="checkbox" class="sgbp-checkbox__control">
        <span class="sgbp-checkbox__label">Checkbox 2</span>
    </label>
`;

export const fake = () => `
    <div class="sgbp-row">
        <label class="sgbp-checkbox">
            <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 1</span>
        </label>
    </div>
    <label class="sgbp-checkbox sgbp-row">
        <span class="sgbp-checkbox__label" onclick="this.parentElement.classList.toggle('is-checked')">Checkbox 2</span>
    </label>
`;
fake.decorators = [
    DescriptionDecorator([
        'You can visually fake checkboxes without using `<input type="checkbox">` form elements.',
        'Please make sure to toggle the class `is-checked` on the `sgbp-checkbox` element.',
    ])
];
