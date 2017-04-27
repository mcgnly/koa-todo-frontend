import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';


class App extends Component {
  constructor(props){
    super(props)
    this.todoArray = [];
  }

  componentDidMount() {

  }

  async getTodos() {
    const response = await request.get('localhost:3000/user/9091e65a-a50f-4e36-9989-f84565d1063d');
  }

  async makeTodo() {
    const response = await request.post('/foo');
  }

  async toggleTodo() {
    const response = await request.post('/foo');
  }

  makeList() {
    let todoArray = this.getTodos();
    let displayList = todoArray.todos.map((item) => {
      return <li>{item}</li>
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <label>type a todo: </label>
          <input type="text"/>
          <button>submit</button>
          {this.makeList()}
      </div>
    );
  }
}

export default App;
