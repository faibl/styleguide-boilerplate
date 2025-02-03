import { Section, Sections } from '../../.storybook/renderers';

export default {
    title: 'Components/Postfix',
};

//language=HTML
export const Gutters = () =>
    Sections([
        Section(
            'no gutters',
            `
                <div class="sgbp-postfix">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters 3XS',
            `
                <div class="sgbp-postfix sgbp-postfix--gutters3XS">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters 2XS',
            `
                <div class="sgbp-postfix sgbp-postfix--gutters2XS">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters XS',
            `
                <div class="sgbp-postfix sgbp-postfix--guttersXS">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters S',
            `
                <div class="sgbp-postfix sgbp-postfix--guttersS">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters (default = S)',
            `
                <div class="sgbp-postfix sgbp-postfix--gutters">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters M',
            `
                <div class="sgbp-postfix sgbp-postfix--guttersM">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters L',
            `
                <div class="sgbp-postfix sgbp-postfix--guttersL">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters XL',
            `
                <div class="sgbp-postfix sgbp-postfix--guttersXL">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
        Section(
            'gutters 3XL',
            `
                <div class="sgbp-postfix sgbp-postfix--gutters3XL">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),

        Section(
            'responsive gutters',
            `
                <div class="sgbp-postfix sgbp-postfix--gutters3XS sgbp-postfix[m]--guttersS sgbp-postfix[xl]--guttersM">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">fluid</div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">fixed</div>
                </div>
            `
        ),
    ]);

//language=HTML
export const ReverseMUp = () => `
    <div class="sgbp-postfix sgbp-postfix[m]--reverse sgbp-postfix--reverseStacked sgbp-postfix--gutters">
        <div class="sgbp-postfix__fluid sgbp-region sgbp-region--highlight300">
            first in html
        </div>
        <div class="sgbp-postfix__fluid sgbp-region sgbp-region--highlight500">
            second in html
        </div>
        <div class="sgbp-postfix__fixed sgbp-region sgbp-region--highlight700">
            third in html
        </div>
    </div>
`;

//language=HTML
export const StackedOnSmallScreens = () => `
    <div class="sgbp-postfix sgbp-postfix[screen-s]--stacked sgbp-postfix--gutters">
        <input type="text" class="sgbp-postfix__fluid sgbp-input" placeholder="Search">
        <button type="submit" class="sgbp-postfix__fixed sgbp-button sgbp-button--primary">
            Search
        </button>
    </div>
`;

//language=HTML
export const ReverseStackedOnSmallScreens = () => `
    <div class="sgbp-postfix sgbp-postfix[screen-s]--stacked sgbp-postfix--reverseStacked sgbp-postfix--between sgbp-postfix--gutters">
        <button type="submit" class="sgbp-postfix__fixed sgbp-button sgbp-button--accent100 sgbp-button--block">
            back
        </button>
        <button type="submit" class="sgbp-postfix__fixed sgbp-button sgbp-button--primary sgbp-button--block">
            next
        </button>
    </div>
`;

export const StackedOnLargeScreens = () => `
    <div class="sgbp-postfix sgbp-postfix[screen-m-up]--stacked sgbp-postfix--between sgbp-postfix--gutters">
        <button type="submit" class="sgbp-postfix__fixed sgbp-button sgbp-button--accent100 sgbp-button--block">
            back
        </button>
        <button type="submit" class="sgbp-postfix__fixed sgbp-button sgbp-button--primary sgbp-button--block">
            next
        </button>
    </div>
`;

//language=HTML
export const Alignments = () =>
    Sections([
        Section(
            'default',
            `
                <div class="sgbp-postfix">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">
                        <p>
                            fluid 1
                        </p>
                        <p>
                            fluid 2
                        </p>
                        <p>
                            fluid 3
                        </p>
                    </div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">
                        <svg class="sgbp-postfix__icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#plus"></use></svg>
                    </div>
                </div>`
        ),
        Section(
            'top',
            `
                <div class="sgbp-postfix sgbp-postfix--top">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">
                        <p>
                            fluid 1
                        </p>
                        <p>
                            fluid 2
                        </p>
                        <p>
                            fluid 3
                        </p>
                    </div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">
                        <svg class="sgbp-postfix__icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#plus"></use></svg>
                    </div>
                </div>`
        ),
        Section(
            'baseline',
            `
                <div class="sgbp-postfix sgbp-postfix--baseline">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">
                        <p>
                            fluid 1
                        </p>
                        <p>
                            fluid 2
                        </p>
                        <p>
                            fluid 3
                        </p>
                    </div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">
                        <svg class="sgbp-postfix__icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#plus"></use></svg>
                    </div>
                </div>`
        ),
        Section(
            'center',
            `
                <div class="sgbp-postfix sgbp-postfix--center">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">
                        <p>
                            fluid 1
                        </p>
                        <p>
                            fluid 2
                        </p>
                        <p>
                            fluid 3
                        </p>
                    </div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">
                        <svg class="sgbp-postfix__icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#plus"></use></svg>
                    </div>
                </div>`
        ),
        Section(
            'bottom',
            `
                <div class="sgbp-postfix sgbp-postfix--bottom">
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent100">fixed</div>
                    <div class="sgbp-postfix__fluid sgbp-region sgbp-region--accent200">
                        <p>
                            fluid 1
                        </p>
                        <p>
                            fluid 2
                        </p>
                        <p>
                            fluid 3
                        </p>
                    </div>
                    <div class="sgbp-postfix__fixed sgbp-region sgbp-region--accent600">
                        <svg class="sgbp-postfix__icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#plus"></use></svg>
                    </div>
                </div>`
        ),
    ]);
