import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Menu Toggle',
    decorators: [DescriptionDecorator(['Add class `is-open` to morph burger icon into close icon'])],
}

export const Standard = () => `
    <div class="sgbp-menuToggle" onclick="this.classList.toggle('is-open')">
        <span class="sgbp-menuToggle__line"></span>
        <span class="sgbp-menuToggle__line"></span>
        <span class="sgbp-menuToggle__line"></span>
    </div>
`;
