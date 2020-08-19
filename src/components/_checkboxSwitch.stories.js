export default {
    title: 'Components/Forms/Checkox Switch',
}

export const Standard = () => `
     <div class="sgbp-inputGroup">
        <label class="sgbp-checkboxSwitch">
            <input type="checkbox" class="sgbp-checkboxSwitch__control">
            <div class="sgbp-checkboxSwitch__switch"></div>
        </label>
    </div>
    <div class="sgbp-inputGroup">
        <label class="sgbp-checkboxSwitch">
            <input type="checkbox" class="sgbp-checkboxSwitch__control" checked>
            <div class="sgbp-checkboxSwitch__switch"></div>
        </label>
    </div>
    <div class="sgbp-inputGroup">
        <label class="sgbp-checkboxSwitch">
            <input type="checkbox" class="sgbp-checkboxSwitch__control" disabled>
            <div class="sgbp-checkboxSwitch__switch"></div>
        </label>
    </div>
`;
