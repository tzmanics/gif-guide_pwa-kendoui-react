import React, { Component } from 'react';
import { NumericTextBox } from '@progress/kendo-react-inputs';
import { Button } from '@progress/kendo-react-buttons';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      habitId: 0,
      habitName: '',
      habitIteration: 0,
      habits: []
    };
  }

  handleNameChange = (event) => {
    this.setState({ habitName: event.target.value });
  }

  handleIterationChange = (event) => {
    this.setState({ habitIteration: event.target.value });
  }

  handleAddHabit = (event) => {
    this.setState({
      habits: this.state.habits.concat([{
        key: this.state.habitId,
        name: this.state.habitName,
        iteration: this.state.habitIteration
      }]),
      habitId: this.state.habitId + 1
    });
  }

  render() {
    return (
      <div className='App'>
      <h1> Goals &amp; Iterations </h1>
      <div className='habits-list'>
        <ul>
          {this.state.habits.map((habit, index) => [
            <li key={index}>
              <p> {habit.name} </p>
              <div className='iterations-area'>
                {[...Array(habit.iteration)].map((iteration, index) => {
                  return <input key={index} type='radio' />
                })}
              </div>
            </li>
          ])}
        </ul>
      </div>
        <div className='add-habit'>
          <label> GOAL: </label>
          <input type='text' onChange={this.handleNameChange} />
          <label> ITERATION </label>
          <NumericTextBox
            format='0'
            min={0}
            max={22}
            onChange={this.handleIterationChange}
          />
          <Button primary={true} onClick={this.handleAddHabit}>
            Add Habit
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
