import { Section, Sections } from '../../.storybook/renderers';

export default {
  title: 'Components/Forms/Checkbox Switch',
};

//language=HTML
export const Standard = () =>
  Sections([
    Section(
      'Default (accent)',
      `
    <label class="sgbp-checkboxSwitch">
      <input type="checkbox" class="sgbp-checkboxSwitch__control" />
      <div class="sgbp-checkboxSwitch__switch"></div>
    </label>
  `
    ),
    Section(
      'Highlight',
      `
    <label class="sgbp-checkboxSwitch sgbp-checkboxSwitch--highlight">
      <input type="checkbox" class="sgbp-checkboxSwitch__control" />
      <div class="sgbp-checkboxSwitch__switch"></div>
    </label>
  `
    ),
    Section(
      'Disabled',
      `
    <label class="sgbp-checkboxSwitch sgbp-checkboxSwitch--highlight">
      <input type="checkbox" disabled class="sgbp-checkboxSwitch__control" />
      <div class="sgbp-checkboxSwitch__switch"></div>
    </label>
  `
    ),
  ]);
