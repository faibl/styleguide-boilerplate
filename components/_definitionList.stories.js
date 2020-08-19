import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Lists/Definition List',
}

export const Standard = () => `
    <dl class="sgbp-definitionList">
       <dt class="sgbp-definitionList__term">Universität:</dt>
       <dd class="sgbp-definitionList__definition">Freie Universität Bozen</dd>
       <dt class="sgbp-definitionList__term">Fakultät:</dt>
       <dd class="sgbp-definitionList__definition">Fakultät für Design und Künste</dd>
       <dt class="sgbp-definitionList__term">Sachgebiet:</dt>
       <dd class="sgbp-definitionList__definition">Design</dd>
       <dd class="sgbp-definitionList__definition">Künste</dd>
       <dt class="sgbp-definitionList__term">Akkreditierung:</dt>
       <dd class="sgbp-definitionList__definition">staatlich</dd>
       <dd class="sgbp-definitionList__definition">hoch angesehen</dd>
       <dt class="sgbp-definitionList__term">More info:</dt>
       <dd class="sgbp-definitionList__definition">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat./dd>
    </dl>
`;

export const horizontal = () => `
    <dl class="sgbp-definitionList sgbp-definitionList--horizontal sgbp-definitionList--100">
       <dt class="sgbp-definitionList__term">Universität:</dt>
       <dd class="sgbp-definitionList__definition">Freie Universität Bozen</dd>
       <dt class="sgbp-definitionList__term">Fakultät:</dt>
       <dd class="sgbp-definitionList__definition">Fakultät für Design und Künste</dd>
       <dt class="sgbp-definitionList__term">Sachgebiet:</dt>
       <dd class="sgbp-definitionList__definition">Design</dd>
       <dd class="sgbp-definitionList__definition">Künste</dd>
       <dt class="sgbp-definitionList__term">Akkreditierung:</dt>
       <dd class="sgbp-definitionList__definition">staatlich</dd>
       <dd class="sgbp-definitionList__definition">hoch angesehen</dd>
       <dt class="sgbp-definitionList__term">More info:</dt>
       <dd class="sgbp-definitionList__definition">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat./dd>
    </dl>
`;
horizontal.story = {
    decorators: [DescriptionDecorator([
        'You can specifiy the width of the term "column" by applying the modifiers `sgbp-definitionList--50`, `sgbp-definitionList--1000`, ..., `sgbp-definitionList--250`',
    ])]
};
