// Développer une application web Todo simple en utilisant React. 
// L'application doit permettre à l'utilisateur d'ajouter, 
// supprimer et marquer des tâches comme complétées.
// Structurez votre projet en quatre composants :
// Todo, TaskForm, TaskList, Task.

// 
import React, {Component} from "react";

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {text: "Faire le TP", completed: false},
                {text: "Faire les courses", completed: true}
            ]
        }
    }

    addTask(task){
        this.setState({tasks: [ ...this.state.tasks, task ]});
        // A ne pas faire
        //this.state.tasks.append(task);
    }
    render() {
        return(
            <div>
                <TaskList tasks={this.state.tasks} 
                toggleTask={this.toggleTask} 
                deleteTask={this.deleteTask}></TaskList>
                <TaskForm addTask={this.addTask}></TaskForm>
            </div>
        )
    }
}

export default Todo;