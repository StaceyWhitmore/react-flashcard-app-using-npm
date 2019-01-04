A React Flashcard app built using the npm module [react-flashcard-app](https://www.npmjs.com/package/react-flashcard-app)
=================================
* Instructions for using the react-flashcard-app npm modules can be found at
https://www.npmjs.com/package/react-flashcard-app

See code sandbox at [codesandbox.io](https://codesandbox.io/s/91r5p4wnlr)

## Usage with Options
### There are three main option keys available:

* **_topControlBar_**: Array of button keys. Sets which buttons will apear at which position in the top control bar

* **_bottomControlBar_**: Array of button keys. Sets which buttons will apear at which position in the bottom control bar

* **_buttonTexts_**: Object of button keys and string values. Overrides the default button texts.

### Available button keys and the associated function of the button are:

* **_up_rating_**: move current card one tab to the right

* **_down_rating_**: move current card one tab to the left

* **_decrement_**: load previous card

* **_increment_**: load next card

* **_flip_**: turn top card over

* **_shuffle_**: randomly change order of cards

* **_reset_**: put app back into initial state

* **_revert_**: turn all cards around to show back first

## Basic Usage

Example:
```import FlashcardApp from 'react-flashcard-app';

const data =
  {
    id: 1,
    name: 'Example Deck',
    cards: [
      {
        id: 1,
        front: 'Lorem',
        back: 'dolor',
      },
      {
        id: 2,
        front: 'sit',
        back: 'amet',
      },
      {
        id: 3,
        front: 'consetetur',
        back: 'sadipscing',
      },
      {
        id: 4,
        front: 'sed',
        back: 'diam',
      },
    ],
  };

  export const options =
    {
      topControlBar: [ 'downRating', 'decrement', 'increment', 'upRating',
      ],
      bottomControlBar: [
        'flip', 'shuffle', 'reset', 'revert',
      ],
      buttonTexts: {
        shuffle: 'shuffle',
      },
    };

<FlashcardApp data={data} options={options}/>
