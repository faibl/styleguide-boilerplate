## Vertical Menu

### Vertical Menu (indicatorLeft and indicatorHighlight, inline)

    @example
    <div class="sgbp-postfix sgbp-postfix--bigGutters">
      <div class="sgbp-postfix__fixed">
        <div id="sgbp-verticalMenuDemo" class="sgbp-verticalMenu sgbp-verticalMenu--inline sgbp-verticalMenu--indicatorLeft sgbp-verticalMenu--indicatorHighlight" style="width: 200px">
          <button onclick="this.nextElementSibling.classList.toggle('is-open'); this.classList.toggle('is-open')" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Account</span>
            <svg class="sgbp-verticalMenu__itemAddendum sgbp-verticalMenu__itemAddendum--rotateOpen sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
          </button>
          <div class="sgbp-collapsible">
              <div class="sgbp-collapsible__content">
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-male"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Peter</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-female"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Sally</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user-female"></use></svg>
                    <span class="sgbp-verticalMenu__itemLabel">Sarah</span>
                  </a>
              </div>
          </div>

          <hr class="sgbp-separator">

          <div class="sgbp-verticalMenu__itemHeader">
             Preferences
          </div>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#user"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Profile</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#notifications"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Notifications</span>
            <div class="sgbp-verticalMenu__itemAddendum sgbp-badge sgbp-badge--highlight">2</div>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#security"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Security</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#settings"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Settings</span>
          </a>

          <div class="sgbp-verticalMenu__itemHeader">
             Administration
          </div>

          <button onclick="this.nextElementSibling.classList.toggle('is-open'); this.classList.toggle('is-open')" class="sgbp-verticalMenu__item is-level-1 is-active is-open">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#users"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Staff</span>
            <svg class="sgbp-verticalMenu__itemAddendum sgbp-verticalMenu__itemAddendum--rotateOpen sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
          </button>
          <div class="sgbp-collapsible is-open">
              <div class="sgbp-collapsible__content">
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Overview</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2 is-active">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Time accounts</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-3">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Regular times</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-3 is-active">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Overtime</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Time tracking</span>
                  </a>
                  <a href="javascript:;" class="sgbp-verticalMenu__item is-level-2">
                    <span class="sgbp-verticalMenu__itemIcon"></span>
                    <span class="sgbp-verticalMenu__itemLabel">Applications</span>
                  </a>
              </div>
          </div>

          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#users"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Members</span>
          </a>

          <div class="sgbp-verticalMenu__itemHeader">
            Planning
          </div>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#calendar"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Calendar</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#place"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">News</span>
          </a>
          <a href="javascript:;" class="sgbp-verticalMenu__item is-level-1">
            <svg class="sgbp-verticalMenu__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#comment"></use></svg>
            <span class="sgbp-verticalMenu__itemLabel">Communication</span>
          </a>

        </div>
      </div>
      <div class="sgbp-postfix__fluid">
        <div class="sgbp-row">
            [Content]
        </div>
        <button class="sgbp-button" onclick="document.getElementById('sgbp-verticalMenuDemo').classList.toggle('is-collapsed')">Toggle collapsed mode</button>

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
