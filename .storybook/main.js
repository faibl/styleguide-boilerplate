module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-webpack5-compiler-babel', '@chromatic-com/storybook'],
  staticDirs: [
    { from: '../src/assets', to: '/assets' },
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {},
};
