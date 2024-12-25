import { Section, Sections } from '../../.storybook/renderers';

export default {
  title: 'Components/Button',
};

//language=HTML
export const Colors = () =>
  Sections([
    Section(
      'Standard',
      `
        <button class="sgbp-button">Default</button>
        <button class="sgbp-button sgbp-button--accent">Accent</button>
        <button class="sgbp-button sgbp-button--highlight">Highlight</button>
        <button class="sgbp-button sgbp-button--accentLight">accentLight</button>
        <button class="sgbp-button sgbp-button--danger">Danger</button>
        <button class="sgbp-button sgbp-button--white">white</button>
        <button class="sgbp-button sgbp-button--transparent">transparent</button>
      `
    ),
    Section(
      'Transparent',
      `
          <div class="sgbp-region sgbp-region--white sgbp-row">
            <a class="sgbp-button sgbp-button--transparent">Transparent</a>
          </div>
          <div class="sgbp-region sgbp-region--accent sgbp-row">
            <a class="sgbp-button sgbp-button--transparent">Transparent</a>
          </div>
          <div class="sgbp-region sgbp-region--highlight">
              <a class="sgbp-button sgbp-button--transparent">Transparent</a>
          </div>
      `
    ),
  ]);

//language=HTML
export const Sizes = () =>
  Sections([
    Section('S', `<a class="sgbp-button sgbp-button--s sgbp-button--accent">Button text</a>`),
    Section('L', `<a class="sgbp-button sgbp-button--l sgbp-button--accent">Button text</a>`),
    Section('Default (L on mobile, XL on desktop)', `<a class="sgbp-button sgbp-button--accent">Button text</a>`),
    Section('XL', `<a class="sgbp-button sgbp-button--xl sgbp-button--accent">Button text</a>`),
    Section('2XL', `<a class="sgbp-button sgbp-button--2xl sgbp-button--accent">Button text</a>`),
    Section(
      'Block',
      `<a
        class="sgbp-button sgbp-button--block sgbp-button--accent">Button</a>`
    ),
  ]);

//language=HTML
export const States = () =>
  Sections([
    Section(
      'disabled',
      `
        <button class="sgbp-button sgbp-button--accent" disabled>Accent</button>
        <button class="sgbp-button sgbp-button--accentLight" disabled>Accent light</button>
        <button class="sgbp-button sgbp-button--highlight" disabled>Highlight</button>
        <button class="sgbp-button sgbp-button--white" disabled>White</button>
        <button class="sgbp-button sgbp-button--danger" disabled>Danger</button>
    `
    ),
    Section(
      'focused',
      `
        <button class="sgbp-button sgbp-button--accent is-focused">Accent</button>
        <button class="sgbp-button sgbp-button--accentLight is-focused">Accent light</button>
        <button class="sgbp-button sgbp-button--highlight is-focused">Highlight</button>
        <button class="sgbp-button sgbp-button--white is-focused">White</button>
        <button class="sgbp-button sgbp-button--danger is-focused">Danger</button>
    `
    ),
  ]);

//language=HTML
export const Loading = () => `
    <button class="sgbp-button sgbp-button--primary sgbp-button--loading" type="button" onclick="this.classList.toggle('is-loading')">
        Button Loading
    </button>
`;

//language=HTML
export const Alternate = () => `
    <a class="sgbp-button sgbp-button--alternate sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--alternate sgbp-button--primary">Primary</a>
    <a class="sgbp-button sgbp-button--alternate sgbp-button--accentLight">Accent Light</a>
    <a class="sgbp-button sgbp-button--alternate sgbp-button--danger">Danger inverted</a>
`;

//language=HTML
export const IconOnly = () => `
    <a class="sgbp-button sgbp-button--circle sgbp-button--primary">
        <svg class="sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-left"></use>
        </svg>
    </a>
    <a class="sgbp-button sgbp-button--circle sgbp-button--transparent">
        <svg class="sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </a>
`;

//language=HTML
export const TextAndIconLeft = () => `
    <a class="sgbp-button sgbp-button--icon sgbp-button--primary">
        <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-left"></use>
        </svg>
        With Icon
    </a>
    <a class="sgbp-button sgbp-button--icon sgbp-button--primary">
        Without Icon
    </a>
`;

//language=HTML
export const TextAndIconRight = () => `
    <button class="sgbp-button sgbp-button--icon sgbp-button--primary">
        <span>
        With Icon
            </span>
        <svg class="sgbp-button__icon sgbp-button__icon--right sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </button>
    <button class="sgbp-button sgbp-button--icon sgbp-button--primary">
        <span>
        With Icon
        
            </span>
        <svg class="sgbp-button__icon sgbp-button__icon--right sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-down"></use>
        </svg>
    </button>
    <button class="sgbp-button sgbp-button--primary">
        Without Icon
    </button>
`;

//language=HTML
export const LeftAlignedContent = () => `
    <div style="max-width: 300px">
        <div class="sgbp-row">
            <a class="sgbp-button sgbp-button--leftAlignedContent sgbp-button--block sgbp-button--icon sgbp-button--primary">
                <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon">
                    <use xlink:href="./assets/icons.svg#arrow-right"></use>
                </svg>
                Short Label
            </a>
        </div>
        <div class="sgbp-row">
            <a class="sgbp-button sgbp-button--leftAlignedContent sgbp-button--block sgbp-button--icon sgbp-button--primary">
                <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon">
                    <use xlink:href="./assets/icons.svg#arrow-right-line"></use>
                </svg>
                Long label with lots of text
            </a>
        </div>
    </div>
`;

//language=HTML
export const WithIcon = () => `
    <a class="sgbp-button sgbp-button--icon sgbp-button--primary">
        <svg class="sgbp-icon">
            <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </a>
`;

//language=HTML
export const LongText = () => `
    <a class="sgbp-button sgbp-button--primary">Yes, I am sure. I know what I am doing. Yes, I approve. Yes, do it. Why not? OK, but still. It has to be
        done.</a>
`;

LongText.title = 'Design / Test';
