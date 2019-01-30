# Styleguide options

### Head

    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script src='styledown.js'></script>
    <link rel='stylesheet' href='styledown.css' />
    <link rel='stylesheet' href='styleguide.css' />
    <script>document.title = 'Styleguide Boilerplate'</script>

### Body

    <div class="sgbp-pageWrapper">
      <div class="sgbp-region">
        <header class="styledown-header">
            <h1 class="sgbp-headline sgbp-headline--h1 sgbp-headline--text sgbp-headline--primary">
              My Project's
              <span class="sgbp-headline__addendum">Styleguide</span>
            </h1>
            
            <div class="sgbp-readingBlock">
                <p class="sgbp-paragraph">
                    Use this Styleguide boilerplate template as a starting point for your design implementation. Think of something like Twitter Bootstrap but tailored specifically to the requirements of your own project/company.
                </p>
                <div class="sgbp-float sgbp-float--right sgbp-float--inText">
                    <label class="sgbp-inputGroup">
                        <span class="sgbp-inputGroup__label">Primary color:</span>
                        <input type="color" value="#035287" class="sgbp-input"  oninput="document.documentElement.style.setProperty('--sgbp-color-brand-primary', this.value);">
                    </label>
                </div>
                <p class="sgbp-paragraph">
                    These UI components can be configured using css custom properties. This - amongst others - allows for easy runtime theming. For example, you can dynamically set the brand primary color using the color input on the right:
                </p>
                <p class="sgbp-paragraph">
                    Visit <a href="./layout.html" class="sgbp-link">/layout.html</a>
                    to see a demo layout built with these components.
                </p>
        </header>
        <div class="sg-container sgbp-row" sg-content></div>
      </div>
      <div class="sgbp-region sgbp-region--secondary">
          Built upon <a href="https://github.com/faibl/styleguide-boilerplate" class="sgbp-link">Styleguide Boilerplate</a>.
      </div>
    </div>
