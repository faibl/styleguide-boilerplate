## Card

### Card (Default)

    @example
    <article class="sgbp-card" style="width: 300px;">
        <div class="sgbp-card__status">
          <svg class="sgbp-icon"><use xlink:href="./assets/icons.svg#check"></use></svg>
        </div>
        <div class="sgbp-card__image">
            <div class="sgbp-profileImage sgbp-profileImage--sizeM">
              <img src="/assets/images/user.svg" alt="Bill Cunningham" class="sgbp-profileImage__image">
            </div>
        </div>
        <h1 class="sgbp-card__name">Bill Cunningham</h1>
        <div class="sgbp-card__contents">
            <div class="sgbp-row">Geburtstag: 6. April 2019</div>
            01234 / 5678910<br>
            bill.cunningham@test.test
        </div>
        <div class="sgbp-card__footer">
            <button class="sgbp-card__fullFooterButton sgbp-button sgbp-button--block sgbp-button--small">Bearbeiten</button>
        </div>
    </article>

### Card (unobtrusive)

    @example
    <article class="sgbp-card sgbp-card--unobtrusive" style="width: 300px;">
        <div class="sgbp-card__image">
            <div class="sgbp-profileImage sgbp-profileImage--sizeM">
              <img src="/assets/images/user.svg" alt="Bill Cunningham" class="sgbp-profileImage__image">
            </div>
        </div>
        <h1 class="sgbp-card__name sgbp-card__name--small">Bill Cunningham</h1>
        <div class="sgbp-card__contents">
            <div class="sgbp-row">Geburtstag: 6. April 2019</div>
            01234 / 5678910<br>
            bill.cunningham@test.test
        </div>
    </article>

### Card (full image)

    @example
    <article class="sgbp-card" style="width: 300px;">
        <img src="http://lorempixel.com/400/300/sports" alt="Bill Cunningham" class="sgbp-card__image sgbp-card__image--full">
        <div class="sgbp-card__subtitle">For Everyone</div>
        <h1 class="sgbp-card__name">Open House</h1>
        <div class="sgbp-card__contents">
            <div class="sgbp-row">Geburtstag: 6. April 2019</div>
            01234 / 5678910<br>
            bill.cunningham@test.test
        </div>
        <div class="sgbp-card__footer">
            <div class="sgbp-card__footerContents sgbp-postfix sgbp-postfix--center sgbp-postfix--gutters">
                <div class="sgbp-postfix__fluid">2019-12-13</div>
                <div class="sgbp-postfix__fixed">
                    <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                </div>
            </div>
        </div>
    </article>

### Card (Grid on gray background)

    @example
    <div class="sgbp-region sgbp-region--gray">
        <div class="sgbp-grid sgbp-grid--inline sgbp-grid--gutters sgbp-grid--bigGutters">
            <div class="sgbp-grid__cell" style="width: 300px;">
                <article class="sgbp-card sgbp-card--unobtrusive sgbp-backgroundColor sgbp-backgroundColor--white">
                    <img src="http://lorempixel.com/400/300/sports" alt="Bill Cunningham" class="sgbp-card__image sgbp-card__image--full">
                    <div class="sgbp-card__subtitle">For Everyone</div>
                    <h1 class="sgbp-card__name">Open House</h1>
                    <div class="sgbp-card__contents">
                        <div class="sgbp-row">Geburtstag: 6. April 2019</div>
                        01234 / 5678910<br>
                        bill.cunningham@test.test
                    </div>
                    <div class="sgbp-card__footer">
                        <div class="sgbp-card__footerContents sgbp-postfix sgbp-postfix--center sgbp-postfix--between">
                            <div class="sgbp-postfix__fixed">2019-12-13</div>
                            <div class="sgbp-postfix__fixed">
                                <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="sgbp-grid__cell" style="width: 300px;">
                <article class="sgbp-card sgbp-card--unobtrusive sgbp-backgroundColor sgbp-backgroundColor--white">
                    <img src="http://lorempixel.com/400/300/sports" alt="Bill Cunningham" class="sgbp-card__image sgbp-card__image--full">
                    <div class="sgbp-card__subtitle">For Everyone</div>
                    <h1 class="sgbp-card__name">Open House</h1>
                    <div class="sgbp-card__contents">
                        <div class="sgbp-row">Geburtstag: 6. April 2019</div>
                        01234 / 5678910<br>
                        bill.cunningham@test.test
                    </div>
                    <div class="sgbp-card__footer">
                        <div class="sgbp-card__footerContents sgbp-postfix sgbp-postfix--center sgbp-postfix--between">
                            <div class="sgbp-postfix__fixed">2019-12-13</div>
                            <div class="sgbp-postfix__fixed">
                                <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="sgbp-grid__cell" style="width: 300px;">
                <article class="sgbp-card sgbp-card--unobtrusive sgbp-backgroundColor sgbp-backgroundColor--white">
                    <img src="http://lorempixel.com/400/300/sports" alt="Bill Cunningham" class="sgbp-card__image sgbp-card__image--full">
                    <div class="sgbp-card__subtitle">For Everyone</div>
                    <h1 class="sgbp-card__name">Open House</h1>
                    <div class="sgbp-card__contents">
                        <div class="sgbp-row">Geburtstag: 6. April 2019</div>
                        01234 / 5678910<br>
                        bill.cunningham@test.test
                    </div>
                    <div class="sgbp-card__footer">
                        <div class="sgbp-card__footerContents sgbp-postfix sgbp-postfix--center sgbp-postfix--between">
                            <div class="sgbp-postfix__fixed">2019-12-13</div>
                            <div class="sgbp-postfix__fixed">
                                <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="sgbp-grid__cell" style="width: 300px;">
                <article class="sgbp-card sgbp-card--unobtrusive sgbp-backgroundColor sgbp-backgroundColor--white">
                    <img src="http://lorempixel.com/400/300/sports" alt="Bill Cunningham" class="sgbp-card__image sgbp-card__image--full">
                    <div class="sgbp-card__subtitle">For Everyone</div>
                    <h1 class="sgbp-card__name">Open House</h1>
                    <div class="sgbp-card__contents">
                        <div class="sgbp-row">Geburtstag: 6. April 2019</div>
                        01234 / 5678910<br>
                        bill.cunningham@test.test
                    </div>
                    <div class="sgbp-card__footer">
                        <div class="sgbp-card__footerContents sgbp-postfix sgbp-postfix--center sgbp-postfix--between">
                            <div class="sgbp-postfix__fixed">2019-12-13</div>
                            <div class="sgbp-postfix__fixed">
                                <svg class="sgbp-icon sgbp-icon--hoverAccent sgbp-icon--small"><use xlink:href="./assets/icons.svg#edit"></use></svg>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
