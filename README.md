# Bulma Admin Bar

This admin bar is a quick and easy way to create admin interfaces with Bulma CSS.

## Installation

To install this project and use it with your favorite SASS build tool, run the following command:

```bash
npm install --save bulma-admin-bar
```

## SASS - Use

To use the included styles from this package, import the file in `sass/bulma-admin-bar.scss`.

## Components

The styles for this admin bar include the following components:

* `.full-screen-app` - Creates a full screen flex window with no overflow.
* `.main-nav` - Collapsable sidebar nav
  * `.main-nav-title` - Title for sidebar navs
  * `.main-nav-list` - List of links for sidebar navs
  * `.is-animiated-on-collapse` - Span or similar that collapses it's width when the parent `.main-nav` toggles the `.is-collapse` class

# Additional Modifiers

This stylesheet also includes a few basic modifiers to compliment the existing Bulma modifiers.

* `.button.is-hover-only` - A button that has no background or border, but when hovered uses a background to compliment the sidebar
* `.is-fullwidth` - Sets width 100% and flex grow
* `.is-scrollable-y` - Sets overflow-y to scroll (useful for independently scrolling admin sections)

# License

This software is licensed under the [MIT license](LICENSE.md).
