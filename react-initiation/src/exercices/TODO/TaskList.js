import React, {Component} from "react";
import Task from "./Task";

class TaskList extends Component{
    render(){
        const {tasks, deleteTask, toggleTask} = this.props;
        return (
            <ul>
                {
                    tasks.map((task, index)=>
                    <Task key={index} 
                    index={index} 
                    task={task} 
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}></Task>
                )}
            </ul>
        )
    }
}

export default TaskList;