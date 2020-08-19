import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Layout/Float',
}

export const left = () => `
    <div class="sgbp-float--clear">
       <div class="sgbp-float sgbp-float--left" style="width: 30px; height: 30px; background-color: lightblue;"></div>
       <div class="sgbp-float sgbp-float--left" style="width: 30px; height: 30px; background-color: lightgreen;"></div>
       <div class="sgbp-float sgbp-float--left" style="width: 30px; height: 30px; background-color: coral;"></div>
       <div class="sgbp-float sgbp-float--left" style="width: 30px; height: 30px; background-color: orange;"></div>
    </div>
`;

export const right = () => `
    <div class="sgbp-float--clear">
       <div class="sgbp-float sgbp-float--right" style="width: 30px; height: 30px; background-color: lightblue;"></div>
       <div class="sgbp-float sgbp-float--right" style="width: 30px; height: 30px; background-color: lightgreen;"></div>
       <div class="sgbp-float sgbp-float--right" style="width: 30px; height: 30px; background-color: coral;"></div>
       <div class="sgbp-float sgbp-float--right" style="width: 30px; height: 30px; background-color: orange;"></div>
    </div>
`;

export const inText = () => `
    <div>
       <figure class="sgbp-float sgbp-float--left sgbp-float--inText">
           <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=demo&w=100&h=60">
           <figcaption>Bildunterschrift</figcaption>
       </figure>
       <figure class="sgbp-float sgbp-float--right sgbp-float--inText">
           <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=demo&w=100&h=60">
           <figcaption>Bildunterschrift</figcaption>
       </figure>
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
       Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    </div>
`;
inText.story = {
    decorators: [DescriptionDecorator([
        'Floating elements in text get some extra spacing between the floating element and the text.',
    ])]
};
