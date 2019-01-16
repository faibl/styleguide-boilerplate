## Postfix

Postfixed elements consist of one or more fixed elements plus one ore more fluid elements taking up all the remaining space.

The modifiers `sgbp-postfix--gutters` or `sgbp-postfix--bigGutters` add spacing between the postfix contents. Just leave them out, if you don't need spacing.


### Postfix (Default)

    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-row">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button sgbp-button--primary" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (as Prefix)

By changing the order of the `sgbp-postfix__fixed` and `sgbp-postfix__fluid` elements in the markup, you can use "postfix" as "prefix".

    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-row">
        <button class="sgbp-postfix__fixed sgbp-button sgbp-button--primary" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
    </div>

### Postfix (Stacked on tiny screens)
  
    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--tiny-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button sgbp-button--primary" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (Stacked on small and tiny screens)
  
    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--small-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button sgbp-button--primary" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (Stacked on medium and smaller screens)
  
    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--medium-stacked">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <button class="sgbp-postfix__fixed sgbp-button sgbp-button--primary" type="submit"><svg class="sgbp-button__icon sgbp-icon"><use xlink:href="./assets/icons.svg#arrow-right"></use></svg></button>
    </div>

### Postfix (center)
  
Vertically centered contents
  
    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--center">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--primary sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#check"></use>
        </svg>
    </div>

### Postfix (bottom)
  
Vertically bottom aligned contents
  
    @example
    <div class="sgbp-postfix sgbp-postfix--gutters sgbp-postfix--bottom">
        <div class="sgbp-postfix__fluid">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--primary sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#more-horizontal"></use>
        </svg>
    </div>

### Postfix (between)
  
Use maximum spacing between the elements 
  
    @example
    <div class="sgbp-postfix sgbp-postfix--between">
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--primary sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-left"></use>
        </svg>
        <svg class="sgbp-postfix__fixed sgbp-icon sgbp-icon--primary sgbp-icon--big">
          <use xlink:href="./assets/icons.svg#arrow-right"></use>
        </svg>
    </div>
