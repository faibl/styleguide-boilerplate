module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [],
  staticDirs: [
    { from: '../src/assets', to: '/assets' },
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  docs: {
    autodocs: false,
  },
};
