import {DescriptionDecorator} from "../../.storybook/decorators";

export default {
    title: 'Components/WYSIWYG',
}

export const Standard = () => `
    <div class="sgbp-wysiwyg">
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <p>Lorem ipsum dolor sit amet, <b>bold consectetuer adipiscing elit</b>, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
      <p>Ut wisi enim ad minim veniam, <i>italic quis nostrud exerci tation ullamcorper suscipit</i> lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber <a href="javascript:;">tempor cum soluta</a> nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
      <ul>
        <li>Unordered list item 1</li>
        <li>Unordered list item 2</li>
      </ul>

      <ol>
        <li>Ordered list item 1</li>
        <li>Ordered list item 2</li>
      </ol>
    </div>
`;
Standard.decorators = [DescriptionDecorator(['Apply default styling for common html tags (`h1`, `h2`, `h3`, `b`,`strong`, `i`, `a`, `p`, `ul`, `ol`, )'])];
