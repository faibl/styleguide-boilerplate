import {DescriptionDecorator} from "../../.storybook/decorators";
import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Forms/Input Addon',
}

export const Standard = () => `
    <label class="sgbp-inputAddon">
        <div class="sgbp-inputAddon__addon">$</div>
        <input type="text" class="sgbp-inputAddon__input sgbp-input">
        <div class="sgbp-inputAddon__addon"><button type="button" class="sgbp-button sgbp-button--secondary sgbp-button--small">OK</button></div>
    </label>
`;

export const accent = () => `
    <label class="sgbp-inputAddon">
        <input type="text" class="sgbp-inputAddon__input sgbp-input">
        <div class="sgbp-inputAddon__addon sgbp-inputAddon__addon--accent">€</div>
    </label>
`;

export const textarea = () => `
    <label class="sgbp-inputAddon">
        <div class="sgbp-inputAddon__addon">$</div>
        <textarea type="text" class="sgbp-inputAddon__input sgbp-input"></textarea>
        <div class="sgbp-inputAddon__addon"><button type="button" class="sgbp-button sgbp-button--secondary">OK</button></div>
    </label>
`;
