import { DescriptionDecorator } from '../../.storybook/decorators';
import { Section, Sections } from '../../.storybook/renderers';

export default {
    title: 'Components/Forms/Select',
};

//language=HTML
export const Standard = () => `
  <select class="sgbp-select">
    <option>Option 1</option>
    <option>Option 2</option>
    <optgroup label="Option 3">
      <option>Option 3.1</option>
      <option>Option 3.2</option>
      <option>Option 3.3</option>
    </optgroup>
    <optgroup label="Option 4">
      <option>Option 4.1</option>
      <option disabled>Option 4.2</option>
      <option>Option 4.4</option>
    </optgroup>
    <option disabled>Option 5</option>
    <option>Option 6</option>
  </select>
`;

//language=HTML
export const Multiple = () => `
  <select multiple size="6" class="sgbp-select">
    <option>Option 1</option>
    <option>Option 2</option>
    <optgroup label="Option 3">
      <option>Option 3.1</option>
      <option disabled>Option 3.2</option>
      <option>Option 3.3</option>
    </optgroup>
    <option>Option 4 with longer text</option>
    <option>Option 5</option>
    <option>Option 6</option>
    <option disabled>Option 7 disabled</option>
    <option>Option 8</option>
  </select>
`;

//language=HTML
export const MultipleHideScrollbars = () => `
  <select multiple size="11" class="sgbp-select is-hide-scrollbars">
    <option>Option 1</option>
    <option>Option 2</option>
    <optgroup label="Option 3">
      <option>Option 3.1</option>
      <option>Option 3.2</option>
      <option>Option 3.3</option>
    </optgroup>
    <option>Option 4 with longer text</option>
    <option>Option 5</option>
    <option>Option 6</option>
    <option>Option 7</option>
    <option>Option 8</option>
  </select>
`;

MultipleHideScrollbars.story = {
    decorators: [DescriptionDecorator(['If the `size` attribute is greater or equal than the total number of select options, then you might want to add the `is-hide-scrollbars` switch in order to hide the scrollbars.'])],
};

//language=HTML
export const Sizes = () =>
    Sections([
        Section(
            'Default',
            `<select class="sgbp-select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
    `
        ),
        Section(
            'Size xl',
            `<select class="sgbp-select sgbp-select--xl">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
    `
        ),
    ]);

//language=HTML
export const Disabled = () => `
    <div class="sgbp-inputGroup">
        <select class="sgbp-select" disabled>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
        </select>
    </div>
`;

//language=HTML
export const IsEmpty = () => `
    <select id="sgbp-select-is-empty-demo" class="sgbp-select is-empty" onchange="this.classList[this.value ? 'remove' : 'add']('is-empty')">
        <option disabled selected value="">Bitte wählen</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>
`;

