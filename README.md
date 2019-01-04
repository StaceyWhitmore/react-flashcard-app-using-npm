A React Flashcard app built using the npm module [react-flashcard-app](https://www.npmjs.com/package/react-flashcard-app)
=================================
* Instructions for using the react-flashcard-app npm modules can be found at
https://www.npmjs.com/package/react-flashcard-app

See code sandbox at [codesandbox.io](https://codesandbox.io/s/91r5p4wnlr)

### Usage with Options
There are three main option keys available:

* topControlBar
Array of button keys. Sets which buttons will apear at which position in the top control bar

* bottomControlBar
Array of button keys. Sets which buttons will apear at which position in the bottom control bar

* buttonTexts

Object of button keys and string values. Overrides the default button texts.

Available button keys and the ascotiated function of the button are:

* up_rating

move current card one tab to the right

* down_rating

move current card one tab to the left

* decrement

load previous card

* increment

load next card

* flip

turn top card over

* shuffle

randomly change order of cards

* reset

put app back into initial state

* revert

turn all cards around to show back first
