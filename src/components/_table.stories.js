import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/Table',
    decorators: [
        DescriptionDecorator(
            [
                'You can force full-width tables by adding the `sgbp-table--block` modifier to the table element.',
                'Add the `sgbp-table__cell--numeric` modifier to table cells containing numeric values.',
                'Wrap tables in a (figure) element with the class `sgbp-tableWrapper` to add a nice background (that also fills the whitespace at the righthand side of narrow tables)',
            ]
        )
    ]
}

export const Standard = () => `
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                        <label class="sgbp-checkbox">
                            <input type="checkbox" class="sgbp-checkbox__control">
                            <span class="sgbp-checkbox__label"></span>
                        </label>
                    </div>
                 </th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row is-deleted">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">
                    <input type="text" class="sgbp-input" value="Cell 2 - a">
                 </td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#clear"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row sgbp-table__row--separatorTop sgbp-table__row--separatorBottom">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">With Separator</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Another headline</td>
                 <td class="sgbp-table__cell">Cell 4 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row is-inactive">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Inactive row</td>
                 <td class="sgbp-table__cell">Cell 4 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row sgbp-table__row--highlight">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Highlighted</td>
                 <td class="sgbp-table__cell">Cell 5 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>

         </tbody>
      </table>
    </figure>
`;

export const block = () => `
<figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--block">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions sgbp-table__cell--actions">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row is-deleted">
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">Cell 2 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
`;
block.story = {
    decorators: [DescriptionDecorator(['Add the modifier `sgbp-table--block` to display the table as a full-width block.'])]
};

export const bordered = () => `
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--bordered">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions sgbp-table__cell--actions">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row is-deleted">
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">Cell 2 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row sgbp-table__row--highlight">
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Highlighted row Cell a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
`;

export const striped = () => `
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--striped">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions sgbp-table__cell--actions">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">
                    <input type="text" class="sgbp-input" value="Cell 2 - a">
                 </td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#clear"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight">Highlighted cell</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">
                    <div class="sgbp-centered sgbp-centered--horizontally">
                         <label class="sgbp-checkbox">
                             <input type="checkbox" class="sgbp-checkbox__control">
                             <span class="sgbp-checkbox__label"></span>
                         </label>
                     </div>
                 </td>
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
`;

export const hoverRows = () => `
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--hover">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col A</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col B</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col C</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions sgbp-table__cell--separatorLeft">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell">Cell 1 - b</td>
                 <td class="sgbp-table__cell">Cell 1 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">Cell 2 - a</td>
                 <td class="sgbp-table__cell">Cell 2 - b</td>
                 <td class="sgbp-table__cell">Cell 2 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell">Cell 3 - b</td>
                 <td class="sgbp-table__cell">Cell 3 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
`;
hoverRows.story = {
    decorators: [DescriptionDecorator(['Add `sgbp-table--hover` class to the `table` element to highlight rows on hover.'])]
};

export const compact = () => `
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--compact">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col A</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col B</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col C</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 1</td>
                 <td class="sgbp-table__cell">Cell 1 - a</td>
                 <td class="sgbp-table__cell">Cell 1 - b</td>
                 <td class="sgbp-table__cell">Cell 1 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 2</td>
                 <td class="sgbp-table__cell">Cell 2 - a</td>
                 <td class="sgbp-table__cell">Cell 2 - b</td>
                 <td class="sgbp-table__cell">Cell 2 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell">Headline 3</td>
                 <td class="sgbp-table__cell">Cell 3 - a</td>
                 <td class="sgbp-table__cell">Cell 3 - b</td>
                 <td class="sgbp-table__cell">Cell 3 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
         </tbody>
      </table>
    </figure>
`;
compact.story = {
    decorators: [DescriptionDecorator(['Add `sgbp-table--compact` class to render the table more compact'])]
};