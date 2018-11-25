import React, { Component } from 'react';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import TodoList from "./components/todolist/TodoList";
import './App.css';
import axios from "axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import {  faDotCircle } from '@fortawesome/free-regular-svg-icons'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(  faDotCircle, faCheck, faTimes)

var today = new Date();
var array  = []
const urlJson = "http://localhost/api/data.json";



class App extends Component {

  constructor(props) {  
    super(props);

    this.state = {
      isDate: true,
      searchValue: "",
      toDoListValue: null
    }
  }


  render() {
    return (
      <div className="App">
        <Header title="ge" isDate={this.state.isDate} />
        <div className="container">
          <div className="index">
          <Search />
          <TodoList />
          </div>
        </div>
      
      </div>
    );
  }
}

export default App;
