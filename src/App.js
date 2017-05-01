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
	const response = await request.get('http://localhost:3000/user/9091e65a-a50f-4e36-9989-f84565d1063d/todos');
	return response.body.todos;
  }

  async makeTodo() {
	await request.post('/foo');
  }

  async toggleTodo(id) {
  	let url = 'http://localhost:3000/todos/'+id+'/toggle'
	const toggled = await request.patch(url);
	if (toggled.statusCode === 200) {
		let specificIndex = this.state.todoArray.findIndex((item)=>{return item.id === id});

		let specificItem = {...this.state.todoArray[specificIndex]};
		specificItem.completed = !specificItem.completed;

		let newTodoArray = [...this.state.todoArray];
		newTodoArray[specificIndex] = specificItem;
		this.setState({...this.state.todoArray, todoArray:newTodoArray});
	}
  }

	render() {
		return (
			<div className="App">
				<label>type a todo: </label>
				<input type="text"/>
				<button>submit</button>
			  	{this.state.todoArray.map((item) => (
			  		<div className="todoItem" key={item.id}>
			  			<input id="toggle" type="checkbox" checked={item.completed} onChange={()=>{this.toggleTodo(item.id)}}/>
			  			<TodoItem todo={item.title} completed={item.completed} />
			  		</div>
			  		))}
			</div>
		);
  }
}

export default App;
