import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import initialTodos from '../common/initial-todos';
import { VisibilityFilters } from './visibility-filters';


//{  
//   id: 1,  
//   text: "Walk the dog",
//   completed :false
//}
export default class Todos extends Component {
  state = {
    todos: initialTodos,
    visibilityFilter: VisibilityFilters.SHOW_ALL, //"SHOW_COMPLETED", "SHOW_ACTIVE"
  };
  currentId = 4;

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  addTodo = (todoText) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.currentId++,
          text: todoText,
          completed: false,
        },
      ],
    });
  };

  changeFilter = (filter) => this.setState({ visibilityFilter: filter });

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  }


  render() {
    return (
      <div>
        <h1>Todos (using state)</h1>
        <AddTodo onAddTodo={this.addTodo} />
        <FilterButtons
          visibilityFilter={this.state.visibilityFilter}
          onChangeFilter={this.changeFilter}
        />
        <VisibleTodoList
          todos={this.state.todos}
          visibilityFilter={this.state.visibilityFilter}
          onToggleTodo={this.toggleTodo}
          onDeleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}
