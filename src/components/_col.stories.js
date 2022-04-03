import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Layout/Col',
}

export const Standard = () => `
    <div class="sgbp-col">
        Col 1
    </div>
    <div class="sgbp-col">
        Col 2
    </div>
    <div class="sgbp-col">
        Col 3
    </div>
`;
Standard.decorators = [DescriptionDecorator(['Cols have a defined right margin'])];

export const withSeparator = () => `
    <div class="sgbp-col sgbp-col--withSeparator">
        Col 1
    </div>
    <div class="sgbp-col sgbp-col--withSeparator">
        Col 2
    </div>
    <div class="sgbp-col sgbp-col--withSeparator">
        Col 3
    </div>
`;

export const smallMargin = () => `
    <div class="sgbp-col sgbp-col--smallMargin">
        Col 1
    </div>
    <div class="sgbp-col sgbp-col--smallMargin">
        Col 2
    </div>
    <div class="sgbp-col sgbp-col--smallMargin">
        Col 3
    </div>
    <div class="sgbp-col sgbp-col--smallMargin sgbp-col--withSeparator">
        Col 4 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--smallMargin sgbp-col--withSeparator">
        Col 5 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--smallMargin sgbp-col--withSeparator">
        Col 6 (with separator)
    </div>
`;

export const bigMargin = () => `
    <div class="sgbp-col sgbp-col--bigMargin">
        Col 1
    </div>
    <div class="sgbp-col sgbp-col--bigMargin">
        Col 2
    </div>
    <div class="sgbp-col sgbp-col--bigMargin">
        Col 3
    </div>
    <div class="sgbp-col sgbp-col--bigMargin sgbp-col--withSeparator">
        Col 4 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--bigMargin sgbp-col--withSeparator">
        Col 5 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--bigMargin sgbp-col--withSeparator">
        Col 6 (with separator)
    </div>
`;

export const inverse = () => `
    <div class="sgbp-col sgbp-col--inverse">
        Col 1
    </div>
    <div class="sgbp-col sgbp-col--inverse">
        Col 2
    </div>
    <div class="sgbp-col sgbp-col--inverse">
        Col 3
    </div>
    <div class="sgbp-col sgbp-col--inverse sgbp-col--withSeparator">
        Col 4 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--inverse sgbp-col--withSeparator">
        Col 5 (with separator)
    </div>
    <div class="sgbp-col sgbp-col--inverse sgbp-col--withSeparator">
        Col 6 (with separator)
    </div>
`;
