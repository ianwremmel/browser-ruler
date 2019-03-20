# Browser Ruler

[![CircleCI](https://circleci.com/gh/ianwremmel/browser-ruler.svg?style=svg)](https://circleci.com/gh/ianwremmel/browser-ruler)[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fbrowser-ruler.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fbrowser-ruler?ref=badge_shield)
[![Dependabot badge](https://img.shields.io/badge/Dependabot-active-brightgreen.svg)](https://dependabot.com/)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

<a href='https://ko-fi.com/L4L79EBV' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

> Measure things in your browser!

This [Web Extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)
provides an on-screen ruler for browsers that support the standard. At this
time, the ruler is manually tested in [Chrome]() and [Firefox]().

At the time I first wrote this, there were 4 other ruler extensions in the
Chrome Web Store. Two are adware supported (one without admitting it) and the
other had too many features I didn't need.

## Installation

The easiest way to install this extension is via the
[Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en-US).

See the [Building](#building) section to build from source, then follow the
browser-appropriate instructions for loading a web extension.

-   [Chrome](https://developer.chrome.com/extensions/getstarted#unpacked)
-   [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Installing)

## Usage

After installing the extension, you'll see a new icon in your browser's toolbar.
When you click it, the page will become non-interactive and clicking on the page
will start/stop drawing the ruler. Click the ruler icon again to switch back to
normal browsing.

## Building

1. Clone this project.
1. `cd` into the project directory.
1. `npm install` dependencies
1. `npm run build` to create `dist` directory
1. Follow the browser-appropriate instructions above to load the extension into
   your browser. The extension can be found in `./dist`.

## Attribution

Icons built by [The Working Group](http://blog.twg.ca) and discovered at
[Icon Finder](https://www.iconfinder.com/icons/62246/ruler_icon).

## Changelog

0.4.0 - 2018-04-14 - Diagonal Measurement

-   Add diagonal measure from
    [rickvanderzwet](https://github.com/rickvanderzwet)

    0.3.0 - 2017-04-02 - Maintenance release

-   Remove grunt from toolchain
-   Add webpack, babel-minify to toolchain
-   Use `web-ext` for bundling
-   Publish to Firefox store

    0.2.0 - 2015-01-31 - Maintenance release

-   Remove bower, zepto
-   Modularize code

## Maintainer

-   [Ian W. Remmel](https://github.com/ianwremmel)

## Contribute

I'd love to hear about bug fixes or other ways to improve this. PRs are very
welcome, but if you've got a feature in mind, please consider opening an issue
before writing much code. I won't rule out adding new features, but the excess
features in another ruler are why this project exists.

## License

[MIT](LICENSE) &copy; Ian W. Remmel

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fbrowser-ruler.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fbrowser-ruler?ref=badge_large)
