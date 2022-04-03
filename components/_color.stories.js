import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Color',
}

export const Standard = () => `
    <div class="sgbp-color sgbp-color--accent">Accent <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--highlight">Highlight <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--white" style="background-color: pink; padding: 0.3rem;">White <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--black">Black <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--gray">Gray <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--mediumGray">Medium Gray <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--succes">Succes <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--warning">Warning <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-color sgbp-color--error">Error <a href="javascript:;" class="sgbp-link">with link</a></div>
`;

export const background = () => `
    <div class="sgbp-backgroundColor sgbp-backgroundColor--accent">Accent <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--highlight">Highlight <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--white">White <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--black">Black <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--gray">Gray <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--mediumGray">Medium Gray <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--success">Success <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--warning">Warning <a href="javascript:;" class="sgbp-link">with link</a></div>
    <div class="sgbp-backgroundColor sgbp-backgroundColor--error">Error <a href="javascript:;" class="sgbp-link">with link</a></div>
`;
background.decorators = [
    DescriptionDecorator([
        'Use the class `sgbp-backgroundColor` instead of `sgbp-color` to apply the colors as background color',
    ]),
];

export const force = () => `
    <div class="sgbp-color sgbp-color--gray sgbp-color--force">Gray <a href="javascript:;" class="sgbp-link">with link</a></div>
`;
force.decorators = [
    DescriptionDecorator(['Force the color to override other colors (e.g. on links) by adding the modifier `sgbp-color--force`.']),
];

export const inherit = () => `
    <div class="sgbp-region sgbp-region--accent">
        Lorem ipsum text in accent region with <a href="https://faibl.com" class="sgbp-link sgbp-color sgbp-color--inherit sgbp-color--force">hyperlink</a> in text.
    </div>
`;
inherit.decorators = [
    DescriptionDecorator([
        'Use the modifier `sgbp-color--inherit` to explicitly inherit the color from a parent element. Combined with the modifier `sgbp-color--force` this can be used e.g. to make a hyperlink\'s text color the same as the surrounding text',
    ]),
];
