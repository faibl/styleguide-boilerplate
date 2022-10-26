import {DescriptionDecorator} from "../../.storybook/decorators";
import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Forms/Input Group',
}

export const withLabelAndText = () => `
    <label class="sgbp-inputGroup">
        <span class="sgbp-inputGroup__label">Title</span>
        <div class="sgbp-inputGroup__text">This is some help text to further clarify the usage of the given form field.</div>
        <input type="text" class="sgbp-input" value="input value">
    </label>
`;

export const invalidState = () => `
    <label class="sgbp-inputGroup is-invalid">
        <span class="sgbp-inputGroup__label">Title</span>
        <input type="text" class="sgbp-input" value="input value">
    </label>
`;

export const withLabelAndErrorMessage = () => `
    <label class="sgbp-inputGroup is-invalid">
        <span class="sgbp-inputGroup__label">Title</span>
        <div class="sgbp-inputGroup__text sgbp-inputGroup__text--error">This is an error!</div>
        <input type="text" class="sgbp-input" value="input value">
    </label>
`;

export const inline = () => `
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
`;

export const constrainedWidth = () => `
    <label class="sgbp-inputGroup sgbp-inputGroup--constrainedWidth">
        <span class="sgbp-inputGroup__label">Title</span>
        <input type="text" class="sgbp-input">
    </label>
`;
