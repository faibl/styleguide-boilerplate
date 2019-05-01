## Sticky Table

The Sticky Table component enhances the existing table component with the capability to make EITHER the first column OR the header rows sticky.
The remaining columns/rows then will be scrollable if they do not fit into the available space.

Each table cell requires the class `sgbp-stickyTable__cell`.

### Table (sticky column):

Add the class `sgbp-stickyTable--column` to make the table horizontally scrollable while fixing the first column.

Specify the width of the sticky column by applying the classes `sgbp-stickyTable--stickyColumnWidth-50`, `sgbp-stickyTable--stickyColumnWidth-60`, ... `sgbp-stickyTable--stickyColumnWidth-100`, `sgbp-stickyTable--stickyColumnWidth-150`, ... `sgbp-stickyTable--stickyColumnWidth-700`

If the height of the sticky columns differs from the height of the non-sticky columns then you should set an explicit height at the row level (e.g. using inline styles).

    @example
    <div class="sgbp-stickyTable sgbp-stickyTable--column sgbp-stickyTable--stickyColumnWidth-100">
      <div class="sgbp-stickyTable__scroller">
        <table class="sgbp-table sgbp-table--bordered">
           <thead>
               <tr class="sgbp-table__row">
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">D</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">E</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">F</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">G</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">H</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">I</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">J</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">K</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">L with long column title</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">M</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">N</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">O</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">P</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">Q</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">R</th>
               </tr>
           </thead>
           <tbody>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 1</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 1 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 2</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 2 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 3 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>

### Table (multiple sticky columns):

The sticky table only supports making the first column sticky.
If you need to have more than one sticky columns then you can create a `sgbp-stickyTable__subTable` table within the first column.

You also need to specify the width of the sub table columns (e.g. by applying inline styles) to make sure that all sub tables share the same dimensions.

    @example
    <div class="sgbp-stickyTable sgbp-stickyTable--column sgbp-stickyTable--stickyColumnWidth-300">
      <div class="sgbp-stickyTable__scroller">
        <table class="sgbp-table sgbp-table--bordered">
           <thead>
               <tr class="sgbp-table__row">
                   <th class="sgbp-stickyTable__cell">
                       <table class="sgbp-stickyTable__subTable sgbp-table">
                          <tr class="sgbp-table__row">
                            <th class="sgbp-table__cell sgbp-table__cell--headline" style="min-width: 150px; max-width: 150px;">Headline</th>
                            <th class="sgbp-table__cell sgbp-table__cell--headline" style="min-width: 75px; max-width: 75px;">Sticky 2</th>
                            <th class="sgbp-table__cell sgbp-table__cell--headline" style="min-width: 75px; max-width: 75px;">Sticky 3</th>
                          </tr>
                       </table>
                   </th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">D</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">E</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">F</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">G</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">H</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">I</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">J</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">K</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">L with long column title</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">M</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">N</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">O</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">P</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">Q</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">R</th>
               </tr>
           </thead>
           <tbody>
               <tr class="sgbp-table__row sgbp-table__row">
                   <td class="sgbp-stickyTable__cell">
                      <table class="sgbp-stickyTable__subTable sgbp-table">
                         <tr class="sgbp-table__row">
                           <td class="sgbp-table__cell sgbp-text sgbp-text--bold" style="min-width: 150px; max-width: 150px;">Headline 1</tD>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">live</td>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">120.000</td>
                         </tr>
                      </table>
                   </td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 1 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell">
                      <table class="sgbp-stickyTable__subTable sgbp-table">
                         <tr class="sgbp-table__row">
                           <td class="sgbp-table__cell sgbp-text sgbp-text--bold" style="min-width: 150px; max-width: 150px;">Headline 2</tD>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">live</td>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">95.000</td>
                         </tr>
                      </table>
                   </td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 2 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell">
                      <table class="sgbp-stickyTable__subTable sgbp-table">
                         <tr class="sgbp-table__row">
                           <td class="sgbp-table__cell sgbp-text sgbp-text--bold" style="min-width: 150px; max-width: 150px;">Headline 3</tD>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">pending</td>
                           <td class="sgbp-table__cell" style="min-width: 75px; max-width: 75px;">120.000</td>
                         </tr>
                      </table>
                   </td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 3 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>

