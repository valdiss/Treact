import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListToDo from './Components/ListToDo.js';
import ListDone from './Components/ListDone.js';
import CurrentTask from './Components/CurrentTask.js';
import NewTask from './Components/NewTask.js';


class App extends Component {
  state = {todo:['vaiselle','claque à Sylvain'],done:['menage','rangement']};

  handleClick(num) {
    this.setState({todo:[num]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Treact!</h2>
        </div>
        <p className="App-intro">
          <ListToDo onClick={num=>this.handleClick(num)} todo={this.state.todo}/>
          <ListDone done={this.state.done}/>
          <CurrentTask/>
          <NewTask />
        </p>
      </div>
    );
  }
}

export default App;
