import React, { Component } from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='add-habit'>
          <label> GOAL: </label>
          <input />
          <label> ITERATION </label>
          <NumericTextBox />
          <Button>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
