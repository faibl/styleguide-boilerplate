import {Section, Sections} from '../../.storybook/renderers';

export default {
  title: 'Components/Forms/Input Addon',
};

//language=HTML
export const Default = () =>
  Sections([
    Section(
      'Standard',
      `
        <div class="sgbp-inputAddon sgbp-row">
          <div class="sgbp-inputAddon__addon">§</div>
          <input type="text" class="sgbp-inputAddon__input sgbp-input">
          <div class="sgbp-inputAddon__addon">
            <button type="button" class="sgbp-button sgbp-button--s">OK</button>
          </div>
        </div>
      `
    ),
    Section(
      'Textarea',
      `
        <div class="sgbp-inputAddon sgbp-row">
          <div class="sgbp-inputAddon__addon">§</div>
          <textarea type="text" class="sgbp-inputAddon__input sgbp-input" style="min-height: 120px"></textarea>
          <div class="sgbp-inputAddon__addon">
            <button type="button" class="sgbp-button sgbp-button--s">OK</button>
          </div>
        </div>
      `
    ),
    Section(
      'With sections (tooltip and text)',
      `
        <div class="sgbp-inputAddon sgbp-row">
          <input type="text" class="sgbp-inputAddon__input sgbp-input">
          <div class="sgbp-inputAddon__addon">
            <div class="sgbp-inputAddon__addonSection">
              30
            </div>
            <div class="sgbp-inputAddon__addonSection">
              <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--left">
                <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon">
                  <use href="./assets/icons.svg#info-circle"></use>
                </svg>
                <div class="sgbp-tooltip__content" style="width: 250px">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                  dolore magna aliquam erat volutpat.<br>
                  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                  commodo consequat.<br>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    ),
  ]);
