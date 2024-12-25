import '../src/styleguide.scss';

const PageWrapperDecorator = (storyFn, options) => {
    if (options?.args?.disablePageWrapperDecorator) {
        return storyFn();
    }

    return `
        <div class="sgbp-pageWrapper">
            ${storyFn()}
        </div>
    `;
}

export const decorators = [
    PageWrapperDecorator
];
