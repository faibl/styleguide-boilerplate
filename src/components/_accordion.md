## Accordion

Accordions rely on the lower-level `sgbp-collapsible` component.
This is why you have to tooggle the `is-open` switch two times: 
On the `sgbp-accorion__item` element and on it's child `sgbp-collapsible` element. 

    @example
    <div class="sgbp-accordion">
        <div class="sgbp-accordion__item">
            <div class="sgbp-accordion__itemHeader sgbp-postfix sgbp-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
               <span class="sgbp-accordion__itemHeadline sgbp-postfix__fluid sgbp-col">Accordion Item 1</span>
               <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-collapsible">
                <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
        <div class="sgbp-accordion__item is-open">
            <div class="sgbp-accordion__itemHeader sgbp-postfix sgbp-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
               <span class="sgbp-accordion__itemHeadline sgbp-postfix__fluid sgbp-col">Accordion Item 2</span>
               <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-collapsible is-open">
                <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
        <div class="sgbp-accordion__item">
            <div class="sgbp-accordion__itemHeader sgbp-postfix sgbp-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
               <span class="sgbp-accordion__itemHeadline sgbp-postfix__fluid sgbp-col">Long Content</span>
               <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
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
        <div class="sgbp-accordion__item">
            <div class="sgbp-accordion__itemHeader sgbp-postfix sgbp-postfix--centere" onclick="this.parentElement.classList.toggle('is-open');this.parentElement.querySelector('.sgbp-collapsible').classList.toggle('is-open')">
               <span class="sgbp-accordion__itemHeadline sgbp-postfix__fluid sgbp-col">Long Header item name Lorem ipsum dolor sit amet</span>
               <svg class="sgbp-accordion__itemIcon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg>
            </div>
            <div class="sgbp-collapsible">
                <div class="sgbp-accordion__itemContent sgbp-collapsible__content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </div>
            </div>
        </div>
    </div>
