## Grid

### Grid (equal columns)

The grid cells below do not specify any widths, they just naturally space themselves equally and expand to fit the entire row. They’re also equal height by default.

    @example
    <div class="sgbp-grid">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (gutters/padding)

By default, grid cells do not have any padding between each other.
This is especially useful for non-textual content like images, video, street maps etc.
However, if you do need padding, you can simply add the class `sgbp-grid--gutters` to your grid container element,
as done in most of the examples that follow.

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (inline)

    @example
    <div class="sgbp-grid sgbp-grid--gutters sgbp-grid--inline">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 with more content</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--full sgbp-grid__example">cell 4 full width</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 with even more content</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6</div>
    </div>

### Grid (list)

    @example
    <div class="sgbp-grid sgbp-grid--gutters sgbp-grid--inlineBlock">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 with more content</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--full sgbp-grid__example">cell 4 full width</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 with even more content</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6</div>
    </div>

### Grid (2 equal, 1 double column)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--double sgbp-grid__example">cell 2 (double)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (2 equal, 1 tripe column)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--triple sgbp-grid__example">cell 2 (triple)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (1 shrink, 2 equal column)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (vertical - 1 shrink, 2 equal column)

Stack your grid vertically by adding the `sgbp-grid--vertical` modifier

    @example
    <div style="height: 400px;">
        <div class="sgbp-grid sgbp-grid--vertical sgbp-grid--gutters">
            <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
            <div class="sgbp-grid__cell sgbp-grid__cell--shrink sgbp-grid__example">cell 2 (shrink)</div>
            <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
        </div>
    </div>

### Grid (unequal, based on 12 columns)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__cell--1of12 sgbp-grid__example">1of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--2of12 sgbp-grid__example">2of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--3of12 sgbp-grid__example">3of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__example">6of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--8of12 sgbp-grid__example">8of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--4of12 sgbp-grid__example">4of12</div>
    </div>

### Grid (unequal, responsive)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-3of12 sgbp-grid__example">small 6of12; medium 3of12</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--6of12 sgbp-grid__cell--medium-9of12 sgbp-grid__example">small 6of12; medium 9of12</div>
    </div>

### Grid (nesting)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1</div>
        <div class="sgbp-grid__cell sgbp-grid__example">
           <div class="sgbp-grid sgbp-grid--gutters">
               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.a</div>
               <div class="sgbp-grid__cell sgbp-grid__example">cell 2.b</div>
           </div>
        </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (responsive)

Responsive Grids work by adding media classes to the Grid cells or containers. When those media values are met, the grids automatically adjust accordingly.

    @example
    <div class="sgbp-grid sgbp-grid--full sgbp-grid--medium-fit sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (Responsive, flowing)

    @example
    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (Responsive, flowing, center widow line)

    @example
    <div class="sgbp-grid sgbp-grid--tiny-full sgbp-grid--small-1of2 sgbp-grid--medium-1of3 sgbp-grid--large-1of4 sgbp-grid--gutters sgbp-grid--centerWidowLine">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 5 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 6 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 7 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (responsive, re-ordering)

The two cells swap ordering when switching from small to medium

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">Small first, medium last</div>
        <div class="sgbp-grid__cell sgbp-grid__example sgbp-grid__cell--medium-orderFirst">Small last, medium first</div>
    </div>

### Grid (stretched alignment / default)

    @example
    <div class="sgbp-grid sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (top alignment)

    @example
    <div class="sgbp-grid sgbp-grid--top sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (center alignment)

    @example
    <div class="sgbp-grid sgbp-grid--center sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (bottom alignment)

    @example
    <div class="sgbp-grid sgbp-grid--bottom sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (baseline alignment)

    @example
    <div class="sgbp-grid sgbp-grid--baseline sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
        <div class="sgbp-grid__cell sgbp-grid__example" style="font-size: 30px;">cell 2 (large font)</div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3</div>
    </div>

### Grid (mixed alignment)

    @example
    <div class="sgbp-grid sgbp-grid--gutters" style="height: 300px">
        <div class="sgbp-grid__cell sgbp-grid__cell--top sgbp-grid__example">.sgbp-grid__cell--top</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--center sgbp-grid__example">.sgbp-grid__cell--center</div>
        <div class="sgbp-grid__cell sgbp-grid__cell--bottom sgbp-grid__example">.sgbp-grid__cell--bottom</div>
    </div>

### Grid (with row and column gutters)

    @example
    <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with big row and column gutters)

    @example
    <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--gutters sgbp-grid--bigGutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with row gutters)

    @example
    <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--rowGutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>

### Grid (with column gutters)

    @example
    <div class="sgbp-grid sgbp-grid--1of2 sgbp-grid--columnGutters">
        <div class="sgbp-grid__cell sgbp-grid__example">cell 1 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 2 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 3 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
        <div class="sgbp-grid__cell sgbp-grid__example">cell 4 ............................... ............................... ............................... ............................... ............................... ............................... ............................... </div>
    </div>
