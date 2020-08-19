import {DescriptionDecorator, MaxWidthDecorator} from "../../.storybook/decorators";
import {Sections, Section} from "../../.storybook/renderers";

export default {
    title: 'Components/Region',
    decorators: [DescriptionDecorator(['Regions have nice paddings and different background colors depending on their type'])],
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.`;

export const colors = () => Sections([
    Section(
        'Accent',
        `<div class="sgbp-region sgbp-region--accent">${loremIpsum}</div>`
    ),
    Section(
        'Gray',
        `<div class="sgbp-region sgbp-region--gray">${loremIpsum}</div>`
    ),
    Section(
        'lightGray',
        `<div class="sgbp-region sgbp-region--lightGray">${loremIpsum}</div>`
    ),
]);

export const sizes = () => Sections([
    Section(
        'Small',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--small">${loremIpsum}</div>`
    ),
    Section(
        'Standard',
        `<div class="sgbp-region sgbp-region--gray sgbp-region-">${loremIpsum}</div>`
    ),
    Section(
        'Big',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--big">${loremIpsum}</div>`
    ),
]);

export const geometry = () => Sections([
    Section(
        'Rounded',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--rounded">${loremIpsum}</div>`
    ),
    Section(
        'Skewed',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--skewed">${loremIpsum}</div>`
    ),
    Section(
        'Skewed top',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--skewed sgbp-region--skewedTop">${loremIpsum}</div>`
    ),
    Section(
        'Skewed bottom',
        `<div class="sgbp-region sgbp-region--gray sgbp-region--skewed sgbp-region--skewedBottom">${loremIpsum}</div>`
    ),
    Section(
        'Skewed with separator top',
        `<div class="sgbp-region sgbp-region--accent sgbp-region--skewed sgbp-region--skewedSeparatorTop">${loremIpsum}</div>`
    ),
    Section(
        'Skewed with separator bottom',
        `<div class="sgbp-region sgbp-region--accent sgbp-region--skewed sgbp-region--skewedSeparatorBottom">${loremIpsum}</div>`
    ),
    Section(
        'Skewed, accent color',
        `<div class="sgbp-region sgbp-region--accent sgbp-region--skewed">${loremIpsum}</div>`
    ),
]);
geometry.story = {
    decorators: [MaxWidthDecorator('800px')],
};

export const focusable = () => `
    <div class="sgbp-region sgbp-region--gray sgbp-region--focusable">
        <input type="text" class="sgbp-input" placeholder="Placeholder ...">
    </div>
`;
focusable.story = {
    decorators: [DescriptionDecorator(['Highlight the region if an element inside that region is focused'])],
};


export const verticalOnly = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--verticalOnly">${loremIpsum}</div>`;
export const horizontalOnly = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--horizontalOnly">${loremIpsum}</div>`;
export const noPadding = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--noPadding">${loremIpsum}</div>`;
export const depth = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--depth">${loremIpsum}</div>`;

export const exampleLayout = () => `
    <div class="sgbp-pageWrapper">
        <div class="sgbp-region sgbp-region--gray">
            <div class="sgbp-region sgbp-centered sgbp-centered--horizontally sgbp-row sgbp-row--bigMargin">
                [LOGO]
            </div>
                <h2 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText ">Sie haben Ihr Passwort vergessen?</h2>
            <div class="sgbp-region sgbp-region--big sgbp-region--accent sgbp-region--focusable">
                <label class="sgbp-row sgbp-row--extraBigMargin">Geben Sie Ihre E-Mail-Adresse an, um Ihr Passwort zurückzusetzen:
                  <input type="text" class="sgbp-input" placeholder="me@mail.com">
                </label>
            </div>
        </div>
    </div>
`;
