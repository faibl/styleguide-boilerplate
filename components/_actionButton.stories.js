export default {
    title: 'Components/ActionButton',
}

export const Standard = () => `
 <div class="sgbp-actionButton">
  <a class="sgbp-actionButton__button sgbp-button sgbp-button--accent sgbp-button--icon">
    <svg class="sgbp-actionButton__icon sgbp-icon"><use xlink:href="./assets/icons.svg#pin"></use></svg>
  </a>
</div>
`;

export const Sizes = () => `
 <div class="sgbp-actionButton">
  <a class="sgbp-actionButton__button sgbp-button sgbp-button--accent sgbp-button--icon">
    <svg class="sgbp-actionButton__icon sgbp-icon"><use xlink:href="./assets/icons.svg#pin"></use></svg>
  </a>
</div>
 <div class="sgbp-actionButton sgbp-actionButton--small">
  <a class="sgbp-actionButton__button sgbp-button sgbp-button--accent sgbp-button--icon">
    <svg class="sgbp-actionButton__icon sgbp-icon"><use xlink:href="./assets/icons.svg#pin"></use></svg>
  </a>
</div>
`;

export const Flyout = () => `
<div class="kge-text sgbp-text--rightAligned">
    <div class="sgbp-actionButton sgbp-tooltip sgbp-tooltip--left sgbp-tooltip--middle">
      <a class="sgbp-actionButton__button sgbp-button sgbp-button--accent sgbp-button--icon sgbp-tooltip__trigger">
        <svg class="sgbp-actionButton__icon sgbp-icon"><use xlink:href="./assets/icons.svg#pin"></use></svg>
      </a>
      <div class="sgbp-actionButton__flyout sgbp-tooltip__content sgbp-region sgbp-region--gray">
        <div class="sgbp-actionButton__flyoutIcons">
          <svg class="sgbp-actionButton__icon sgbp-icon" style="color: green;"><use xlink:href="./assets/icons.svg#pin"></use></svg>
          <svg class="sgbp-actionButton__icon sgbp-icon" style="color: pink;"><use xlink:href="./assets/icons.svg#pin"></use></svg>
          <svg class="sgbp-actionButton__icon sgbp-icon" style="color: orange;"><use xlink:href="./assets/icons.svg#pin"></use></svg>
          <svg class="sgbp-actionButton__icon sgbp-icon"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
        </div>
      </div>
    </div>
</div>
`;
