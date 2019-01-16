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
            <p class="sgbp-paragraph">
                Visit <a href="./layout.html" class="sgbp-link">/layout.html</a>
                to see a demo layout built with these components.
            </p>
        </header>
        <div class="sg-container sgbp-row" sg-content></div>
      </div>
      <div class="sgbp-region sgbp-region--secondary">
          Built with <a href="https://github.com/faibl/sgbp" class="sgbp-link">SGBP</a>.
      </div>
    </div>
