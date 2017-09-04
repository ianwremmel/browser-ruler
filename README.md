# Browser Ruler

[![Greenkeeper badge](https://badges.greenkeeper.io/ianwremmel/chrome-ruler.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fchrome-ruler.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fchrome-ruler?ref=badge_shield)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Measure things in your browser!

This [Web Extension](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) provides an on-screen ruler for browsers that support the standard. At this time, the ruler is manually tested in [Chrome]() and [Firefox]().

At the time I first wrote this, there were 4 other ruler extensions in the Chrome Web Store. Two are adware supported (one without admitting it) and the other had too many features I didn't need.

## Installation

The easiest way to install this extension is via the [Chrome Web Store](https://chrome.google.com/webstore/category/extensions?hl=en-US).

See the [Building](#building) section to build from source, then follow the browser-appropriate instructions for loading a web extension.

- [Chrome](https://developer.chrome.com/extensions/getstarted#unpacked)
- [Firefox](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension#Installing)

## Usage

After installing the extension, you'll see a new icon in your browser's toolbar. When you click it, the page will become non-interactive and clicking on the page will start/stop drawing the ruler. Click the ruler icon again to switch back to normal browsing.

## Building

1. Clone this project.
1. `cd` into the project directory. 
1. `npm install` dependencies
1. `npm run build` to create `dist` directory
1. Follow the browser-appropriate instructions above to load the extension into your browser. The extension can be found in `./dist`.

## Attribution

Icons built by [The Working Group](http://blog.twg.ca) and discovered at [Icon Finder](https://www.iconfinder.com/icons/62246/ruler_icon).

## Changelog

0.2.0 - 2015-01-31 - Maintenance release

  - Remove bower, zepto
  - Modularize code

## Maintainer

- [Ian W. Remmel](https://github.com/ianwremmel)

## Contribute

I'd love to hear about bug fixes or other ways to improve this. PRs are very welcome, but if you've got a feature in mind, please consider opening an issue before writing much code. I won't rule out adding new features, but the excess features in another ruler are why this project exists. 

## License

[MIT](LICENSE) &copy; Ian W. Remmel

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fchrome-ruler.svg?type=large)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fianwremmel%2Fchrome-ruler?ref=badge_large)
