import React, {Component} from 'react';

class NewTask extends Component {
  state = {
    newTask: this.props.newTask
  };



  submitHandler = (event) => {
    event.preventDefault();
    const inputVal = document.getElementById('inputtask');
    const task = inputVal.value;
    this.props.onClick(task);
  }

  render() {
    return (
      <div className='col-md-12'>
        <h3>Add a new task</h3>
        <form>
          <input id='inputtask' type="text" required placeholder="Details the Task"/>
          <button onClick={(e) => this.submitHandler(e)}>Add</button>
        </form>
      </div>
    );
  }

}

export default NewTask;
