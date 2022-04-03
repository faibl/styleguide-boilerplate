import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Tooltip',
}

export const Standard = () => `
    <div class="sgbp-centered sgbp-centered--horizontally">
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--left">
            <span class="sgbp-tooltip__trigger">left</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--centered">
            <span class="sgbp-tooltip__trigger">centered</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">right</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom">
            <span class="sgbp-tooltip__trigger">bottom</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--middle">
            <span class="sgbp-tooltip__trigger">middle</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--top">
            <span class="sgbp-tooltip__trigger">top</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--top sgbp-tooltip--left">
            <span class="sgbp-tooltip__trigger">top left</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
        <div class="sgbp-tooltip sgbp-tooltip--left sgbp-tooltip--middle">
          <span class="sgbp-tooltip__trigger">middle left</span>
          <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
        </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--centered sgbp-tooltip--middle">
            <span class="sgbp-tooltip__trigger">centered middle</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">bottom right</span>
            <div class="sgbp-tooltip__content sgbp-region sgbp-region--small sgbp-region--accent" style="width: 250px"><div class="sgbp-headline sgbp-headline--h4 sgbp-headline--text sgbp-headline--firstInText">Tooltip content</div>HTML allowed</div>
          </div>
      </div>
      <div class="sgbp-row">
          <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right">
            <span class="sgbp-tooltip__trigger">image content</span>
            <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Left&w=300&h=200">
          </div>
      </div>
    </div>
`;

export const iconTrigger = () => `
    <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--right">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>
`;

export const styled = () => `
    <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--help sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
      <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
    </div>
    <div class="sgbp-tooltip sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--help sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>
`;

export const onlyIfHoverSupported = () => `
    <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--onlyIfHover">
      <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
      <div class="sgbp-tooltip__content" style="width: 250px">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
      </div>
    </div>
`;
onlyIfHoverSupported.decorators = [
    DescriptionDecorator([
        'Add the class `sgbp-tooltip--onlyIfHover` if you only want the tooltip to be displayed on devices with hovering capabilities.',
        'The tooltip will then not be displayed e.g. on regular touch screens (you can still programatically open/cose the tooltip, see below).',
    ]),
];

export const programatically = () => `
    <div style="margin-bottom: 280px">
      <div class="sgbp-tooltip sgbp-tooltip--noHover sgbp-tooltip--bottom sgbp-tooltip--right sgbp-tooltip--styled is-open" id="sgbp-tooltip-demoNoHover">
        <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent sgbp-clickable" onclick="document.getElementById('sgbp-tooltip-demoNoHover').classList.toggle('is-open')"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
        <img class="sgbp-tooltip__content" src="https://placeholdit.imgix.net/~text?txtsize=16&bg=1cdcb5&txtclr=ffffff&txt=Tooltip%20Preview&w=300&h=200">
      </div>
    </div>
`;
programatically.storyName = 'open manually (no hover)';
programatically.decorators = [
    DescriptionDecorator([
        'Add class `is-open` to force the tooltip to be open regardless of its hover state',
        'This can be used either in conjunction with `sgbp-tooltip--onlyIfHover` (see above) or with `sgbp-tooltip--noHover` if you do not want the tooltip to automatically appear on hover.',
    ]),
];
