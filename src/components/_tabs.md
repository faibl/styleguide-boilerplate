## Tabs

If you do not want to update the contents of the `sgbp-tabs__content` element dynamically then
you can add multiple elements with the class `sgbp-tabs__content` and only the one with the class
`is-active` will be shown.

    @example
    <div class="sgbp-tabs">
        <div class="sgbp-tabs__headers sgbp-row sgbp-row--bigMargin">
            <a class="sgbp-tabs__tab" href="javascript:;">Tab 1</a>
            <a class="sgbp-tabs__tab" href="javascript:;">Tab 2</a>
            <a class="sgbp-tabs__tab is-active" href="javascript:;">3rd Tab</a>
            <a class="sgbp-tabs__tab" href="javascript:;">4th Tab</a>
            <a class="sgbp-tabs__tab" href="javascript:;">Another One!</a>
        </div>
        <div class="sgbp-tabs__content is-active">
            Tab Content
        </div>
    </div>
