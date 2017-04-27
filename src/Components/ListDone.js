import React, {Component} from 'react';
import Task from './Task.js';


class ListDone extends Component {

    render() {
        const tasks = this.props.done;
        const listItems = tasks.map((task) => <div className='task'><Task value={task} onClick={e=>this.handleClick(e)}/></div>);
        return (
            <div className='col-md-4 done'>
                <h2>Done</h2>
                <div className='grey'>
                    {listItems}
                </div>
            </div>
        );
    }
}

export default ListDone;
