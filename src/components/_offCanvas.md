## Off Canvas

    @example
    <div class="sgbp-offCanvas sgbp-row" id="off-canvas-demo" style="height: 350px;">
        <div class="sgbp-offCanvas__inner">
            <div class="sgbp-offCanvas__on sgbp-region sgbp-region--secondary">
                Main Content
            </div>
            <div class="sgbp-offCanvas__off sgbp-offCanvas__off--left sgbp-region sgbp-region--primary">
                Left Off Canvas Content
            </div>
            <div class="sgbp-offCanvas__off sgbp-offCanvas__off--right sgbp-region sgbp-region--primary">
                Right Off Canvas Content
            </div>
            <div class="sgbp-offCanvas__off sgbp-offCanvas__off--bottom sgbp-region sgbp-region--primary">
                Bottom Off Canvas Content
            </div>
        </div>
    </div>
    <button class="sgbp-button sgbp-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-right', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-left');">Toggle left pane</button>
    <button class="sgbp-button sgbp-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-bottom');document.getElementById('off-canvas-demo').classList.toggle('is-open-right');">Toggle right pane</button>
    <button class="sgbp-button sgbp-button--primary" onclick="document.getElementById('off-canvas-demo').classList.remove('is-open-left', 'is-open-right');document.getElementById('off-canvas-demo').classList.toggle('is-open-bottom');">Toggle bottom pane</button>
