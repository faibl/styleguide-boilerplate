import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Clickable',
}

export const Standard = () => `
    <div class="sgbp-clickable">
        Clickable
    </div>
`;
Standard.decorators = [DescriptionDecorator(['Changes the cursor to "pointer" on hovering'])];

export const touchy = () => `
    <div class="sgbp-clickable sgbp-clickable--touchy">
        Clickable
    </div>

`;
touchy.decorators = [DescriptionDecorator(['Slightly increases the touchable area'])];