import { DescriptionDecorator } from '../../.storybook/decorators';

export default {
    title: 'Components/Forms/Input',
};

//language=HTML
export const Standard = () => `
    <input type="text" class="sgbp-input" placeholder="Placeholder ...">
`;

//language=HTML
export const Inline = () => `
    <input type="text" class="sgbp-input sgbp-input--inline" placeholder="Placeholder ...">
`;

Inline.story = {
    decorators: [DescriptionDecorator(['All input fields are displayed as 100% width block elements by default. They can be displayed inline instead by adding the class <code>sgbp-input--inline</code>'])],
};

//language=HTML
export const Big = () => `
    <input type="text" class="sgbp-input sgbp-input--big" placeholder="Placeholder ...">
`;

//language=HTML
export const Stateful = () => `
    <input type="email" class="sgbp-input sgbp-input--unobtrusive sgbp-input--stateful" placeholder="Enter valid email ..." data-sgbp-stateful-input>
`;

//language=HTML
export const Disabled = () => `
    <input type="text" class="sgbp-input is-disabled" disabled value="input value">
`;

//language=HTML
export const Invalid = () => `
    <input type="text" class="sgbp-input is-invalid" value="input value">
`;

//language=HTML
export const Textarea = () => `
    <textarea class="sgbp-input" placeholder="Type something in ..." style="min-height: 120px"></textarea>
`;
