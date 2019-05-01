## Table

You can force full-width tables by adding the `sgbp-table--block` modifier to the table element.

Add the `sgbp-table__cell--numeric` modifier to table cells containing numeric values.

Wrap tables in a (figure) element with the class `sgbp-tableWrapper` to add a nice background (that also fills the whitespace at the righthand side of narrow tables)

### Table (default):

    @example
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--responsiveSmallDown">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row is-deleted">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 1</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 2</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 2 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
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

### Table (bordered):

    @example
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--bordered sgbp-table--responsiveSmallDown">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row is-deleted">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 1</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 2</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 2 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
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

### Table (striped):

    @example
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--striped sgbp-table--responsiveSmallDown">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 1</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 1 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">4323.46</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">192.565</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 2</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 2 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">10107.43</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">667.01</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight" data-sgbp-th="Col A (text)">Cell 3 - a</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col B (numeric)">980.20</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--numeric" data-sgbp-th="Col C (numeric)">1001.24</td>
                 <td class="sgbp-table__cell sgbp-table__cell--highlight sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
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

### Table (hover rows):

Add `sgbp-table--hover` class to the `table` element to highlight rows on hover.

    @example
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--hover sgbp-table--responsiveSmallDown">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col A</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col B</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col C</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--separatorLeft">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 1</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 1 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 1 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 1 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 2</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 2 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 2 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 2 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 3 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 3 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 3 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline sgbp-table__cell--separatorLeft">
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

### Table (compact):

Add `sgbp-table--compact` class to render the table more compact

    @example
    <figure class="sgbp-tableWrapper">
      <table class="sgbp-table sgbp-table--data sgbp-table--compact sgbp-table--responsiveSmallDown">
         <thead>
             <tr class="sgbp-table__row">
                 <th class="sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--contentAsResponsiveHeadline">Headline</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col A</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col B</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Col C</th>
                 <th class="sgbp-table__cell sgbp-table__cell--headline">Edit</th>
             </tr>
         </thead>
         <tbody>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 1</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 1 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 1 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 1 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 2</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 2 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 2 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 2 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                     <a href="javascript:;" class="sgbp-table__action" title="delete">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#delete"></use></svg>
                     </a>
                 </td>
             </tr>
             <tr class="sgbp-table__row">
                 <td class="sgbp-table__cell sgbp-table__cell--contentAsResponsiveHeadline" data-sgbp-th="Headline">Headline 3</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col A">Cell 3 - a</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col B">Cell 3 - b</td>
                 <td class="sgbp-table__cell" data-sgbp-th="Col C">Cell 3 - c</td>
                 <td class="sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--noResponsiveHeadline">
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
