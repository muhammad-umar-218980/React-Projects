import TodoNav from './components/TodoNav'
import { useState } from 'react'
import AddTodo from './components/AddTodo'
import './App.css'


function App() {
	/*
	let todos =[
		{itemName: "Learn React",dueDate:"31-12-2025"},
		{itemName: "Learn Node",dueDate:"31-12-2025"},
		{itemName: "Learn MongoDB",dueDate:"31-12-2025"},
		{itemName: "Learn Express",dueDate:"31-12-2025"},
		{itemName:"Have Biryani",dueDate:"31-10-2025"}
	];
	*/
	const [todos, setTodos] = useState([]);

	const addNewTodo = (newTodoItem, newTodoDueDate) => {
		console.log(`${newTodoItem} added with due date ${newTodoDueDate}`);

		setTodos((currentItems) => {
			return [...currentItems, { itemName: newTodoItem, dueDate: newTodoDueDate }];
		});
	}

	const deleteTodo = (itemName) => {
		console.log(`${itemName} deleted`);

		const newItems = todos.filter((item) => item.itemName !== itemName);

		setTodos(newItems);
	}

	return <>
		<TodoNav></TodoNav>
		<AddTodo onNewTodo={addNewTodo}></AddTodo>

		<div className="container my-4">
			{todos.length === 0 ? (
				<p className="text-muted">No todos yet. Add one above.</p>
			) : (
				<ul className="list-group">
					{todos.map((t, idx) => (
						<li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
							<div>
								<div>{t.itemName}</div>
								<small className="text-muted">Due: {t.dueDate}</small>
							</div>
							<button className="btn btn-sm btn-danger" onClick={() => deleteTodo(t.itemName)}>Delete</button>
						</li>
					))}
				</ul>
			)}
		</div>
	</>


}

export default App
