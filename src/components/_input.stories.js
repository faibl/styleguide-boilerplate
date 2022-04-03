import {DescriptionDecorator} from "../../.storybook/decorators";
import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Forms/Input',
}

export const Standard = () => `
    <input type="text" class="sgbp-input" placeholder="Placeholder ...">
`;

export const inline = () => `
    <input type="text" class="sgbp-input sgbp-input--inline" placeholder="Placeholder ...">
`;

export const small = () => `
    <input type="text" class="sgbp-input sgbp-input--small" placeholder="Placeholder ...">
`;

export const big = () => `
    <input type="text" class="sgbp-input sgbp-input--big" placeholder="Placeholder ...">
`;

export const disabled = () => `
    <input type="text" class="sgbp-input is-disabled" disabled value="input value">
`;

export const readonly = () => `
    <input type="text" class="sgbp-input is-readonly" readonly value="input value">
`;

export const hidden = () => `
    <input type="text" class="sgbp-input" value="visible input (press tab to focus next input - the hidden one)">
    <input type="text" class="sgbp-input is-hidden" value="input value">
    <input type="text" class="sgbp-input" value="another visible input (after the hidden one)">
`;
hidden.decorators = [
    DescriptionDecorator([
        '<input type="text" class="sgbp-input" value="visible input (press tab to focus next input - the hidden one)">',
        '<input type="text" class="sgbp-input is-hidden" value="input value">',
        '<input type="text" class="sgbp-input" value="another visible input (after the hidden one)">',
    ]),
];

export const RangeSlider = () => `
    <input type="range" class="sgbp-input">
`;

export const textarea = () => `
    <textarea class="sgbp-input" placeholder="Type something in ..."></textarea>
`;

export const fileInputButton = () => `
    <label class="sgbp-buttonFocusContainer sgbp-postfix sgbp-postfix--gutters sgbp-postfix--center">
        <div class="sgbp-postfix__fixed">
            <div class="sgbp-button">Choose File</div>
            <input type="file" class="sgbp-input is-hidden" onchange="document.getElementById('sgbp-demo-selected-file-label').innerText = this.value.split('\\\\').pop() || \`No file chosen\`;">
        </div>
        <div class="sgbp-postfix__fluid">
            <div id="sgbp-demo-selected-file-label">No file chosen</div>
        </div>
    </label>
`;


