import {DescriptionDecorator, MaxWidthDecorator} from "../../.storybook/decorators";
import {Sections, Section} from "../../.storybook/renderers";

export default {
    title: 'Components/Text/Text',
    decorators: [DescriptionDecorator(['Regions have nice paddings and different background colors depending on their type'])],
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`;

export const alignment = () => Sections([
    Section(
        'centered',
        `<div class="sgbp-text sgbp-text--centered">${loremIpsum}</div>`
    ),
    Section(
        'right aligned',
        `<div class="sgbp-text sgbp-text--rightAligned">${loremIpsum}</div>`
    ),
    Section(
        'left aligned',
        `<div class="sgbp-text sgbp-text--leftAligned">${loremIpsum}</div>`
    ),
]);

export const style = () => Sections([
    Section(
        'Bold',
        `<div class="sgbp-text sgbp-text--bold">${loremIpsum}</div>`
    ),
    Section(
        'Italic',
        `<div class="sgbp-text sgbp-text--italic">${loremIpsum}</div>`
    ),
    Section(
        'Uppercase',
        `<div class="sgbp-text sgbp-text--uppercase">${loremIpsum}</div>`
    ),
    Section(
        'Underlined',
        `<div class="sgbp-text sgbp-text--underlined">${loremIpsum}</div>`
    ),
]);

export const wrappingAndTruncation = () => Sections([
    Section(
        'Force wrap',
        `
        <div style="max-width: 200px; background-color: lightgrey;">
          <div class="sgbp-text sgbp-text--forceWrap">With force wrap: verylongwordwithmanycharacterswillbewrapped.</div>
          <div class="sgbp-text">Without force wrap: verylongwordwithmanycharacterswillnotbewrapped.</div>
        </div>`
    ),
    Section(
        'No Wrap',
        `
        <div style="max-width: 200px; background-color: lightgrey;">
          <div class="sgbp-text sgbp-text--noWrap">With no wrap: very long line with many words.</div>
          <div>Without no wrap: very long line with many words.</div>
        </div>`
    ),
    Section(
        'Truncated',
        `
        <div style="max-width: 200px; background-color: lightgrey;">
            <div class="sgbp-text sgbp-text--truncated sgbp-row">A very long line with a veryveryveryveryveryveryveryvery long word - LTR.</div>
            <div class="sgbp-text sgbp-text--truncated sgbp-text--rtl">A very long line with a veryveryveryveryveryveryveryvery long word - RTL.</div>
        </div>
        `
    ),
    Section(
        'Preserve line breaks',
        `
        <div class="sgbp-text sgbp-text--preserveLineBreaks sgbp-row">
            With preserveLineBreaks:
            Line 1
            Line 2
            
            Line 4 (line 3 is empty)
        </div>
        <div class="sgbp-text">
            Without preserveLineBreaks:
            Line 1
            Line 2
            
            Line 4 (line 3 is empty)
        </div>
        `
    ),
]);
wrappingAndTruncation.decorators = [
    DescriptionDecorator([
        'Force Wrap: If long words exceed the maximum horizontal space then they will be forced to wrap anyways.',
        'No Wrap: If the content exceeds the maximum horizontal space then the content will overflow horizontally.',
        'Truncated: If the content exceeds the maximum horizontal space then the line will get truncated',
    ]),
];

export const direction = () => Sections([
    Section(
        'LTR',
        `<div class="sgbp-text sgbp-text--ltr">${loremIpsum}</div>`
    ),
    Section(
        'RTL',
        `<div class="sgbp-text sgbp-text--rtl">${loremIpsum}</div>`
    ),
]);

export const sizes = () => Sections([
    Section(
        'extra small',
        `<div class="sgbp-text sgbp-text--extraSmall">${loremIpsum}</div>`
    ),
    Section(
        'small',
        `<div class="sgbp-text sgbp-text--small">${loremIpsum}</div>`
    ),
    Section(
        'standard',
        `<div class="sgbp-text">${loremIpsum}</div>`
    ),
    Section(
        'large',
        `<div class="sgbp-text sgbp-text--large">${loremIpsum}</div>`
    ),
    Section(
        'extra large',
        `<div class="sgbp-text sgbp-text--extraLarge">${loremIpsum}</div>`
    ),
]);
