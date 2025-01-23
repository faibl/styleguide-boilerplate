import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Forms/Radio',
}

export const Standard = () => `
    <label class="sgbp-radio sgbp-row">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 1</span>
    </label>
    <label class="sgbp-radio">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 2</span>
    </label>
`;

export const standalone = () => `
        <label class="sgbp-radio">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label"></span>
    </label>
`;
standalone.decorators = [DescriptionDecorator(['You need to provide an empty `sgbp-radio__label` element in order to display standalone radioes without labels'])];

export const inInputGroup = () => `
<div class="sgbp-inputGroup">
    <div class="sgbp-inputGroup__label">Label for the radio group</div>
    <label class="sgbp-radio sgbp-row">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 1</span>
    </label>
    <label class="sgbp-radio">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 2</span>
    </label>
</div>
`;
inInputGroup.decorators = [DescriptionDecorator(['If wrapped in a `sgbp-inputGroup` element then an additional top margin is applied to the first radio button'])];

export const inline = () => `
    <label class="sgbp-radio sgbp-radio--inline">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 1</span>
    </label>
    <label class="sgbp-radio sgbp-radio--inline">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 2</span>
    </label>
`;

export const disabled = () => `
    <label class="sgbp-radio is-disabled">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control" disabled>
        <span class="sgbp-radio__label">Radio 1</span>
    </label>
`;

export const white = () => `
    <div class="sgbp-region sgbp-region--gray">
      <label class="sgbp-radio sgbp-radio--white sgbp-row">
          <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
          <span class="sgbp-radio__label">Radio 1</span>
      </label>
      <label class="sgbp-radio sgbp-radio--white">
          <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
          <span class="sgbp-radio__label">Radio 2</span>
      </label>
    </div>
`;

export const sizes = () => `
    <label class="sgbp-radio sgbp-radio--small sgbp-row">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Small</span>
    </label>

    <label class="sgbp-radio sgbp-row">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Default</span>
    </label>
    
    <label class="sgbp-radio sgbp-radio--l">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Big</span>
    </label>
`;

export const Invalid = () => `
    <label class="sgbp-radio sgbp-row">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio Option 1</span>
    </label>
    <label class="sgbp-radio is-invalid">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio Option 2 (invalid)</span>
    </label>
`;

export const labelFirst = () => `
    <label class="sgbp-radio sgbp-radio--labelFirst sgbp-row sgbp-row--s">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 1</span>
    </label>
    <label class="sgbp-radio sgbp-radio--labelFirst">
        <input type="radio" name="sgbp-radio-demo" class="sgbp-radio__control">
        <span class="sgbp-radio__label">Radio 2</span>
    </label>
`;

export const fake = () => `
    <div class="sgbp-row">
        <label class="sgbp-radio">
            <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio 1</span>
        </label>
    </div>
    <label class="sgbp-radio sgbp-row">
        <span class="sgbp-radio__label" onclick="this.parentElement.classList.toggle('is-checked')">Radio 2</span>
    </label>
`;
fake.decorators = [
    DescriptionDecorator([
        'You can visually fake radioes without using `<input type="radio">` form elements.',
        'Please make sure to toggle the class `is-checked` on the `sgbp-radio` element.',
    ]),
];
