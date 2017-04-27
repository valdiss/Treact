import React, {Component} from 'react';

class ListDone extends Component {
  state = {done : this.props.done}

  componentWillReceiveProps(nextProps) {
    this.setState({done: nextProps.done});
  }

  taskUndoneHandler = (event) => {
    const taskUndone = event.target.textContent;
    console.log("le innerHTML de ListDone: "+taskUndone);
    this.props.onClick(taskUndone);
  }

  render() {
    return (
      <div className='col-md-4 done'>
        <h2>Done</h2>
        <div className='grey'>
          <button onClick={(e) => this.taskUndoneHandler(e)}>{this.state.done}</button>
        </div>
      </div>
    );
  }
}

export default ListDone;
