import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Link',
}

export const Standard = () => `
    <p>Text with an inline <a class="sgbp-link" href="javascript:;">regular link</a>.</p>
`;

export const unobtrusive = () => `
    <p>Text with an inline <a class="sgbp-link sgbp-link--unobtrusive" href="javascript:;">unobtrusive link</a>.</p>
`;
