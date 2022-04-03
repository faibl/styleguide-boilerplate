import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Hidden while uninitialized',
}

export const Standard = () => `
    <div class="sgbp-hiddenUninitialized sgbp-row" style="height: 200px; padding: 1rem; background-color: turquoise;">This element is hidden until the "is-sgbp-initialized" is added to the "body" tag</div>
    <button onclick="document.querySelector('html').classList.toggle('is-sgbp-initialized');" class="sgbp-button">Toggle initialized</button>
`;
Standard.decorators = [
    DescriptionDecorator([
        'Hides elements until the class `is-sgbp-initialized` is added to any of its parent elements (e.g. directly on the `html` tag).',
    ]),
];
