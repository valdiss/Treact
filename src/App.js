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
      'menage'
    ]
  };

  taskDonehandler(taskDone) {
    this.setState({done: [this.state.done,taskDone], todo: ''});
  }

  taskUndonehandler(taskUndone) {
    this.setState({done: '', todo: [this.state.todo, taskUndone]});
  }

  handleNewTask = (task) => {
    console.log("Je met à jour le state de l'app !!!!" + task);
    this.setState({todo: [this.state.todo, task]});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Treact!</h2>
        </div>
        <div className="App-intro">
          <ListToDo onClick={taskDone => this.taskDonehandler(taskDone)} todo={this.state.todo}/>
          <ListDone onClick={taskUndone => this.taskUndonehandler(taskUndone)} done={this.state.done}/>
          <CurrentTask/>
          <NewTask onClick={(task) => this.handleNewTask(task)} newTask={this.state.newTask}/>
        </div>
      </div>
    );
  }
}

export default App;
