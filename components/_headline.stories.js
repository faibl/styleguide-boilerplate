import {DescriptionDecorator} from "../../.storybook/decorators";
import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Headline',
}

export const Standard = () => `
    <h1 class="sgbp-headline sgbp-headline--h0">Heading 0</h1>
    <h1 class="sgbp-headline sgbp-headline--h1">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4">Heading 4 <small class="sgbp-headline__addendum">Addendum</small></h4>
    <h5 class="sgbp-headline sgbp-headline--h5">Heading 5 <small class="sgbp-headline__addendum">Addendum</small></h5>
    <h6 class="sgbp-headline sgbp-headline--h6">Heading 6 <small class="sgbp-headline__addendum">Addendum</small></h6>
`;

export const inText = () => `
    <h1 class="sgbp-headline sgbp-headline--h0 sgbp-headline--text sgbp-headline--firstInText">Heading 0</h1>
    <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--text sgbp-headline--firstInText">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2 sgbp-headline--text">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4 sgbp-headline--text">Heading 4 <small class="sgbp-headline__addendum">Addendum</small></h4>
    <h5 class="sgbp-headline sgbp-headline--h5 sgbp-headline--text">Heading 5 <small class="sgbp-headline__addendum">Addendum</small></h5>
    <h6 class="sgbp-headline sgbp-headline--h6 sgbp-headline--text">Heading 6 <small class="sgbp-headline__addendum">Addendum</small></h6>
`;
inText.story = {
    decorators: [DescriptionDecorator([
        'In a text document we add sensible margins to our sgbp-headlines to visually structure the document outline.',
        'Add the `sgbp-headline--firstInText` modifier if you do not need a top margin.'
    ])]
};

export const accent = () => `
    <h1 class="sgbp-headline sgbp-headline--h0 sgbp-headline--accent">Heading 0</h1>
    <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--accent">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2 sgbp-headline--accent">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--accent">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4 sgbp-headline--accent">Heading 4 <small class="sgbp-headline__addendum">Addendum</small></h4>
    <h5 class="sgbp-headline sgbp-headline--h5 sgbp-headline--accent">Heading 5 <small class="sgbp-headline__addendum">Addendum</small></h5>
    <h6 class="sgbp-headline sgbp-headline--h6 sgbp-headline--accent">Heading 6 <small class="sgbp-headline__addendum">Addendum</small></h6>
`;

export const highlight = () => `
    <h1 class="sgbp-headline sgbp-headline--h0 sgbp-headline--highlight">Heading 0</h1>
    <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--highlight">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2 sgbp-headline--highlight">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--highlight">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4 sgbp-headline--highlight">Heading 4 <small class="sgbp-headline__addendum">Addendum</small></h4>
    <h5 class="sgbp-headline sgbp-headline--h5 sgbp-headline--highlight">Heading 5 <small class="sgbp-headline__addendum">Addendum</small></h5>
    <h6 class="sgbp-headline sgbp-headline--h6 sgbp-headline--highlight">Heading 6 <small class="sgbp-headline__addendum">Addendum</small></h6>
`;

export const light = () => `
    <h1 class="sgbp-headline sgbp-headline--h0 sgbp-headline--light">Heading 0</h1>
    <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--light">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2 sgbp-headline--light">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--light">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4 sgbp-headline--light">Heading 4 <small class="sgbp-headline__addendum">Addendum</small></h4>
    <h5 class="sgbp-headline sgbp-headline--h5 sgbp-headline--light">Heading 5 <small class="sgbp-headline__addendum">Addendum</small></h5>
    <h6 class="sgbp-headline sgbp-headline--h6 sgbp-headline--light">Heading 6 <small class="sgbp-headline__addendum">Addendum</small></h6>
`;

export const label = () => `
    <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--label">Heading 1</h1>
    <h2 class="sgbp-headline sgbp-headline--h2 sgbp-headline--label">Heading 2</h2>
    <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--label">Heading 3</h3>
    <h4 class="sgbp-headline sgbp-headline--h4 sgbp-headline--label">Heading 4</h4>
    <h5 class="sgbp-headline sgbp-headline--h5 sgbp-headline--label">Heading 5</h5>
    <h6 class="sgbp-headline sgbp-headline--h6 sgbp-headline--label">Heading 6</h6>
`;
