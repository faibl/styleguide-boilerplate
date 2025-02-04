import {Section, Sections} from '../../.storybook/renderers';
import {DescriptionDecorator, UnpadHorizontally} from '../../.storybook/decorators';

export default {
    title: 'Components/Region',
    decorators: [DescriptionDecorator(['Regions come with different paddings, colors and shapes'])],
};

const loremIpsum = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet <a href="javascript:;">dolore magna aliquam erat volutpat</a>.`;

//language=HTML
export const Colors = () =>
    Sections([
        Section(
            'Default',
            `
                <div class="sgbp-region">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'White',
            `
                <div class="sgbp-region sgbp-region--white">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Black',
            `
                <div class="sgbp-region sgbp-region--black">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Warning',
            `
                <div class="sgbp-region sgbp-region--warning">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Gray 25',
            `
                <div class="sgbp-region sgbp-region--white">
                    <div class="sgbp-region sgbp-region--gray25">
                        ${loremIpsum}
                    </div>
                </div>
            `
        ),
        Section(
            'Gray 50',
            `
                <div class="sgbp-region sgbp-region--gray50">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Gray 100',
            `
                <div class="sgbp-region sgbp-region--gray100">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Gray 200',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent',
            `
                <div class="sgbp-region sgbp-region--accent">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 50',
            `
                <div class="sgbp-region sgbp-region--accent50">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 100',
            `
                <div class="sgbp-region sgbp-region--accent100">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 200',
            `
                <div class="sgbp-region sgbp-region--accent200">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 400',
            `
                <div class="sgbp-region sgbp-region--accent400">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 500',
            `
                <div class="sgbp-region sgbp-region--accent500">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 600',
            `
                <div class="sgbp-region sgbp-region--accent600">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Accent 700',
            `
                <div class="sgbp-region sgbp-region--accent700">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight',
            `
                <div class="sgbp-region sgbp-region--highlight">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight 100',
            `
                <div class="sgbp-region sgbp-region--highlight100">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight 300',
            `
                <div class="sgbp-region sgbp-region--highlight300">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight 500',
            `
                <div class="sgbp-region sgbp-region--highlight500">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight 700',
            `
                <div class="sgbp-region sgbp-region--highlight700">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight 800',
            `
                <div class="sgbp-region sgbp-region--highlight800">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Highlight, high contrast in accessible color scheme',
            `
                <div id="demoRegionHIghContrast">
                    <button class="sgbp-button sgbp-row"
                            onclick="document.getElementById('demoRegionHIghContrast').classList.toggle('is-sgbp-accessibleColorScheme')">
                        Toggle accessible color scheme
                    </button>
                    <div class="sgbp-region sgbp-region--highlight sgbp-region--highContrastInAccessibleColorScheme">
                        ${loremIpsum}
                    </div>
                </div>
            `
        ),
    ]);

//language=HTML
export const Sizes = () => Sections([Section('XS', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--xs">${loremIpsum}</div>`), Section('S', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--s">${loremIpsum}</div>`), Section('M (default)', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--m">${loremIpsum}</div>`), Section('L', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--l">${loremIpsum}</div>`), Section('XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--xl">${loremIpsum}</div>`), Section('2XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--2xl">${loremIpsum}</div>`), Section('3XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--3xl">${loremIpsum}</div>`), Section('4XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--4xl">${loremIpsum}</div>`), Section('5XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--5xl">${loremIpsum}</div>`), Section('6XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--6xl">${loremIpsum}</div>`), Section('7XL', `
    <div class="sgbp-region sgbp-region--gray200 sgbp-region--7xl">${loremIpsum}</div>`)]);

//language=HTML
export const Padding = () =>
    Sections([
        Section(
            'Default',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Vertical only',
            `
                <div class="sgbp-region sgbp-region--gray200 sgbp-region--verticalOnly">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Horizontal only',
            `
                <div class="sgbp-region sgbp-region--gray200 sgbp-region--horizontalOnly">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'No padding',
            `
                <div class="sgbp-region sgbp-region--gray200 sgbp-region--noPadding">
                    ${loremIpsum}
                </div>
            `
        ),
        Section(
            'Unpad top',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    <div class="sgbp-region__unpadTop">
                        <div class="sgbp-region sgbp-region--accent">
                            Inner region - top unpadded
                        </div>
                    </div>
                    <div class="sgbp-row sgbp-row--xl">Outer region content</div>
                </div>
            `
        ),
        Section(
            'Unpad bottom',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    <div class="sgbp-row sgbp-row--xl">Outer region content</div>
                    <div class="sgbp-region__unpadBottom">
                        <div class="sgbp-region sgbp-region--accent">
                            Inner region - bottom unpadded
                        </div>
                    </div>
                </div>
            `
        ),
        Section(
            'Unpad horizontally',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    <div class="sgbp-row">Outer region content</div>
                    <div class="sgbp-region__unpadHorizontally">
                        <div class="sgbp-region sgbp-region--accent">
                            Inner region - horizontally unpadded
                        </div>
                    </div>
                </div>
            `
        ),
        Section(
            'Unpad bottom and horizontally',
            `
                <div class="sgbp-region sgbp-region--gray200">
                    <div class="sgbp-row">Outer region content</div>
                    <div class="sgbp-region__unpadBottom sgbp-region__unpadHorizontally">
                        <div class="sgbp-region sgbp-region--accent">
                            Inner region - horizontally and bottom unpadded
                        </div>
                    </div>
                </div>
            `
        ),
        Section('Override top padding: top L, top [XL] 6XL', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--topL sgbp-region[xl]--top6XL">
                ${loremIpsum}
            </div>`),
        Section('Override bottom padding: bottom L, bottom [XL] 3XL', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--bottomL sgbp-region[xl]--bottom3XL">
                ${loremIpsum}
            </div>`),
    ]);

