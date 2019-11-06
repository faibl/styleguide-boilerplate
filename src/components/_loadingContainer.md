## Loading Container

Add class `is-loading` to show loading indicator

### Loading Container (default)

    @example
    <div class="sgbp-loadingContainer sgbp-region sgbp-region--accent sgbp-row" id="test-loading-container1">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="sgbp-loadingContainer__loader">
            <div class="sgbp-loadingContainer__dialog">
                <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator"></div>
            </div>
        </div>
    </div>
    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById('test-loading-container1').classList.toggle('is-loading');">Toggle loading</button>

### Loading Container (blocking)

Add class `is-blocking` to show blocking loading indicator

    @example
    <div class="sgbp-loadingContainer sgbp-region sgbp-region--accent is-blocking sgbp-row" id="test-loading-container2">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="sgbp-loadingContainer__loader">
            <div class="sgbp-loadingContainer__dialog">
                <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator"></div>
            </div>
        </div>
    </div>
    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById('test-loading-container2').classList.toggle('is-loading');">Toggle loading</button>

### Loading Container (with message)

    @example
    <div class="sgbp-loadingContainer sgbp-region sgbp-region--accent sgbp-row" id="test-loading-container3">
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <div class="sgbp-loadingContainer__loader">
            <div class="sgbp-loadingContainer__dialog">
                <span class="sgbp-loadingContainer__loadingMessage">Get plenty of sleep – if you can</span>
                <div class="sgbp-loadingContainer__loadingIndicator sgbp-loadingIndicator"></div>
            </div>
        </div>
    </div>
    <button class="sgbp-button sgbp-button--secondary" onclick="document.getElementById('test-loading-container3').classList.toggle('is-loading');">Toggle loading</button>