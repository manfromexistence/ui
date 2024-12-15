# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2021-12-28
### Fixed
- The one-time temporary iframe used for internal CSS validation is now removed from the DOM.
- Selecting texts was sometimes triggering edit-mode.

### Changed
- All comments can now be toggled ([#2](https://github.com/Aurelain/react-style-editor/issues/2)).
- The copy command is no longer intercepted when a selection exists ([#3](https://github.com/Aurelain/react-style-editor/issues/3)).

## [0.3.0] - 2021-11-25
### Added
- Protection against large base64.

### Fixed
- Since Chrome 80, the CSS browser validation was wrong.
- Writing inside `#foo{}` was producing `#foo{b;} #foo{ba;b;} #foo{bar;ba;b;}` ([#1](https://github.com/Aurelain/react-style-editor/issues/1)).

### Changed
- `onChange` no longer gets called automatically by mount.
- Implemented some minor visual changes.
- Improved textarea autosize.


[0.4.0]: https://github.com/Aurelain/react-style-editor/releases/tag/v0.4.0
[0.3.0]: https://github.com/Aurelain/react-style-editor/releases/tag/v0.3.0
[0.2.0]: https://github.com/Aurelain/react-style-editor/releases/tag/v0.2.0