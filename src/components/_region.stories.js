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
]);
geometry.decorators = [MaxWidthDecorator('800px')];


export const verticalOnly = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--verticalOnly">${loremIpsum}</div>`;
export const horizontalOnly = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--horizontalOnly">${loremIpsum}</div>`;
export const noPadding = () => `<div class="sgbp-region sgbp-region--gray sgbp-region--noPadding">${loremIpsum}</div>`;

export const exampleLayout = () => `
    <div class="sgbp-pageWrapper">
        <div class="sgbp-region sgbp-region--gray">
            <div class="sgbp-region sgbp-centered sgbp-centered--horizontally sgbp-row sgbp-row--l">
                [LOGO]
            </div>
                <h2 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText ">Sie haben Ihr Passwort vergessen?</h2>
            <div class="sgbp-region sgbp-region--big sgbp-region--accent sgbp-region--rounded">
                <label class="sgbp-row sgbp-row--xl">Geben Sie Ihre E-Mail-Adresse an, um Ihr Passwort zurückzusetzen:
                  <input type="text" class="sgbp-input" placeholder="me@mail.com">
                </label>
            </div>
        </div>
    </div>
`;
