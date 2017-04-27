import React, {Component} from 'react';

class ListToDo extends Component {

    state = {todo : this.props.todo}

    componentWillReceiveProps(nextProps) {
      this.setState({todo: nextProps.todo});
    }

    taskDoneHandler = (event) => {
      const taskDone = event.target.textContent;
      console.log("le innerHTML de ListToDo: "+taskDone);
      this.props.onClick(taskDone);
    }

    render() {

        return (
            <div className='col-md-4 todo'>
                <h2>To do</h2>
                <div className='grey'>
                    <button onClick={(e) => this.taskDoneHandler(e)}>{this.state.todo}</button>
                </div>
            </div>
        );
    }
}

export default ListToDo;
