import {DescriptionDecorator} from '../../.storybook/decorators';

export default {
    title: 'Components/Modal',
};

window['shpModalDemoOpen'] = (id, animationClass) => {
    var animationClasses = ['sgbp-modal--bounceInDown', 'sgbp-modal--slideInUp', 'sgbp-modal--zoomIn', 'sgbp-modal--fadeIn'];
    var element = document.getElementById(id);

    if (animationClass) {
        animationClasses.forEach(function (className) {
            element.classList.remove(className);
        });
        element.classList.add(animationClass);
    }

    var demoElement = document.getElementById(id);
    demoElement.classList.add('is-open');
    document.querySelector('html').classList.add('is-sgbp-modal-open');
}

window['shpModalDemoClose'] = (id) => {
    document.getElementById(id).classList.remove('is-open');
    document.querySelector('html').classList.remove('is-sgbp-modal-open');
}

//language=HTML
export const Standard = () => `
    <div class="sgbp-modal sgbp-modal--withSeparator" id="test-modal-open">
        <div class="sgbp-modal__dialog">
            <div class="sgbp-modal__header">
                <button aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')"
                        class="sgbp-modal__closeButton sgbp-clickable sgbp-clickable--touchy">
                    <svg class="sgbp-modal__closeIcon sgbp-icon sgbp-icon--hoverAccent">
                        <use xlink:href="./assets/icons.svg#cross"></use>
                    </svg>
                </button>
                <div class="sgbp-headline sgbp-headline--h4">Modal Headline</div>
            </div>
            <div class="sgbp-modal__content">
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <div class="sgbp-modal__contentUnpadHorizontally sgbp-region sgbp-region--verticalOnly sgbp-region--highlight300 sgbp-row">
                    <div class="sgbp-modal__contentRepadHorizontally">
                        unpad horizontally
                    </div>
                </div>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
                <p class="sgbp-row">Modal Content</p>
            </div>
            <div class="sgbp-modal__footer">
                <div class="sgbp-grid sgbp-grid--guttersS">
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--white sgbp-button--block"
                                onclick="shpModalDemoClose('test-modal-open')">Close
                        </button>
                    </div>
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--accent sgbp-button--block">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>
`;

//language=HTML
export const Inline = () => `
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>
    <div style="position: relative; margin-top: 5px;">
        <div class="sgbp-modal sgbp-modal--inline" id="test-modal-open">
            <div class="sgbp-modal__dialog">
                <div class="sgbp-modal__header sgbp-modal__hiddenInline">
                    <button aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')"
                            class="sgbp-modal__closeIcon sgbp-clickable sgbp-clickable--touchy">
                        <svg class="sgbp-icon sgbp-icon--l sgbp-icon--hoverAccent">
                            <use xlink:href="./assets/icons.svg#cross"></use>
                        </svg>
                    </button>
                    <div class="sgbp-headline sgbp-headline--h4">Modal Headline</div>
                </div>
                <div class="sgbp-modal__content sgbp-modal__content--withSeparator">
                    <p>Modal Content</p>
                    <input class="sgbp-input">
                </div>
                <div class="sgbp-modal__footer">
                    <div class="sgbp-grid sgbp-grid--guttersS">
                        <div class="sgbp-grid__cell">
                            <button type="button" class="sgbp-button sgbp-button--white sgbp-button--block"
                                    onclick="shpModalDemoClose('test-modal-open')">Close
                            </button>
                        </div>
                        <div class="sgbp-grid__cell">
                            <button type="button" class="sgbp-button sgbp-button--accent sgbp-button--block">Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

//language=HTML
export const Bottom = () => `
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>
    <div class="sgbp-modal sgbp-modal--bottom" id="test-modal-open">
        <div class="sgbp-modal__dialog">
            <div class="sgbp-modal__header">
                <button aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')"
                        class="sgbp-modal__closeButton sgbp-clickable sgbp-clickable--touchy">
                    <svg class="sgbp-modal__closeIcon sgbp-icon sgbp-icon--hoverAccent">
                        <use xlink:href="./assets/icons.svg#cross"></use>
                    </svg>
                </button>
                <div class="sgbp-headline sgbp-headline--h4">Modal Headline</div>
            </div>
            <div class="sgbp-modal__content sgbp-modal__content--withSeparator">
                <p>Modal Content</p>
                <input class="sgbp-input">
            </div>
            <div class="sgbp-modal__footer">
                <div class="sgbp-grid sgbp-grid--guttersS">
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--white sgbp-button--block"
                                onclick="shpModalDemoClose('test-modal-open')">Close
                        </button>
                    </div>
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--accent sgbp-button--block">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

//language=HTML
export const BottomMDownOnly = () => `
    <button class="sgbp-button sgbp-button--primary" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>
    <div class="sgbp-modal sgbp-modal--bottomMDownOnly" id="test-modal-open">
        <div class="sgbp-modal__dialog">
            <div class="sgbp-modal__header">
                <button aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')"
                        class="sgbp-modal__closeButton sgbp-clickable sgbp-clickable--touchy">
                    <svg class="sgbp-modal__closeIcon sgbp-icon sgbp-icon--hoverAccent">
                        <use xlink:href="./assets/icons.svg#cross"></use>
                    </svg>
                </button>
                <div class="sgbp-headline sgbp-headline--h4">Modal Headline</div>
            </div>
            <div class="sgbp-modal__content sgbp-modal__content--withSeparator">
                <p>Modal Content</p>
                <input class="sgbp-input">
            </div>
            <div class="sgbp-modal__footer">
                <div class="sgbp-grid sgbp-grid--guttersS">
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--white sgbp-button--block"
                                onclick="shpModalDemoClose('test-modal-open')">Close
                        </button>
                    </div>
                    <div class="sgbp-grid__cell">
                        <button type="button" class="sgbp-button sgbp-button--accent sgbp-button--block">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
