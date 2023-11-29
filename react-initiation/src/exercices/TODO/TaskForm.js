
import React, {Component} from "react";

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({input: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.addTask({text: this.state.input, completed: false});
        this.setState({input: ''});
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}/>
                <button type="submit">Ajouter</button>
            </form>
        )
    }
}

export default TaskForm;