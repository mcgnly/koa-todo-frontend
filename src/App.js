import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent';
import TodoItem from './TodoItem';


class App extends Component {
  constructor(props){
	super(props)
	this.state={todoArray : []};
  }

  componentDidMount() {
  	this.getTodos().then((res) => {
  	    console.log("res", res);
  		this.setState({todoArray: res});
  	});
  }

  async getTodos() {
	const response = await request.get('http://localhost:3000/user/9091e65a-a50f-4e36-9989-f84565d1063d');
	return response.body.todos;
  }

  async makeTodo() {
	await request.post('/foo');
  }

  async toggleTodo() {
	await request.post('/foo');
  }

 //  async makeList() {
	// const res = await this.getTodos()
	// return res.map((item) => {
	// 	console.log("item", item);
	// 	return <li>{`${item}`}</li>
	// });
 //  }

	render() {
		let key=0;
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
		  <ul>
		  	{this.state.todoArray.map((item) => (
		  		<div>
		  			<input id="toggle" type="checkbox"/>
		  			<TodoItem todo={item} />
		  		</div>
		  		))}
		  </ul>
	  </div>
	);
  }
}

export default App;
