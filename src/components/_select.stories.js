export default {
    title: 'Components/Forms/Select',
}

const selectOptions = `
    <option class="sgbp-select__option">Option 1</option>
      <option class="sgbp-select__option">Option 2</option>
      <option class="sgbp-select__option">Option 3</option>
      <option class="sgbp-select__option">Option 4</option>
      <option class="sgbp-select__option">Option 5</option>
      <option class="sgbp-select__option">Option 6</option>
      <option class="sgbp-select__option">Option 7</option>
`;

export const Standard = () => `<select class="sgbp-select">${selectOptions}</select>`;
export const inline = () => `<select class="sgbp-select sgbp-select--inline">${selectOptions}</select>`;
export const expanded = () => `<select class="sgbp-select" size="5">${selectOptions}</select>`;
export const multiple = () => `<select class="sgbp-select" size="5" multiple>${selectOptions}</select>`;
