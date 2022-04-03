import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Lists/Key Value List',
}

export const DefaultVertical = () => `
    <ul class="sgbp-keyValueList">
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Ausweisnummer</div>
        <div class="sgbp-keyValueList__value">100003</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied seit</div>
        <div class="sgbp-keyValueList__value">01.01.2018</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied bis</div>
        <div class="sgbp-keyValueList__value">31.12.2020</div>
      </li>
    </ul>
`;

export const horizontal = () => `
    <ul class="sgbp-keyValueList sgbp-keyValueList--horizontal">
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Ausweisnummer</div>
        <div class="sgbp-keyValueList__value">100003</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied seit</div>
        <div class="sgbp-keyValueList__value">01.01.2018</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied bis</div>
        <div class="sgbp-keyValueList__value">31.12.2020</div>
      </li>
    </ul>
`;

export const horizontalMediumUp = () => `
    <ul class="sgbp-keyValueList sgbp-keyValueList--horizontalMediumUp">
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Ausweisnummer</div>
        <div class="sgbp-keyValueList__value">100003</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied seit</div>
        <div class="sgbp-keyValueList__value">01.01.2018</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied bis</div>
        <div class="sgbp-keyValueList__value">31.12.2020</div>
      </li>
    </ul>
`;



export const EmphasizedKeysVertical = () => `
    <ul class="sgbp-keyValueList sgbp-keyValueList--emphasizedKeys">
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Ausweisnummer</div>
        <div class="sgbp-keyValueList__value">100003</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied seit</div>
        <div class="sgbp-keyValueList__value">01.01.2018</div>
      </li>
      <li class="sgbp-keyValueList__item">
        <div class="sgbp-keyValueList__key">Mitglied bis</div>
        <div class="sgbp-keyValueList__value">31.12.2020</div>
      </li>
    </ul>
`;

horizontalMediumUp.decorators = [
    DescriptionDecorator(
        ['Use the modifier `sgbp-keyValueList--horizontalMediumUp` or `sgbp-keyValueList--horizontalLargeUp` to make this widget responsive.']
    ),
];
