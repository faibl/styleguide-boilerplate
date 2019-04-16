## Card

### Card (Default)

    @example
    <article class="sgbp-card">
        <div class="sgbp-card__status">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
        </div>
        <div class="sgbp-card__image">
            <div class="sgbp-profileImage sgbp-profileImage--sizeM">
              <img src="/assets/images/user.svg" alt="John Doe" class="sgbp-profileImage__image">
            </div>
        </div>
        <h1 class="sgbp-card__name">John Doe</h1>
        <div class="sgbp-card__contents">
            <div class="sgbp-row">Geburtstag: 6. April 2019</div>
            01234 / 5678910<br>
            john.doe@test.test
        </div>
        <div class="sgbp-card__footer">
            <button class="sgbp-button sgbp-button--block">Bearbeiten</button>
        </div>
    </article>

### Card (unobtrusive)

    @example
    <article class="sgbp-card sgbp-card--unobtrusive">
        <div class="sgbp-card__status">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
        </div>
        <div class="sgbp-card__image">
            <div class="sgbp-profileImage sgbp-profileImage--sizeM">
              <img src="/assets/images/user.svg" alt="John Doe" class="sgbp-profileImage__image">
            </div>
        </div>
        <h1 class="sgbp-card__name">John Doe</h1>
        <div class="sgbp-card__contents">
            <div class="sgbp-row">Geburtstag: 6. April 2019</div>
            01234 / 5678910<br>
            john.doe@test.test
        </div>
        <div class="sgbp-card__footer">
        </div>
    </article>
