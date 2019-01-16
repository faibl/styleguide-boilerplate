SGBP CSS Guidelines
===================

A pragmatic CSS methodology proposal based on [BEM](https://en.bem.info/method/definitions/), enriched with elements from [OOCSS]([https://github.com/stubbornella/oocss/wiki) and [SMACSS](https://smacss.com/).

tl;dr
-----

Use BEM as a guiding methodology to make your developer life easier – not harder.
When the BEM rules don't fit your needs, be pragmatic and choose a sensible solution for your problem. Preferably one of the solutions listed below.


A very short introduction to BEM
--------------------------------

The Block, Element, Modifier methodology (commonly referred to as BEM) is a popular naming convention for classes in HTML and CSS. Developed by the team at Yandex, its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

Here's an example:

*CSS:*
```
/* BLOCK (aka component) */
.btn {}

/* ELEMENT belonging to that block */
.btn__icon {}

/* MODIFIER that changes the style of the block */
.btn--primary {}
.btn--big {}
```

In BEM a block is the top-level abstraction of a component, for example a button: .btn { }. This block should be thought of as a parent. Child items, or elements, can be placed inside and these are denoted by two underscores following the name of the block like .btn__price { }.
Finally, modifiers can manipulate the block so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending two hyphens to the name of the block just like btn--primary.

The corresponding markup might then look like this:

*HTML:*
```
<a class="btn btn--big btn--primary" href="https://www.jonasfischer.net">
  <span class="btn__icon">★</span>
  <span class="btn__text">Like</span>
</a>
```

The essence of BEM is this:
* use flat css selectors named according to the block__element--modifier syntax
* do not use tag selectors
* do not use id selectors
* do not use child, descendant, sibling etc. selectors
* blocks and elements are always styled the same, no matter where in the markup they appear. Context is only provided through modifiers. 


There are lots of resources on the web to dig in further, e.g.:
* https://en.bem.info/method/definitions/
* http://getbem.com/
* http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/
* https://css-tricks.com/bem-101/



Custom guidlines extending BEM
------------------------------

### Terminology

In BEM the outer element of a component is called a "block". We prefer to call it "component".


### Custom Naming Scheme

BEM does not force you to use a certain naming scheme. As long as the three parts (Block, Element and Modifier) are easily distinguishable, everything is fine.

To make BEM-style class names readable you should try to use single words to describe your Blocks, Elements and Modifiers.

For multi-word identifiers, many BEM examples use "train-case" naming ("loading-indicator"). However, we prefer "camelCase" ("loadingIndicator"). 

```
/* Best: single words: */
.block__element--modifier {}

/* Good: Multiple words in camelCaseSyntax still works: */
.blockName__elementName--modifierName {}

/* Bad: train-case-syntax is confusing: */
.block-name__element-name--modifier-name {}

/* Bad: underscore_separated_syntax is confusing: */
.block_name__element_name--modifier_name {}
```


### Reset.css

BEM recommends not to use reset.css, normalize.css or any other sort of default baseline styling applied to tag selectors (type selectors).

We explicitly allow global resetting (e.g. remove default margins and padding from headlines and lists) to avoid css style repetition in your components.

Please do not apply any custom styles to generic tag selectors except those undoing the browser default styles. So reset.css (removes browser default styling) is ok, but normalize.css (applies custom default styles to certain tag names) should not be used.  

**Less is more.** Keep your base styles as simple as possible. If you find yourself constantly overriding or undoing base styles, then your base styles are probably doing too much. See also the section "Mind the Single Responsibility Principle (SRP)".


### Constrained First (aka "Mobile First")

Your base styles should be written for the most constrained target (usually the smallest supported screen size).

Then, enhance your design for less constrained targets where appropriate:

```
.button {
  display: block;
}

@media only screen and (min-width: 992px) {
  .button {
    display: inline-block;
  }
}
```

#### The Sass-Way

You should put your media query enhancements as close to the altered styles as possible. In Sass, this is quite easy:

```
.button {
  display: block;

  @media only screen and (min-width: 992px) {
    display: inline-block;
  }
}
```

You should also try to work with named breakpoints wherever possible:

*_variables.scss:*

```
//== Media queries breakpoints
//
//## Define the breakpoints at which your layout will change, adapting to different screen sizes.

$screen-sm-min: 768px;
$screen-md-min: 992px;
$screen-lg-min: 1200px;

// So media queries don't overlap when required, provide a maximum
$screen-sm-max: ($screen-md-min - 1);
$screen-md-max: ($screen-lg-min - 1);

// helper classes for most common media query types
$tiny-only: "only screen and (max-width: #{$screen-sm-max})";
$tiny-up: "only screen"; /* tiny-up basically means "every screen size" */
$small-only: "only screen and (min-width: #{$screen-sm-min}) and (max-width: #{$screen-sm-max})";
$small-up: "only screen and (min-width: #{$screen-sm-min})";
$medium-only: "only screen and (min-width: #{$screen-md-min}) and (max-width: #{$screen-md-max})";
$medium-up: "only screen and (min-width: #{$screen-md-min})";
$large-only: "only screen and (min-width: #{$screen-lg-min})";
$large-up: "only screen and (min-width: #{$screen-lg-min})";
```

*_buttons.scss:*

```
@import '_variables';
.button {
  display: block;

  @media #{$medium-up} {
    display: inline-block;
  }
}
```

### LEGO First

Your page should be composed of as many composable, reusable elements as possible.
Think of LEGO bricks. Mix and match them to create your individual components (BEM blocks).
The LEGOs are called Skins in [Object Oriented CSS (OOCSS)]([https://github.com/stubbornella/oocss/wiki) and are one of the main OOCSS principles.

Ideally, LEGOs and utility classes adhere to the BEM naming scheme. However, if you mix-in frameworks like Twitter Bootstrap, then it is perfectly fine to add your own BEM classes alongside the framework classes.

_Important:_ Avoid using concrete presentational class names.

```
/* Bad: */
.withPadding { padding: 2rem }

/* Even Worse: */
.padding20px { padding: 2rem }

/* Good: */
.region { padding: 2rem }
```

#### When to use LEGOs?

LEGO classes do not require nested DOM structures but are applied directly to single DOM elements.

It is often possible to mix multiple LEGO classes on the same DOM element.

The following are some good LEGO candidates:

* Boxes/Panels/Regions (padding/margin)
* Headings (Typography)
* Anchors
* Buttons
* Lists (ol, ul, .inline-list, .no-bullets etc.)
* Utility Classes (e.g. contextual colors, contextual backgrounds, close icon, carets, quick floats etc. Take [Twitter Bootstrap Helper Classes](http://getbootstrap.com/css/#helper-classes) as an example.

#### When to avoid LEGOs?

It may be tempting to compose everything out of LEGOs. However, sometimes it is better to "bundle" multiple LEGOs into a single css rule to clean up your html.

Take the following example:

```
.rounded { border-radius: 10px; }

.hoverOpacity {
    opacity: 0.8;
    
    &::hover { opacity: 1 }
}

.col { margin-right: 10px; }
.row { margin-bottom: 10px; }

...

<div class="productList">
  <img src="product1.jpg" class="rounded hoverOpacity col row">
  <img src="product2.jpg" class="rounded hoverOpacity col row">
  ...
</div>
```

You might want to bundle the LEGO classes into a block__element rule:

```
.productList {
  &__image {
    @extend .rounded;
    @extend .hoverOpacity;
    @extend .col;
    @extend .row;
  }
}

...

<div class="productList">
  <img src="product1.jpg" class="productList__image">
  <img src="product2.jpg" class="productList__image">
  ...
</div>
```

Apply this technique only if it makes your life as a developer easier. Don't worry about file sizes at all as gzip is pretty good at compressing repeated class names in your html markup. Of yourse, you should leverage your webserver's gzip compression capabilities. 

If you are transpiling your scss into multiple css files, using [Sass mixins (@mixin)](http://sass-lang.com/guide) instead of @extend might be a better option.


### BEM "mixes" (aka "adopted child")

When working with LEGOs you inevitably run into situations where you need to combine two or more LEGO classes to style a single UI element. Example:

```
<footer class="footer region region--secondary">...</footer>
```

In the example above, the `<footer>` element acts as a `footer` component and as a `region` component at the same time.

This is OK as long as those two components do not conflict with each other (i.e. try to define the same style property). If you run into conflicts, you have several options:

1. Nest those DOM elements:

```
<footer class="footer">
  <div class="region region--secondary">...</div>
</footer>
```

2. Define a modifier

You can for example define a special region type doing exactly what you need in the given situation.

```
<footer class="footer region region--reusableCaseName">...</footer>
```

This solution should only be applied if it might potentially be reused somewhere else in your application.

Anyway, if you mind the single responsibility principle (see next secion), then you hopefully won't run into LEGO conflicts all that often.

### Mind the Single Responsibility Principle (SRP)

> Do one job well and one job only.

Example (Bad):
```
<a href="/product" class="promo">Buy now!</a>


.promo {
    display: block;
    padding: 20px;
    background-color: #09f;
    color: #fff;
    text-shadow: 0 0 1px rgba(0,0,0,0.25);
    border-radius: 4px;
}
```

Here we have a class for a promotional box of content. It applies a box model with padding as well as cosmetics (colors etc).

We can refactor this code to adhere to the SRP by splitting those two chunks of functionality into two classes:

```
<a href="product" class="region  promo">Buy now!</a>


.region {
    display: block;
    padding: 20px;
    border-radius: 4px;
}

.promo {
    background-color: #09f;
    color: #fff;
    text-shadow: 0 0 1px rgba(0,0,0,0.25);
}
```

We now have two classes which each carry a single responsibility; .region boxes off content and .promo applies our promotional styling. This now means that we can do things like this, which previously we couldn’t:

```
<h2>Buy now with promo code: <span class="promo">0MG4WE50ME</span></h2>
```

Previously it would not have been possible to reuse the .promo class inline because it also included those box model styles; by abstracting our code into single responsibilities we can pick and choose what we want to use like LEGOs.

More examples and information on the SRP topic can be found here:
http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/

#### When to use SRP?

As a general rule of thumb try and stick to the SRP any time you think that subsets of a css rule could be split out into reusable abstractions.

Also, whenever you find yourself reusing an existing LEGO brick and then undoing some of its associated styles, ask yourself if you could refactor this into two or more reusable LEGO bricks and avoid the need to undo existing styles.

#### But ...

It’s important not to take this too far; classes should be abstracted but ideally not presentational. Classes like .marginTop-32 for the sake of SRP are really not all that advisable.


### Nested Elements

According to BEM, selectors should be flat, not nested. One should also not try to reflect nested DOM structures in BEM class names.

```
/* BAD: */
<ul class="productList">
    <li class="productList__item">
        <div class="productList__item__name">
            Product Name
        </div>
    </div>
</div>

/* GOOD: */

<ul class="productList">
    <li class="productList__item">
        <div class="productList__name">
            Product Name
        </div>
    </div>
</div>
```

Another BEM-way to tackle this is divide one big component into multiple smaller components:
```
<ul class="productList">
    <li class="productList__item">
        <div class="productCard">
            <div class="productCard__name">
                Product Name
            </div>
        </div>
    </div>
</div>
```

The latter approach is recommended if the nested component can be used standalone outside of the list. Or if the nested component is in itself quite complex.


### Components should be layout-agnostic

A component must not make any assumptions about its context and should always look the same no matter where it is placed in your html document.

Try to make your component fluid so that it always takes up the full available width.
Arrange your components using a grid system. The column width defines how big the contained components will be. This also gives you great flexibility in regards to responsive layouts.

Of course, inline elements e.g. buttons, badges etc. do not have to span the full available width.


### Pseudo-Selectors

Child, descendant and sibling selectors should be avoided. Use BEM-style class name selectors instead:

*Bad:*
```
<div class="product">
  <div class="product__name">Product name by <span>Brand name</span></div>
</div>

...

.prodcuct__name > span {
  font-weight: bold;
}
```

*Good:*
```
<div class="product">
  <div class="product__name">Product name by <span class="product__brand">Brand name</span></div>
</div>

...

.prodcuct__brand {
  font-weight: bold;
}
```

Please note also that we call the brand class "product__brand" and not "product__title__brand". This is because BEM-style selectors should be flat. That gives us the freedom to easily move the brand name around within our component. Consult the section "Nested Elements" for further details.


Some pseudo selectors are very helpful when styling repeated elements within a component. Feel free to use them.

For example, there is no point in adding classes like block__element--odd, block__element--even, block__element--last-child etc when you can achieve the same thing more elegantly using CSS pseudo selectors.

You can also leverage the :before and :after pseudo selectors to enhance your DOM elements without having to modify the actual HTML code e.g. to insert an icon.


### Add BEM class names only if needed

Every component must have a class name (the B in BEM).
However, not every DOM element inside a BEM block needs to be assigned a BEM-style class name just for the sake of being BEMy. If you can style an element completely with LEGOs or even go with the base styles, then there is no need to add extra class names. Quite the contrary: Adding unused class names just makes your code harder to read.

Example:

```
<div class="product">
  <div class="badge">-50%</div>
  <div class="title">Product name</div>
  <a class="button" href="/product-name">More info</a>
</div>
```

The elements in the "product" component leverage globally defined styles for badge, title and button. If Everything looks good, leave it like that.

If you need to fine-tune the style of a certain element, add the BEM selector and use it. Let's make the discount badge float right:

```
<div class="product">
  <div class="prodcuct__discount badge">-50%</div>
  <div class="title">Product name</div>
  <a class="button" href="/product-name">More info</a>
</div>

...

.prodcuct__discount {
  float: right;
}
```


_Important! Do not use one of the existing Non-BEM-style selectors:_

```
/* This is BAD: */
.product .badge {
  float: right;
}
```

There is one exception, though. If you are developing a reusable plugin that should be easily extendable, then you might want to add those extra class names upfront to provide easy and stable CSS selectors that others can rely on:

```
<div class="product">
  <div class="prodcuct__discount badge">-50%</div>
  <div class="prodcuct__title title">Product name</div>
  <a class="product__moreLink button" href="/product-name">More info</a>
</div>
```


### Boolean state modifiers do not have to comply with BEM naming rules

Boolean state modifiers can be expressed using class names prefixed with "is-": *is-active, is-visible, is-disabled, is-initialized etc.*

*Overly complex example using strict BEM naming convention (to avoid)*:

```
<ul class="navigation">
  <li class="navigation__item">Item 1</li>
  <li class="navigation__item navigation__item--active">Item 2</li>
</ul>

...

$element.toggleClassName('navigation__item--active');
```

*Example using simplified class names (recommended)*

```
<ul class="navigation">
  <li class="navigation__item">Item 1</li>
  <li class="navigation__item is-active">Item 2</li>
</ul>

...

$element.toggleClassName('is-active');
```

### Recommended order of class names in your HTML code

It is often necessary to assign multiple class names to a single DOM element. The preferred order of class names is:

1. BEM Class (Block or Element)
2. BEM modifiers
3. LEGOs and utility classes
4. Boolean state modifiers

Example:
```
<ul class="navigation">
  <li class="navigation__item navigation__item--level1 bg-primary is-active">Primary</li>
  <li class="navigation__item navigation__item--level1 bg-warning is-disabled">Dangerous</li>
</ul>
```

Note: This is a purely developer-focused guideline. A Web Browser does not care about it. However, it helps making your code more organized and readable.

### BEM the Sass-Way

#### Use the parent selector (& character) to increase the readability of your code

Use the parent selector (& character) to save keystrokes and increase readability during development.

*_navigation.scss:*
```
.navigation {

  list-style-type: none;

  &__item {
    display: inline-block;

    &--level1 {
      margin-left: 0;
      font-size: 1em;
    }
    &--level2 {
      margin-left: 0.5em;
      font-size: 0.8em;
    }
  }
}
```

The scss above gets transpiled into the following css:
```
.navigation {
  list-style-type: none; }
  .navigation__item {
    display: inline-block; }
    .navigation__item--level1 {
      margin-left: 0;
      font-size: 1em; }
    .navigation__item--level2 {
      margin-left: 0.5em;
      font-size: 0.8em; }

```


#### SCSS file structure

Each Module/Block is defined in its own scss file:

* _navigation.scss
* _product.scss
* _badge.scss

Multiple Modules can be aggregated into larger sets:

*combined.scss*:

```
@import 'navigation';
@import 'product';
@import 'badge';
```

Depending on the complexity of your project you can either import everything into one single scss file, build sets of related modules or load every single module on demand (leveraging HTTP/2).


### Javascript Interoperability

If you need to select elements using Javascript, prefer BEM-style class names over LEGO/Utility class names. If a BEM-style class name is missing because it has not been needed for styling but would make your Javascript selector more robust, feel free to add the class name.
