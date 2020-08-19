import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Layout/Row',
}

export const Standard = () => `
    <div class="sgbp-row">
        Row 1
    </div>
    <div class="sgbp-row">
        Row 2
    </div>
    <div class="sgbp-row">
        Row 3
    </div>
`;
Standard.story = {
    decorators: [DescriptionDecorator(['Rows have a defined bottom margin'])]
};

export const withSeparator = () => `
    <div class="sgbp-row sgbp-row--withSeparator">
        Row 1
    </div>
    <div class="sgbp-row sgbp-row--withSeparator">
        Row 2
    </div>
    <div class="sgbp-row sgbp-row--withSeparator">
        Row 3
    </div>
`;

export const smallMargin = () => `
    <div class="sgbp-row sgbp-row--smallMargin">
        Row 1
    </div>
    <div class="sgbp-row sgbp-row--smallMargin">
        Row 2
    </div>
    <div class="sgbp-row sgbp-row--smallMargin">
        Row 3
    </div>
    <div class="sgbp-row sgbp-row--smallMargin sgbp-row--withSeparator">
        Row 4 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--smallMargin sgbp-row--withSeparator">
        Row 5 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--smallMargin sgbp-row--withSeparator">
        Row 6 (with separator)
    </div>
`;

export const bigMargin = () => `
    <div class="sgbp-row sgbp-row--bigMargin">
        Row 1
    </div>
    <div class="sgbp-row sgbp-row--bigMargin">
        Row 2
    </div>
    <div class="sgbp-row sgbp-row--bigMargin">
        Row 3
    </div>
    <div class="sgbp-row sgbp-row--bigMargin sgbp-row--withSeparator">
        Row 4 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--bigMargin sgbp-row--withSeparator">
        Row 5 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--bigMargin sgbp-row--withSeparator">
        Row 6 (with separator)
    </div>
`;

export const inverse = () => `
    <div class="sgbp-row sgbp-row--inverse">
        Row 1
    </div>
    <div class="sgbp-row sgbp-row--inverse">
        Row 2
    </div>
    <div class="sgbp-row sgbp-row--inverse">
        Row 3
    </div>
    <div class="sgbp-row sgbp-row--inverse sgbp-row--withSeparator">
        Row 4 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--inverse sgbp-row--withSeparator">
        Row 5 (with separator)
    </div>
    <div class="sgbp-row sgbp-row--inverse sgbp-row--withSeparator">
        Row 6 (with separator)
    </div>
`;
