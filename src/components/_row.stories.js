import { Section, Sections } from '../../.storybook/renderers';
import { DescriptionDecorator, UnpadHorizontally } from '../../.storybook/decorators';

export default {
  title: 'Components/Row',
  decorators: [DescriptionDecorator(['Rows add defined vertical margins to an element'])],
};

export const Standard = () =>
  Sections([
    Section(
      'Default (margin bottom, size s)',
      `
        <div class="sgbp-row">
            Row 1
        </div>
        <div class="sgbp-row">
            Row 2
        </div>
        <div class="sgbp-row">
            Row 3
        </div>
      `
    ),
    Section(
      'Inverse (margin top)',
      `
        <div class="sgbp-row sgbp-row--inverse">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--inverse">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--inverse">
            Row 3
        </div>
      `
    ),
    Section(
      'XS',
      `
        <div class="sgbp-row sgbp-row--xs">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--xs">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--xs">
            Row 3
        </div>
      `
    ),
    Section(
      'S (Default)',
      `
        <div class="sgbp-row sgbp-row--s">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--s">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--s">
            Row 3
        </div>
      `
    ),
    Section(
      'M',
      `
        <div class="sgbp-row sgbp-row--m">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--m">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--m">
            Row 3
        </div>
      `
    ),
    Section(
      'L',
      `
        <div class="sgbp-row sgbp-row--l">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--l">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--l">
            Row 3
        </div>
      `
    ),
    Section(
      'XL',
      `
        <div class="sgbp-row sgbp-row--xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--xl">
            Row 3
        </div>
      `
    ),
    Section(
      '[m] none',
      `
        <div class="sgbp-row sgbp-row[m]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row[m]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row[m]--none">
            Row 3
        </div>
      `
    ),
    Section(
      '[l] none',
      `
        <div class="sgbp-row sgbp-row[l]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row[l]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row[l]--none">
            Row 3
        </div>
      `
    ),
    Section(
      '[xl] none',
      `
        <div class="sgbp-row sgbp-row[xl]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row[xl]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row[xl]--none">
            Row 3
        </div>
      `
    ),
    Section(
    'xl, [m] none, inverse',
          `
        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--xl sgbp-row--inverse sgbp-row[m]--none">
            Row 3
        </div>
      `
    ),
  ]);
