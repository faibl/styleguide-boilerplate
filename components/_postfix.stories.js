import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Layout/Postfix',
    decorators: [DescriptionDecorator([
        'Postfixed elements consist of one or more fixed elements plus one ore more fluid elements taking up all the remaining space.',
        'The modifiers `sgbp-postfix--gutters` or `sgbp-postfix--bigGutters` add spacing between the postfix contents. Just leave them out, if you don\'t need spacing.',
    ])],
}

export const Standard = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-row">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>
`;

export const prefix = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-row">
        <button class="sgbp-postfix__fixed sgbp-button" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
    </div>
`;
prefix.story = {
    decorators: [DescriptionDecorator(['By changing the order of the `sgbp-postfix__fixed` and `sgbp-postfix__fluid` elements in the markup, you can use "postfix" as "prefix".'])],
};

export const stackedOnTinyScreens = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--tiny-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>
`;

export const stackedSmallDown = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--small-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>
`;

export const stackedMediumDOwn = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--medium-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>
`;

export const center = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--center">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--accent sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#check"></use>
        </svg>
    </div>
`;
center.story = {
    decorators: [DescriptionDecorator(['Vertically centered contents'])],
};

export const bottom = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--bottom">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--accent sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#more-horizontal"></use>
        </svg>
    </div>
`;
bottom.story = {
    decorators: [DescriptionDecorator(['Vertically bottom aligned contents'])],
};

export const baseline = () => `
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--baseline">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--accent sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#more-horizontal"></use>
        </svg>
    </div>
`;
baseline.story = {
    decorators: [DescriptionDecorator(['Vertically baseline aligned contents'])],
};

export const between = () => `
    <div class="sgbp-postfix sgbp-postfix--between">
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--accent sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-left"></use>
        </svg>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--accent sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </div>
`;
between.story = {
    decorators: [DescriptionDecorator(['Use maximum spacing between the elements'])],
};
