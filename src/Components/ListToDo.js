import React, {Component} from 'react';
import Task from './Task.js';

class ListToDo extends Component {

    state = {todo : this.props.todo}

    leClick(event){
      const num = event.target.value;
      console.log("le num de ListToDo: "+num);
      this.props.onClick(num);
    }

    render() {

        const tasks = this.state.todo;
        const listItems = tasks.map((task) => <div className='task'><Task value={task} onClick={(num)=>this.leClick(num)}/></div>);
        return (
            <div className='col-md-4 todo'>
                <h2>To do</h2>
                <div className='grey'>
                    {listItems}
                </div>
            </div>
        );
    }
}

export default ListToDo;
