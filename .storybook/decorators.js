export const DescriptionDecorator = (descriptions) => (storyFn) => {
    const renderedDescriptions = descriptions.reduce((text, description) => `${text}<div class="sgbp-paragraph">${description}</div>`, '');
    return `
        ${renderedDescriptions}
        <hr class="sgbp-separator sgbp-separator--light">
        ${storyFn()}
    `;
};

/**
 * Use UnpadHorizontally for examples the should bis displayed without left/right canvas padding
 */
export const UnpadHorizontally = function (storyFn) {
    return `
        <div class="sgbp-region__unpadHorizontally">
            ${storyFn()}
        </div>
    `;
};

export const MaxWidthDecorator = (maxWidth) => (storyFn) => {
    return `
        <div style="max-width: ${maxWidth}">
            ${storyFn()}
        </div>
    `;
};