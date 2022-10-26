import {DescriptionDecorator} from "../../.storybook/decorators";
import {colors} from "./_icon.stories";

export default {
    title: 'Components/Layout/Modal',
}

window['shpModalDemoOpen'] = (id, animationClass) => {
    var animationClasses = ['sgbp-modal--bounceInDown', 'sgbp-modal--slideInUp', 'sgbp-modal--zoomIn', 'sgbp-modal--fadeIn'];
    var element = document.getElementById(id);

    if (animationClass) {
        animationClasses.forEach(function(className) { element.classList.remove(className); });
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

export const Standard = () => `
    <div class="sgbp-modal" id="test-modal-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region sgbp-region--accent">
                <div class="sgbp-modal__headerContent">
                    <h1 class="sgbp-headline sgbp-headline--h3">Modal Headline</h1>
                </div>
                <button class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#close"></use>
                    </svg>
                </button>
           </div>
           <div class="sgbp-modal__content sgbp-region">
                <div class="sgbp-readingBlock">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                </div>
           </div>
           <div class="sgbp-modal__footer sgbp-region sgbp-text sgbp-text--rightAligned">
               <button type="button" class="sgbp-button" onclick="shpModalDemoClose('test-modal-open')">Cancel</button>
               <button type="button" class="sgbp-button sgbp-button--accent">Submit</button>
           </div>
       </div>
    </div>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-open')">Open modal</button>
`;

export const fullWidth = () => `
    <div class="sgbp-modal sgbp-modal--fullWidth" id="test-modal-fullWidth-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region">
                <div class="sgbp-modal__headerContent">
                    <div class="sgbp-row sgbp-row--xs"><h1 class="sgbp-headline sgbp-headline--h4 sgbp-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullWidth-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#close"></use>
                    </svg>
                </span>
           </div>
           <div class="sgbp-modal__content sgbp-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-fullWidth-open')">Open modal</button>
`;

export const fullHeight = () => `
    <div class="sgbp-modal sgbp-modal--fullHeight sgbp-modal--zoomIn" id="test-modal-fullHeight-open">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__header sgbp-region">
                <div class="sgbp-modal__headerContent">
                    <div class="sgbp-row sgbp-row--xs"><h1 class="sgbp-headline sgbp-headline--h4 sgbp-headline--primary">Modal Headline</h1></div>
                </div>
                <span class="sgbp-modal__headerClose sgbp-clickable sgbp-clickable--touchy" aria-hidden="true" onclick="shpModalDemoClose('test-modal-fullHeight-open')">
                    <svg class="sgbp-icon">
                       <use xlink:href="./assets/icons.svg#close"></use>
                    </svg>
                </span>
           </div>
           <div class="sgbp-modal__content sgbp-region">
               Modal Content
           </div>
       </div>
    </div>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-fullHeight-open')">Open modal</button>
`;

export const customAnimation = () => `
    <div class="sgbp-modal sgbp-modal--fadeIn" id="test-modal-animation">
       <div class="sgbp-modal__dialog">
           <div class="sgbp-modal__content sgbp-region" style="width: 300px; height: 250px;">
               Modal Content
           </div>
           <div class="sgbp-modal__footer sgbp-region">
                <button type="button" class="sgbp-button sgbp-button--wide" onclick="shpModalDemoClose('test-modal-animation')">Close</button>
           </div>
       </div>
    </div>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--zoomIn')">zoomIn</button>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--fadeIn')">fadeIn</button>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--slideInUp')">slideInUp</button>
    <button class="sgbp-button" onclick="shpModalDemoOpen('test-modal-animation', 'sgbp-modal--bounceInDown')">bounceInDown</button>
`;
customAnimation.decorators = [
    DescriptionDecorator([
        'You can control the entry animation by adding these modifiers: `sgbp-modal--zoomIn`, `sgbp-modal--fadeIn`, `sgbp-modal--slideInUp`, `sgbp-modal--bounceInDown` (if the animation component is included).',
    ]),
];
