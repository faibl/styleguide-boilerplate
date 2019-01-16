# Styleguide Boilerplate

Use this Styleguide boilerplate template as a starting point for your design implementation. Think of something like Twitter Bootstrap but tailored specifically to the requirements of your own project/company.

This boilerplate comes complete with an automatically generated HTML demo page showing all of your UI Patterns alongside the corresponding markup.

The development experience is seamless. Our workflow includes a local webserver with live reload to UI Patterns Demo page whenever you change one of the source files.

The UI Components Demo page is generated automatically using [Styledown](https://github.com/styledown/styledown).


## Motivation

When building websites and apps for public audiences, one should take extra care about aesthetics and performance. This is why building custom UI components is usually a better choice than using one of the generic CSS frameworks (e.g. Twitter Bootstrap, ZURB Foundation etc).
 
* smaller file size and less css rules means faster loading and rendering performance
* truly custom designs instead of sites looking almost like every other Bootstrap site
* you don't have to *fight* a framework - it can be quite hard to undo/override some 3rd party framework styles
* the resulting markup and naming conventions better fit to the rest of your frontend code. Check out our [CSS guidelines](css_guidelines.md) if you like BEM. 
* The demo and documentation represent your own custom components, not those of a 3rd party framework

## Restrictions

### No Javascript

This UI Pattern Toolkit compiles to CSS only, **no Javascript**. This is a deliberate decision to make the UI Patterns as framework agnostic as possible.

Having the visual preview as well as the example markup at hand, it should be quite easy to implement the dynamic parts in the framework of your choosing. Let it be **Angular, React, Ember, Backbone, jQuery or vanilla JS**. Mostly it will be a matter of adding or removing a css class.

In order to make the examples work, we rely on inline javascript event handlers (onclick). Please **replace the inline javascript event handlers** from the examples with something more sophisticated and suitable for your own project.

Or you could add support Javascript, if you want to provide a standalone collection of UI Patterns. Feel free to add a gulp task or npm script to transpile and bundle your Javascript, if you want to. 

### Browser Support

The demo components are built for modern browsers only. If you need to support older browsers, please take care to either not use the demo components at all or rewrite them where necessary. 

## Demo

http://faibl.github.com/styleguide-boilerplate

## Install

```
git clone https://github.com/faiblk/styleguide-bolierplate
cd styleguide
rm -Rf .git
npm install
```

## Development

```
npm run dev
```

Navigate to `http://localhost:8000/`. The UI Patterns Demo page will automatically reload if you change any of the source files.

## Build

```
npm run build
```

The transpiled code (css, html and images) is stored in the dist directory. 

## Deploy to GitHub Pages

```
npm run deploy
```

Builds your UI Patterns demo page and publishes it to GitHub pages. The page will be available at http://username.github.io/repository (you need to replace username and repository)
Example: http://faibl.github.com/styleguide-boilerplate

## SCSS Integration

You can also import the styleguide scss files directly into your project scss files:

```sass
$sgbp-asset-path: '/styleguide/assets'; // copy dist/assets to a publicly available path and adjust setting accordingly
@import '../styleguide/src/styleguide'; // adjust according to your environment
```

## CSS Guidelines

The sample components adhere to our [CSS Guidelines](css_guidelines.md) based on BEM.

As this is your own customized UI Pattern collection, you are free to choose whichever CSS methodology you like. However, we suggest that you document it in the css_guidelines.md file in order to produce consistent css code.

