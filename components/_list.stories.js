import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Lists/UL and OL',
}

export const Standard = () => `
    <ul class="sgbp-list">
       <li>List item 1</li>
       <li>List item 2</li>
       <li>List item 3</li>
    </ul>
`;

export const bulleted = () => `
    <ul class="sgbp-list sgbp-list--bulleted">
       <li>List item 1</li>
       <li>List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</li>
       <li>List item 3</li>
    </ul>
`;

export const numbered = () => `
    <ol class="sgbp-list sgbp-list--numbered">
       <li>List item 1</li>
       <li>List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</li>
       <li>List item 3</li>
    </ol>
`;

export const fakeWithoutLiElements = () => `
    <div class="sgbp-list sgbp-list--bulleted">
       <div class="sgbp-list__item">List item 1</div>
       <div class="sgbp-list__item">List item 2, that has content that goes over more than one line, it contains a lot of words. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</div>
       <div class="sgbp-list__item">List item 3</div>
    </div>
`;
fakeWithoutLiElements.decorators = [
    DescriptionDecorator(['If you need to force the list style on non-li elements, simply add the class `sgbp-list__item` to the list items.']),
];
