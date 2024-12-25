import { Section, Sections } from '../../.storybook/renderers';
import { DescriptionDecorator, UnpadHorizontally } from '../../.storybook/decorators';

export default {
  title: 'Components/Row',
  decorators: [DescriptionDecorator(['Rows add vertical spacing'])],
};

//language=HTML
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
      '3XS',
      `
        <div class="sgbp-row sgbp-row--3xs">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--3xs">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--3xs">
            Row 3
        </div>
      `
    ),
    Section(
      '2XS',
      `
        <div class="sgbp-row sgbp-row--2xs">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--2xs">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--2xs">
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
      '2XL',
      `
        <div class="sgbp-row sgbp-row--2xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--2xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--2xl">
            Row 3
        </div>
      `
    ),
    Section(
      '3XL',
      `
        <div class="sgbp-row sgbp-row--3xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--3xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--3xl">
            Row 3
        </div>
      `
    ),
    Section(
      '4XL',
      `
        <div class="sgbp-row sgbp-row--4xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--4xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--4xl">
            Row 3
        </div>
      `
    ),
    Section(
      '5XL',
      `
        <div class="sgbp-row sgbp-row--5xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--5xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--5xl">
            Row 3
        </div>
      `
    ),
    Section(
      '6XL',
      `
        <div class="sgbp-row sgbp-row--6xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--6xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--6xl">
            Row 3
        </div>
      `
    ),
    Section(
      '7XL',
      `
        <div class="sgbp-row sgbp-row--7xl">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--7xl">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--7xl">
            Row 3
        </div>
      `
    ),
    Section(
      '[s]--s, [m]--xl, [xl]--none',
      `
        <div class="sgbp-row sgbp-row--s sgbp-row[m]--xl sgbp-row[xl]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--s sgbp-row[m]--xl sgbp-row[xl]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--s sgbp-row[m]--xl sgbp-row[xl]--none">
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
      '4xl, [m] none, inverse',
      `
        <div class="sgbp-row sgbp-row--4xl sgbp-row--inverse sgbp-row[m]--none">
            Row 1
        </div>
        <div class="sgbp-row sgbp-row--4xl sgbp-row--inverse sgbp-row[m]--none">
            Row 2
        </div>
        <div class="sgbp-row sgbp-row--4xl sgbp-row--inverse sgbp-row[m]--none">
            Row 3
        </div>
      `
    ),
  ]);

//language=HTML
export const NoneIfLastChild = () => `
    <div class="sgbp-region sgbp-region--gray">
        <div class="sgbp-region sgbp-region--white sgbp-row sgbp-row--xl sgbp-row--noneIfLastChild">row 1</div>
        <div class="sgbp-region sgbp-region--white sgbp-row sgbp-row--xl sgbp-row--noneIfLastChild">row 2</div>
        <div class="sgbp-region sgbp-region--white sgbp-row sgbp-row--xl sgbp-row--noneIfLastChild">row 3</div>
    </div>
`;
