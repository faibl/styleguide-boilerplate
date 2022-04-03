import '../tmp/styleguide.css';

const PageWrapperDecorator = (storyFn) => `
<div class="sgbp-pageWrapper">
    ${storyFn()}
</div>`;

export const decorators = [
    PageWrapperDecorator
];
