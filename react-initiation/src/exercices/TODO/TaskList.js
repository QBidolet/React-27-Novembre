import React, {Component} from "react";

class TaskList extends Component{
    render(){
        const {tasks, deleteTask, toggleTask} = this.props;
        return (
            <ul>
                {
                    tasks.map((task, index)=>
                    <Task key={index} task={task}></Task>
                )}
            </ul>
        )
    }
}

export default TaskList;