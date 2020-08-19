export const DescriptionDecorator = (descriptions) => (storyFn) => {
    const renderedDescriptions = descriptions.reduce((text, description) => `${text}<div class="sgbp-paragraph">${description}</div>`, '');
    return `
        ${renderedDescriptions}
        <hr class="sgbp-separator sgbp-separator--light">
        ${storyFn()}
    `;
};

export const MaxWidthDecorator = (maxWidth) => (storyFn) => {
    return `
        <div style="max-width: ${maxWidth}">
            ${storyFn()}
        </div>
    `;
};
