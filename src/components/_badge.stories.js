export default {
  title: 'Components/Badge',
};

//language=HTML
export const Standard = () => `
    <div class="sgbp-badges">
        <span class="sgbp-badge">
          default
        </span>
        <span class="sgbp-badge sgbp-badge--accent">
          accent
        </span>
        <span class="sgbp-badge sgbp-badge--highlight">
          highlight
        </span>
        <span class="sgbp-badge sgbp-badge--transparent">
          transparent
        </span>
    </div>
`;

//language=HTML
export const Sizes = () => `
    <div class="sgbp-badges">
        <span class="sgbp-badge sgbp-badge--highlight sgbp-badge--xs">
          size xs
        </span>
        <span class="sgbp-badge sgbp-badge--highlight sgbp-badge--s">
          size s
        </span>
        <span class="sgbp-badge sgbp-badge--highlight">
          default
        </span>
        <span class="sgbp-badge sgbp-badge--highlight sgbp-badge--l">
          size l
        </span>
        <span class="sgbp-badge sgbp-badge--highlight sgbp-badge--xl">
          size xl
        </span>
    </div>
    `;

//language=HTML
export const Clickable = () => `
    <div class="sgbp-badges">
        <span class="sgbp-badge sgbp-badge--highlight sgbp-badge--clickable">
          highlight
        </span>
        <span class="sgbp-badge sgbp-badge--highlight200 sgbp-badge--clickable">
          highlight 200
        </span>
        <span class="sgbp-badge sgbp-badge--gray25 sgbp-badge--clickable">
          gray 25
        </span>
        <span class="sgbp-badge sgbp-badge--transparent sgbp-badge--clickable">
          transparent
        </span>
    </div>
    `;

//language=HTML
export const Icon = () => `
    <div class="sgbp-badges">
        <span class="sgbp-badge">
          <svg class="sgbp-badge__icon sgbp-icon sgbp-icon--xs"><use href="./assets/icons.svg#calendar"></use></svg> with icon
        </span>
        <span class="sgbp-badge sgbp-badge--accent">
          <svg class="sgbp-badge__icon sgbp-icon sgbp-icon--xs"><use href="./assets/icons.svg#calendar"></use></svg> with icon
        </span>
        <span class="sgbp-badge sgbp-badge--highlight">
          <svg class="sgbp-badge__icon sgbp-icon sgbp-icon--xs"><use href="./assets/icons.svg#calendar"></use></svg> with icon
        </span>
        <span class="sgbp-badge sgbp-badge--xs">
          <svg class="sgbp-badge__icon sgbp-icon sgbp-icon--xs"><use href="./assets/icons.svg#calendar"></use></svg> xs with icon
        </span>
        <span class="sgbp-badge sgbp-badge--info sgbp-badge--xl">
          <svg class="sgbp-badge__icon sgbp-icon sgbp-icon--s"><use href="./assets/icons.svg#calendar"></use></svg> l with icon
        </span>
    </div>
`;

//language=HTML
export const Transparent = () => `
    <div class="sgbp-region sgbp-region--accent">
        <span class="sgbp-badge sgbp-badge--transparent sgbp-badge--clickable">
          transparent 123
        </span>
        <span class="sgbp-badge sgbp-badge--transparent sgbp-badge--clickable">
          transparent 456
        </span>
    </div>
`;
