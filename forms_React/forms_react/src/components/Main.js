  import React, { Component } from "react";
  import "./Main.css";
  import Forms from "./Forms";
  import Task from "./Tasks";


  export default class Main extends Component {
    state = {
      newTask: "",
      tasks: [],
      index: -1,
    };


    

    componentDidMount() {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if(!tasks) return;
      this.setState({ tasks });
    }

   componentDidUpdate(prevProps, prevState) {
      prevState.tasks !== this.state.tasks && localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
   }


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

            <Forms 
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              newTask={newTask}
            />

            <Task
              tasks={tasks}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              index={this.state.index}
            />

            
          </div>
        </>
      );
    }
  }
