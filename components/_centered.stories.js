export default {
    title: 'Components/Layout/Centered',
}

export const horizontally = () => `
    <div class="sgbp-centered sgbp-centered--horizontally" style="height: 10rem; background-color: lightblue; padding: 0.5rem">
        <p>Lorem ipsum</p>
    </div>
`;

export const vertically = () => `
    <div class="sgbp-centered sgbp-centered--vertically" style="height: 10rem; background-color: lightblue; padding: 0.5rem">
        <p>Lorem ipsum</p>
    </div>
`;

export const both = () => `
    <div class="sgbp-centered sgbp-centered--vertically sgbp-centered--horizontally" style="height: 10rem; background-color: lightblue; padding: 0.5rem">
        <p>Lorem ipsum</p>
    </div>
`;
