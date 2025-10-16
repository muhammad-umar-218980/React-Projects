import TodoNav from './components/TodoNav'
import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'


function App() {
	let prevTodos =[
		{itemName: "Learn React",dueDate:"31-12-2025"},
		{itemName: "Learn Node",dueDate:"31-12-2025"},
		{itemName: "Learn MongoDB",dueDate:"31-12-2025"},
		{itemName: "Learn Express",dueDate:"31-12-2025"},
		{itemName:"Have Biryani",dueDate:"31-10-2025"}
	];
	const [todos, setTodos] = useState([...prevTodos]);

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
		<TodoItems todos={todos} onDeleteItem={deleteTodo}></TodoItems>
	</>


}

export default App
