import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListToDo from './Components/ListToDo.js';
import ListDone from './Components/ListDone.js';
import CurrentTask from './Components/CurrentTask.js';
import NewTask from './Components/NewTask.js';

class App extends Component {
  state = {
    todo: [
      'vaiselle'
    ],
    done: [
      'menage', 'rangement'
    ]
  };

  taskDonehandler(taskDone) {
    this.setState({done: [taskDone], todo: ''});
  }

  handleNewTask = (task) => {
    console.log("Je met à jour le state de l'app !!!!" + task);
    this.setState({todo: task});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Treact!</h2>
        </div>
        <p className="App-intro">
          <ListToDo onClick={taskDone => this.taskDonehandler(taskDone)} todo={this.state.todo}/>
          <ListDone done={this.state.done}/>
          <CurrentTask/>
          <NewTask onClick={(task) => this.handleNewTask(task)} newTask={this.state.newTask}/>
        </p>
      </div>
    );
  }
}

export default App;
