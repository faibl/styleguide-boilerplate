export default {
    title: 'Components/Forms/Button',
}

export const Standard = () => `
    <button class="sgbp-button sgbp-button">Default</button>
    <button class="sgbp-button sgbp-button--accent">Accent</button>
    <button class="sgbp-button sgbp-button--highlight">Highlight</button>
    <button class="sgbp-button sgbp-button--danger">Danger</button>
`;

export const outline = () => `
    <a class="sgbp-button sgbp-button--outline">Default</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--outline sgbp-button--danger">Danger</a>
`;

export const link = () => `
    <a class="sgbp-button sgbp-button--link">Default</a>
    <a class="sgbp-button sgbp-button--link sgbp-button--accent">Accent</a>
    <a class="sgbp-button sgbp-button--link sgbp-button--danger">Danger</a>
`;

export const isActive = () => `
    <a class="sgbp-button  is-active">Default</a>
    <a class="sgbp-button sgbp-button--accent is-active">Accent</a>
    <a class="sgbp-button sgbp-button--danger is-active">Danger</a>
`;

export const disabled = () => `
    <button class="sgbp-button" disabled>Default</button>
    <button class="sgbp-button sgbp-button--accent" disabled>Accent</button>
    <button class="sgbp-button sgbp-button--danger" disabled>Disabled</button>
`;

export const block = () => `
    <a class="sgbp-button sgbp-button--block sgbp-button--accent">Button</a>
`;

export const sizes = () => `
    <a class="sgbp-button sgbp-button--small">Small</a>
    <a class="sgbp-button">Default</a>
    <a class="sgbp-button sgbp-button--big">Big</a>
`;

export const textAndIcon = () => `
    <div class="sgbp-row">
        <a class="sgbp-button sgbp-button--accent">
            <svg class="sgbp-button__icon sgbp-button__icon--left sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-left"></use></svg>
            Button
        </a>
    </div>

    <a class="sgbp-button sgbp-button--accent">
        Button
        <svg class="sgbp-button__icon sgbp-button__icon--right sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
    </a>
`;

export const iconOnly = () => `
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--small sgbp-button--icon">
          <svg class="sgbp-icon sgbp-icon--small"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--small sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon sgbp-icon--small"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
    <div class="sgbp-row">
      <a class="sgbp-button sgbp-button--big sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#clear"></use></svg>
      </a>
      <a class="sgbp-button sgbp-button--big sgbp-button--accent sgbp-button--icon">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
      </a>
    </div>
`;
