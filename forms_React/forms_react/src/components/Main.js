  import React, { Component } from "react";
  import "./Main.css";
  import { FaEdit, FaPlus, FaWindowClose } from "react-icons/fa";

  export default class Main extends Component {
    state = {
      newTask: "",
      tasks: [],
      index: -1,
    };

    handleChange = (event) => {
      this.setState({ newTask: event.target.value });
    };

    handleEdit = (index) => {
      const { tasks } = this.state;
      this.setState({
        index: index,
        newTask: tasks[index],
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      const { tasks, newTask, index } = this.state;

      const trimmedTask = newTask.trim();

      if (trimmedTask === "" || tasks.indexOf(trimmedTask) !== -1) {
        return;
      }

      const newTasks = [...tasks];
      

      if(index === -1) {
        this.setState({
          tasks: [...tasks, trimmedTask],
          newTask: "", // Limpa o campo de entrada após a submissão do formulário
        });
      }else{
        
        newTasks[index] = trimmedTask;
        this.setState({
          tasks: [...newTasks],
          newTask: "",
          index: -1  
        });
        
      }
    }

    handleDelete = (event) => {
      const { tasks } = this.state;
      const taskToDelete = event.target.parentNode.parentNode.textContent;
      const newTasks = tasks.filter((task) => task !== taskToDelete);

      this.setState({ tasks: newTasks });
    };

    render() {
      const { newTask, tasks } = this.state;

      return (
        <>
          <div className="main">
            <h1>Todo List</h1>
            <form onSubmit={this.handleSubmit} className="form" action="#">
              
              <input
                onChange={this.handleChange}
                type="text"
                value={newTask}
              />
              <button type="submit">
                <FaPlus />
              </button>
            </form>
            <ul className="tasks">
              {tasks.map((task, index) => (
                <li key={task}>
                  {task}
                  <span className="buttons">
                  <FaEdit className="button_edit" onClick={() => this.handleEdit(index)} />
                  <FaWindowClose className="button_delete" onClick={(event) => this.handleDelete(event, index) } />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    }
  }
