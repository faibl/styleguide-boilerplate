## Vertical Menu

### Vertical Menu (indicatorLeft and indicatorHighlight, inline)

    @example
    <div class="sgbp-postfix sgbp-postfix--bigGutters">
      <div class="sgbp-postfix__fixed">
        <div class="sgbp-verticalMenu sgbp-verticalMenu--inline sgbp-verticalMenu--indicatorLeft sgbp-verticalMenu--indicatorHighlight" style="width: 200px">
          <button onclick="document.getElementById('sgbpVerticalMenuCollapsibleDemo').classList.toggle('is-open')" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Account</span>
            <svg class="sgbp-verticalMenu__itemAddendum sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-down"></use></svg>
          </button>
          <div class="sgbp-collapsible" id="sgbpVerticalMenuCollapsibleDemo">
              <div class="sgbp-collapsible__content">
                  <a href="javascript:;" class="sgbp-verticalMenu__item">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-male"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Peter</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-female"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Sally</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-female"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Sarah</span>
                  </a>
              </div>
          </div>

          <hr class="sgbp-separator">

          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Profile</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-active">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#notifications"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Notifications</span>
            <div class="sgbp-verticalMenu__itemAddendum sgbp-badge sgbp-badge--highlight">2</div>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#security"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Security</span>
          </a>
          <div class="sgbp-verticalMenu__itemHeader">
             Team Settings
          </div>
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#users"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Members</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#security"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Security</span>
          </a>
          <hr class="sgbp-separator">
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#settings"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Settings</span>
          </a>
        </div>
      </div>
      <div class="sgbp-postfix__fluid">
        [Content]
      </div>
    </div>

### Vertical Menu (indicatorLeft, inlineMediumUp)

    @example
    <div class="sgbp-postfix sgbp-postfix--bigGutters sgbp-postfix--small-stacked">
      <div class="sgbp-postfix__fixed">
        <div class="sgbp-verticalMenu sgbp-verticalMenu--inlineMediumUp sgbp-verticalMenu--indicatorLeft">
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <span class="sgbp-verticalMenu__itemLabel">Account</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-active">
            <span class="sgbp-verticalMenu__itemLabel">Notifications</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <span class="sgbp-verticalMenu__itemLabel">Security</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item">
            <span class="sgbp-verticalMenu__itemLabel">Members</span>
          </a>
        </div>
      </div>
      <div class="sgbp-postfix__fluid">
        [Content]
      </div>
    </div>

### Vertical Menu (indicatorRight, inlineLargeUp)

    @example
    <div class="sgbp-postfix sgbp-postfix--bigGutters sgbp-postfix--medium-stacked">
      <div class="sgbp-postfix__fluid">
        [Content]
      </div>
      <div class="sgbp-postfix__fixed">
        <div class="sgbp-verticalMenu sgbp-verticalMenu--inlineLargeUp sgbp-verticalMenu--indicatorRight">
            <a href="javascript:;" class="sgbp-verticalMenu__item">
              <span class="sgbp-verticalMenu__itemLabel">Account</span>
            </a>
            <a href="javascript:;" class="sgbp-verticalMenu__item is-active">
              <span class="sgbp-verticalMenu__itemLabel">Notifications</span>
            </a>
            <a href="javascript:;" class="sgbp-verticalMenu__item">
              <span class="sgbp-verticalMenu__itemLabel">Security</span>
            </a>
            <a href="javascript:;" class="sgbp-verticalMenu__item">
              <span class="sgbp-verticalMenu__itemLabel">Members</span>
            </a>
        </div>
      </div>
    </div>
