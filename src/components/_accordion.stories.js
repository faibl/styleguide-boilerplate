export default {
    title: 'Components/Accordion',
}

export const Standard = () => `
<div class="sgbp-accordion">
    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--lightGray sgbp-region--rounded">
        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
            <div class="sgbp-accordion__itemHeaderLeft">
                <span class="sgbp-accordion__itemHeadline">Accordion Item 1</span>
            </div>
            <div class="sgbp-accordion__itemHeaderRight">
                <div class="sgbp-accordion__itemHeaderRight">
                    <div class="sgbp-badge sgbp-badge--highlight">4/17</div>
                    <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
                </div>
            </div>
        </button>
        <div class="sgbp-collapsible">
            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </div>
    <div class="sgbp-accordion__item  sgbp-accordion__item sgbp-region sgbp-region--lightGray sgbp-region--rounded is-open">
        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
            <div class="sgbp-accordion__itemHeaderLeft">
                <span class="sgbp-accordion__itemHeadline">Accordion Item 2</span>
            </div>
            <div class="sgbp-accordion__itemHeaderRight">
                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
        </button>
        <div class="sgbp-collapsible is-open">
            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </div>
    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--lightGray sgbp-region--rounded">
        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
            <div class="sgbp-accordion__itemHeaderLeft">
                <span class="sgbp-accordion__itemHeadline">Accordion Item With overflowing content</span>
            </div>
            <div class="sgbp-accordion__itemHeaderRight">
                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
        </button>
        <div class="sgbp-collapsible sgbp-collapsible--overflow">
            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
               <p class="sgbp-row">Collapsible Content with overflowing tooltip example (Using the "sgbp-collapsible--overflow" modifier). Open/Close transitions get automativally disabled in favor of overlowing content.</p>
               <div class="sgbp-tooltip sgbp-tooltip--styled sgbp-tooltip--bottom sgbp-tooltip--right">
                 <svg class="sgbp-tooltip__trigger sgbp-tooltip__trigger--icon sgbp-icon sgbp-icon--hoverAccent"><use xlink:href="./assets/icons.svg#info-circle"></use></svg>
                 <div class="sgbp-tooltip__content" style="width: 250px">
                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.<br>
                   Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.<br>
                 </div>
               </div>
            </div>
        </div>
    </div>
    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--lightGray sgbp-region--rounded">
        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
            <div class="sgbp-accordion__itemHeaderLeft">
                <span class="sgbp-accordion__itemHeadline">Long Content</span>
            </div>
            <div class="sgbp-accordion__itemHeaderRight">
                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
        </button>
        <div class="sgbp-collapsible">
            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                <p class="sgbp-row">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>
    <div class="sgbp-accordion__item sgbp-accordion__item sgbp-region sgbp-region--lightGray sgbp-region--rounded">
        <button type="button" class="sgbp-accordion__itemHeader" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
            <div class="sgbp-accordion__itemHeaderLeft">
                <span class="sgbp-accordion__itemHeadline">Long Header item name Lorem ipsum dolor sit amet</span>
            </div>
            <div class="sgbp-accordion__itemHeaderRight">
                <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
        </button>
        <div class="sgbp-collapsible">
            <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </div>
        </div>
    </div>
</div>
`;
