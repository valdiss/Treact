import React, {Component} from 'react';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: ''
        };
    }

    render() {
        return (
            <div className='col-md-12'>
                <h3>Add a new task</h3>
                <form>
                    <input type="text" required placeholder="Details the Task" value={this.state.newTask}/>
                    <button>Add</button>
                </form>
            </div>
        );
    }

}

export default NewTask;
