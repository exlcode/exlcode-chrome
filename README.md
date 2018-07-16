# EXLcode Online IDE - Chrome Extension

This extension provides a seamless user experience for EXLcode and Chrome browser users.

It can be found in the Chrome Web Store at TODO

## Feedback

Please provide feedback and bug reports via GitHub issues in this repo

## Developer Setup

1.  Clone this repo

2.  Run `yarn install` in `src/browser_action/app`

### Browser Action Development

All code for the popup or, "Browser Action" as it's formally known, is in the `src/browser_action/app` directory. It is a small React Typescript app that can be edited separately by running `yarn start` in that directory.

## Production Build

1.  First, it's necessary to build the browser action app: run `yarn build` in `src/browser_action/app`

2.  Once the browser action has been built, temporarily delete the `src/browser_action/app/node_modules` directory to decrease the size of the extension

3.  Export the directory as a ZIP (i.e., `cd .. && zip -r exlcode-chrome.zip exlcode-chrome`) and continue the process following the Chrome Web Store guidlines.

4.  After the extension has been packaged, in order to continue development, restore your `src/browser_action/app/node_modules` directory by running the `yarn install` command as outlined in the Develeper Setup section above.
