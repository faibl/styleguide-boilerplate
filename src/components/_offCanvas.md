## Off Canvas

You might need to add `overflow: hidden` to the outer `sgbp-offCanvas` element,
especially if you are using the right canvas panel.
However, we chose not to set the `overflow: hidden` by default because this would e.g. prevent tables with wide tables from scrolling horizontally

    @example
    <div class="sgbp-offCanvas sgbp-row" id="off-canvas-demo" style="overflow: hidden; height: 350px;">
        <div class="sgbp-offCanvas__on sgbp-region sgbp-region--gray">
            Main Content
        </div>
        <div class="sgbp-offCanvas__off sgbp-offCanvas__off--left sgbp-region sgbp-region--accent">
            Left Off Canvas Content
        </div>
        <div class="sgbp-offCanvas__off sgbp-offCanvas__off--right sgbp-region sgbp-region--accent">
            Right Off Canvas Content
        </div>
        <div class="sgbp-offCanvas__off sgbp-offCanvas__off--bottom sgbp-region sgbp-region--accent">
            Bottom Off Canvas Content
        </div>
        <div class="sgbp-offCanvas__backdrop" onclick="this.parentElement.classList.remove('is-open-right', 'is-open-left', 'is-open-bottom')"></div>
    </div>
    <button class="sgbp-button" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-right', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-left');">Toggle left pane</button>
    <button class="sgbp-button" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-right');">Toggle right pane</button>
    <button class="sgbp-button" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-right');document.getElementById('off-canvas-demo').classList.toggle('is-open-bottom');">Toggle bottom pane</button>