//language=HTML
export const geometry = () =>
    Sections([
        Section(
            'Rounded (default)',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded">${loremIpsum}</div>`
        ),
        Section(
            'Rounded 2XS',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded2XS">${loremIpsum}</div>`
        ),
        Section(
            'Rounded XS',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedXS">${loremIpsum}</div>`
        ),
        Section(
            'Rounded S',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedS">${loremIpsum}</div>`
        ),
        Section(
            'Rounded M',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedM">${loremIpsum}</div>`
        ),
        Section(
            'Rounded L',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--roundedL">${loremIpsum}</div>`
        ),
        Section('Rounded Top Only', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--roundedTopOnly">${loremIpsum}
            </div>`),
        Section('Rounded Bottom Only', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--roundedBottomOnly">
                ${loremIpsum}
            </div>`),
        Section('Force rounded', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--forceRounded">${loremIpsum}
            </div>`),
        Section('Bordered', `
            <div class="sgbp-region sgbp-region--white sgbp-region--bordered">${loremIpsum}</div>`),
        Section('Bordered highlight100', `
            <div class="sgbp-region sgbp-region--highlight100 sgbp-region--bordered">${loremIpsum}</div>`),
        Section('Bordered gray50', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered">${loremIpsum}</div>`),
        Section('Bordered and rounded gray50', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--rounded">${loremIpsum}
            </div>`),
        Section('Bordered gray 50, black border', `
            <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered  sgbp-region--borderedBlack sgbp-region--rounded">
                ${loremIpsum}
            </div>`),
        Section('Depth', `
            <div class="sgbp-region sgbp-region--depth">${loremIpsum}</div>`),
    ]);

//language=HTML
export const clickable = () =>
    Sections([
        Section(
            'Rounded',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--rounded sgbp-region--clickable">${loremIpsum}
                    /div>`
        ),
        Section(
            'Bordered',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--clickable">${loremIpsum}
                </div>`
        ),
        Section(
            'Bordered and rounded',
            `
                <div class="sgbp-region sgbp-region--white sgbp-region--bordered sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Bordered (black)',
            `
                <div class="sgbp-region sgbp-region--gray50 sgbp-region--bordered sgbp-region--borderedBlack sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Accent',
            `
                <div class="sgbp-region sgbp-region--accent sgbp-region--rounded sgbp-region--clickable">${loremIpsum}
                </div>`
        ),
        Section(
            'Accent 200',
            `
                <div class="sgbp-region sgbp-region--accent200 sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Accent 600',
            `
                <div class="sgbp-region sgbp-region--accent600 sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Accent 700',
            `
                <div class="sgbp-region sgbp-region--accent700 sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Highlight',
            `
                <div class="sgbp-region sgbp-region--highlight sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
        Section(
            'Highlight 300',
            `
                <div class="sgbp-region sgbp-region--highlight300 sgbp-region--rounded sgbp-region--clickable">
                    ${loremIpsum}
                </div>`
        ),
    ]);

//language=HTML
export const ExampleLayout = () => `
    <div class="sgbp-region sgbp-region--accent">
        Header (accent)
    </div>
    <div class="sgbp-region sgbp-region--gray200">
        Sub-Header (gray)
    </div>
    <div style="display: flex;">
        <div class="sgbp-region sgbp-region--gray50" style="flex-basis: 200px">
            Sidebar (lightGray)
        </div>
        <div class="sgbp-region sgbp-region--white">
            Main Content (default)
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
            <p class="sgbp-row sgbp-row--m">...</p>
        </div>
    </div>
    <div class="sgbp-region sgbp-region--accent sgbp-region--xl">
        <div class="sgbp-row">Footer (accent)</div>
        <div class="sgbp-region sgbp-region--m sgbp-region--accent600 sgbp-region--rounded">

            <div class="sgbp-row">Nested Footer (accent medium, rounded)</div>

            <div class="sgbp-region sgbp-region--m sgbp-region--accent700 sgbp-region--rounded sgbp-row">
                Deeply nested 1 (accent dark, rounded)
            </div>

            <div class="sgbp-region sgbp-region--m sgbp-region--highlight sgbp-region--rounded">
                Deeply nested 2 (highlight, rounded)
            </div>
        </div>
    </div>
`;
ExampleLayout.story = {
    decorators: [UnpadHorizontally],
};