### Table (sticky last column):

Add the class `sgbp-stickyTable--lastColumn` to make the table horizontally scrollable while fixing the first column.
Specify the width of the last sticky column by applying the classes `sgbp-stickyTable--stickyLastColumnWidth-50`, `sgbp-stickyTable--stickyColumnWidth-60`, ... `sgbp-stickyTable--stickyColumnWidth-100`

The sticky last column can also be combined with the sticky first column (the default)

    @example
    <div class="sgbp-stickyTable sgbp-stickyTable--column sgbp-stickyTable--lastColumn sgbp-stickyTable--stickyColumnWidth-100 sgbp-stickyTable--stickyLastColumnWidth-50">
      <div class="sgbp-stickyTable__scroller">
        <table class="sgbp-table sgbp-table--bordered">
           <thead>
               <tr class="sgbp-table__row">
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline">Headline</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline">A Text</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">B Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">C Num</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">D</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">E</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">F</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">G</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">H</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">I</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">J</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">K</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">L with long column title</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">M</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">N</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">O</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">P</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">Q</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric">R</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--actions sgbp-table__cell--separatorLeft">&nbsp;</th>
               </tr>
           </thead>
           <tbody>
               <tr class="sgbp-table__row" style="height: 45px;">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 1</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 1 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">192.565</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">4323.46</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
               <tr class="sgbp-table__row" style="height: 45px;">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 2</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 2 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">667.01</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">10107.43</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
               <tr class="sgbp-table__row" style="height: 45px;">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell">Cell 3 - a</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">0</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">1001.24</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric">980.20</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--actions sgbp-table__cell--separatorLeft">
                     <a href="javascript:;" class="sgbp-table__action" title="edit">
                         <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                     </a>
                   </td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>

### Table (sticky header):

Add the class `sgbp-stickyTable--row` to make the table vertically scrollable while fixing the header.

You also need to restrict the height of the table (e.g. `style="height: 300px;"`).

Specify the height of the sticky header by applying the classes `sgbp-stickyTable--stickyHeaderHeight-20`, `sgbp-stickyTable--stickyHeaderHeight-25`, `sgbp-stickyTable--stickyHeaderHeight-30` ... `sgbp-stickyTable--stickyHeaderHeight-300`

Make sure that the cells in the header have the same width as the cells in the body (e.g. using inline min-width and max-width styles).

    @example
    <div class="sgbp-stickyTable sgbp-stickyTable--header sgbp-stickyTable--stickyHeaderHeight-35" style="height: 300px">
      <div class="sgbp-stickyTable__scroller">
        <table class="sgbp-table sgbp-table--bordered">
           <thead class="sgbp-stickyTable__header">
               <tr class="sgbp-table__row">
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell sgbp-table__cell--headline" style="min-width: 150px; max-width: 150px;">Headline</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline" style="min-width: 120px; max-width: 120px;">A Text</th>
                   <th class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--headline sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">B Numeric</th>
               </tr>
           </thead>
           <tbody>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold" style="min-width: 150px; max-width: 150px;">Headline 1</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">4323.46</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 2</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">10107.43</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
               <tr class="sgbp-table__row">
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-text sgbp-text--bold">Headline 3</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell" style="min-width: 120px; max-width: 120px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</td>
                   <td class="sgbp-stickyTable__cell sgbp-table__cell sgbp-table__cell--numeric" style="min-width: 80px; max-width: 80px;">980.20</td>
               </tr>
           </tbody>
        </table>
      </div>
    </div>
