import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Loading/Loading Indicator',
}

export const Standard = () => `
  <div class="sgbp-loadingIndicator"></div>
`;

export const Sizes = () => `
  <div class="sgbp-loadingIndicator sgbp-loadingIndicator--sizeS"></div>
  <div class="sgbp-loadingIndicator sgbp-loadingIndicator--sizeM"></div>
  <div class="sgbp-loadingIndicator sgbp-loadingIndicator--sizeL"></div>
`;
