// Développer une application web Todo simple en utilisant React. 
// L'application doit permettre à l'utilisateur d'ajouter, 
// supprimer et marquer des tâches comme complétées.
// Structurez votre projet en quatre composants :
// Todo, TaskForm, TaskList, Task.

// 
import React, {Component} from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
        this.toggleTask = this.toggleTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    addTask(task){
        this.setState({tasks: [ ...this.state.tasks, task ]});
        // A ne pas faire
        //this.state.tasks.append(task);
    }

    toggleTask(index){
        const updatedTasks = this.state.tasks.map((task, i)=>{
            if(i === index){
                task.completed = !task.completed;
            }
            return task;
        })

        this.setState({tasks: updatedTasks});
    }

    deleteTask(index){
        const updatedTasks = this.state.tasks.filter((task, i)=> i !== index);
        this.setState({tasks: updatedTasks});
    }

    render() {
        return(
            <div>
                <TaskList tasks={this.state.tasks} 
                toggleTask={this.toggleTask} 
                deleteTask={this.deleteTask}/>
                <TaskForm addTask={this.addTask}/>
            </div>
        )
    }
}

export default Todo;