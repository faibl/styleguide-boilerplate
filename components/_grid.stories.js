import {DescriptionDecorator} from "../../.storybook/decorators";
import {Section, Sections} from "../../.storybook/renderers";

export default {
    title: 'Components/Layout/Grid',
}

export const equalColumns = () => `
    <div class="sgbp-grid">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>
`;
equalColumns.story = {
    decorators: [DescriptionDecorator([
        'The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They’re also equal height by default.',
    ])]
};


export const gutters = () => Sections([
    Section(
        'Row and column gutters (default gutters)',
        `
        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        </div>`
    ),
    Section(
        'Only row gutters',
        `
        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--rowGutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        </div>
        `
    ),
    Section(
        'Only column gutters',
        `
        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--columnGutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        </div>
        `
    ),
    Section(
        'Big row and column gutters',
        `
        <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters sgbp-grid--bigGutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        </div>
        `
    ),
]);
gutters.story = {
    decorators: [DescriptionDecorator([
        'By default, grid cells do not have any padding between each other.',
        'This is especially useful for non-textual content like images, video, street maps etc.',
        'However, if you do need padding, you can simply add the class `sgbp-grid--gutters` to your grid container element, as done in most of the examples that follow.',
    ])]
};

export const inline = () => `
    <div class="sgbp-grid sgbp-grid--gutters sgbp-grid--inlineBlock">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 with more content</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--full sgbp-grid__example">cell 4 full width</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 with even more content</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6</div>
    </div>
`;

export const Double = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--double sgbp-grid__example">cell 2 (double)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>
`;

export const Triple = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--triple sgbp-grid__example">cell 2 (triple)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>
`;

export const Shrink = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>
`;

export const vertical = () => `
    <div style="height: 400px;">
        <div class="sgbp-grid sgbp-grid--vertical sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
            <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>
    </div>
`;
vertical.story = {
    decorators: [DescriptionDecorator([
        'Stack your grid vertically by adding the `sgbp-grid--vertical` modifier',
    ])]
};

export const Unequal = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__cell--1of12 sgbp-grid__example">1of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--2of12 sgbp-grid__example">2of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--3of12 sgbp-grid__example">3of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__example">6of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--8of12 sgbp-grid__example">8of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--4of12 sgbp-grid__example">4of12</div>
    </div>
`;


export const responsive = () => `
    <div class="sgbp-grid sgbp-grid--full sgbp-grid--medium-fit sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>
`;
responsive.story = {
    decorators: [DescriptionDecorator([
        'Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly.',
    ])]
};

export const ResponsiveFlowing = () => `
    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>
`;

export const ResponsiveFlowingCenterWidowLine = () => `
    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters sgbp-grid--centerWidowLine">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>
`;

export const responsiveReordering = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-backgroundColor--accent">Small first, medium last</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--medium-orderFirst sgbp-backgroundColor--highlight">Small last, medium first</div>
    </div>
`;
responsive.story = {
    decorators: [DescriptionDecorator([
        'The two cells swap ordering when switching from small to medium.',
    ])]
};

export const ResponsiveUnEqual = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-3of12 sgbp-grid__example">small 6of12; medium 3of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-9of12 sgbp-grid__example">small 6of12; medium 9of12</div>
    </div>
`;

export const Alignment = () => Sections([
    Section(
        'Stretched (Default)',
        `
        <div class="sgbp-grid sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>`
    ),
    Section(
        'Top',
        `
        <div class="sgbp-grid sgbp-grid--top sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>`
    ),
    Section(
        'Center',
        `
        <div class="sgbp-grid sgbp-grid--center sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>`
    ),
    Section(
        'Bottom',
        `
        <div class="sgbp-grid sgbp-grid--bottom sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>`
    ),
    Section(
        'Baseline',
        `
        <div class="sgbp-grid sgbp-grid--baseline sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
            <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>`
    ),
    Section(
        'Mixed',
        `
        <div class="sgbp-grid sgbp-grid--gutters" style="height: 300px">
            <div class="sgbp-grid__cell sgbp-grid__cell--top sgbp-grid__example">.sgbp-grid__cell--top</div>
            <div class="sgbp-grid__cell sgbp-grid__cell--center sgbp-grid__example">.sgbp-grid__cell--center</div>
            <div class="sgbp-grid__cell sgbp-grid__cell--bottom sgbp-grid__example">.sgbp-grid__cell--bottom</div>
        </div>`
    ),
]);

export const nesting = () => `
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">
           <div class="sgbp-grid sgbp-grid--gutters">
               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.a</div>
               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.b</div>
           </div>
        </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>
`;