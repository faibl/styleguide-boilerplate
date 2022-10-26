export const Section = (title, content, classes = '') => {
    return `
        <section class="sgbp-row sgbp-row--xl ${classes}">
            <h3 class="sgbp-headline sgbp-headline--h3 sgbp-headline--text sgbp-headline--firstInText">
                ${title}
            </h3>
            ${content}
        </section>
    `
}

export const Sections = (sections) => {
    return sections.join('');
}
