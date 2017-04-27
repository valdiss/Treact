import React, {Component} from 'react';

class Task extends Component {

    componentWillReceiveProps(nextProps) {
      this.setState({todo: nextProps.todo});
    }
  
    handleClick(event){
      console.log(event.target.innerText);
      const num = event.target.innerText;
      console.log("le num de Task: "+num);
      this.props.onClick(num);
    }

    render() {

        return (
          <button onClick={(e)=>this.handleClick(e)}>{this.props.value}</button>
        );
    }

}

export default Task;
