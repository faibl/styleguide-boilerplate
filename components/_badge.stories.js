export default {
    title: 'Components/Badge',
}

export const Standard = () => `
    <div class="sgbp-badge sgbp-badge--info">100</div>
    <div class="sgbp-badge sgbp-badge--success">10</div>
    <div class="sgbp-badge sgbp-badge--warning">1</div>
    <div class="sgbp-badge sgbp-badge--error">0</div>
    <div class="sgbp-badge sgbp-badge--info">2</div>
    <div class="sgbp-badge sgbp-badge--accent">3</div>
    <div class="sgbp-badge sgbp-badge--highlight">4</div>
`;

export const Sizes = () => `
    <div class="sgbp-badge">Default</div>
    <div class="sgbp-badge sgbp-badge--big">Big</div>
`;
