import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Filter from './components/Filter'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Header />
        <div className="row">
          <div className="col-md-8 filter">
            <Filter />
            <VisibleTodoList />
          </div>
          <div className="col-md-4 create-todo">
            <AddTodo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
