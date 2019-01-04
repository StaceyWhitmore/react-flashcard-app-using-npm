import React, { Component } from 'react';
import FlashcardApp from 'react-flashcard-app';
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



class App extends Component {
  render() {
    return (

      <div className="App">
      <FlashcardApp data={data} />
      </div>
    );

  }
}

export default App;

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>


*/
