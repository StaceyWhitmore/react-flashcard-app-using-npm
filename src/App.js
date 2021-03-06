import React, { Component } from 'react';
import FlashcardApp from 'react-flashcard-app';
import { data } from './data'
import { options } from './options'

class App extends Component {
  render() {
    return (

      <div className="App">
      <FlashcardApp data={data} options={options}/>
      </div>
    );

  }
}

export default App;
