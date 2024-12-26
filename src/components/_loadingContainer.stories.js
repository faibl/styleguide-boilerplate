import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Loading/Loading Container',
    decorators: [DescriptionDecorator(['Add class `is-loading` to show loading indicator'])],
}

export const Standard = () => `
    <div class="sgbp-loadingContainer sgbp-region sgbp-region--gray100 sgbp-row" id="test-loading-container1">
        <div class="sgbp-loadingContainer__loader">
            <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator">Loading</div>
        </div>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
    </div>
    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById('test-loading-container1').classList.toggle('is-loading');">Toggle loading</button>
`;

export const blocking = () => `
    <div class="sgbp-loadingContainer sgbp-region sgbp-region--gray100 is-blocking sgbp-row" id="test-loading-container2">
        <div class="sgbp-loadingContainer__loader">
            <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator">Loading</div>
        </div>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
    </div>
    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById('test-loading-container2').classList.toggle('is-loading');">Toggle loading</button>
`;
blocking.decorators = [DescriptionDecorator(['Add class `is-blocking` to show blocking loading indicator'])];
