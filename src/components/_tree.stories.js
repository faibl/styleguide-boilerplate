import {DescriptionDecorator} from "../../.storybook/decorators";
import {onlyIfHoverSupported} from "./_tooltip.stories";

export default {
    title: 'Components/Tree',
    decorators: [DescriptionDecorator(['Use `is-open` flag to toggle open/closed state.'])],
}

export const nested = () => `
    <div class="sgbp-tree">
        <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Item A</div>
        </div>
        <div class="sgbp-tree__content">
          <div class="sgbp-tree">
              <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
                  <div class="sgbp-tree__headerIconWrapper">
                      <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
                  </div>
                  <div class="sgbp-tree__headerContent">
                    Sub Item A.1
                  </div>
              </div>
              <div class="sgbp-tree__content">
                  <div class="sgbp-tree">
                      <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
                          <div class="sgbp-tree__headerIconWrapper">
                              <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
                          </div>
                          <div class="sgbp-tree__headerContent">Sub Item A.1.1</div>
                      </div>
                      <div class="sgbp-tree__content sgbp-row">
                        Sub Item A.1.1 (nested level 2) content
                      </div>
                  </div>
              </div>
          </div>
          <div class="sgbp-tree">
              <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
                  <div class="sgbp-tree__headerIconWrapper">
                      <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
                  </div>
                  <div class="sgbp-tree__headerContent">Sub Item A.2</div>
              </div>
              <div class="sgbp-tree__content">
                  <div class="sgbp-tree">
                      <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
                          <div class="sgbp-tree__headerIconWrapper">
                              <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
                          </div>
                          <div class="sgbp-tree__headerContent">Sub Item A.2.1</div>
                      </div>
                      <div class="sgbp-tree__content sgbp-row">
                        Sub Item A.2.1 (nested level 2) content
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
    <div class="sgbp-tree">
        <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Item B</div>
        </div>
        <div class="sgbp-tree__content sgbp-row">
          Item B content
        </div>
    </div>
`;

export const flat = () => `
    <div class="sgbp-tree is-open">
        <div class="sgbp-tree__header">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Item A</div>
        </div>
    </div>
    <div class="sgbp-tree sgbp-tree--level-1 is-open">
        <div class="sgbp-tree__header">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Sub Item A.1</div>
        </div>
    </div>
    <div class="sgbp-tree sgbp-tree--level-2">
        <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Sub Item A.1.1</div>
        </div>
        <div class="sgbp-tree__content sgbp-row">
            Sub Item A.1.1 (level 2) content
        </div>
    </div>
    <div class="sgbp-tree sgbp-tree--level-1">
        <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Sub Item A.2</div>
        </div>
        <div class="sgbp-tree__content sgbp-row">
            Sub Item A.2 (level 1) content
        </div>
    </div>
    <div class="sgbp-tree">
        <div class="sgbp-tree__header sgbp-clickable" onclick="this.parentNode.classList.toggle('is-open')">
            <div class="sgbp-tree__headerIconWrapper">
                <svg class="sgbp-tree__headerIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-tree__headerContent">Item B</div>
        </div>
        <div class="sgbp-tree__content sgbp-row">
          Item B content
        </div>
    </div>
`;
flat.story = {
    decorators: [
        DescriptionDecorator([
            'Usually the different tree levels are achieved through nesting multiple trees recusrivle inside each other.',
            'In case this is not feasible, e.g. when placed in multiple table rows, you can add the `sgbp-tree--level-1` ... `sgbp-tree--level-10` modifiers to achieve the same visual hierarchy.',
            'However, you need to manually make sure that you show/hide the sub trees.',
        ])
    ]
};
