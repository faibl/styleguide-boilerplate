import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Layout/Blocks',
}

export const Standard = () => `
    <div style="height: 100px; background-color: yellow;">
        <div class="sgbp-block" style="background-color: orange;">This is a block</div>
    </div>
`;
Standard.decorators = [DescriptionDecorator(['Blocks always have a width of 100%.'])];

export const Vertical = () => `
    <div style="height: 100px;">
        <div class="sgbp-block sgbp-block--vertical" style="background-color: orange;">This is a vertical block</div>
    </div>
`;
Vertical.decorators = [DescriptionDecorator(['Vertical blocks also have a height of 100%.'])];