import { configure, addDecorator } from '@storybook/html';

import '../src/styleguide.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);

const PageWrapperDecorator = (storyFn) => `
<div class="sgbp-pageWrapper">
    <div class="sgbp-region">${storyFn()}
</div>`;
addDecorator(PageWrapperDecorator);
