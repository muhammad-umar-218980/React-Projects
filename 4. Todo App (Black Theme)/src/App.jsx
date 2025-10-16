import TodoNav from './components/TodoNav'
import { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import './App.css'

function App() {
	let prevTodos = [
		{ itemName: "Learn React", dueDate: "1-12-2025" },
		{ itemName: "Learn Node", dueDate: "10-12-2025" },
		{ itemName: "Learn MongoDB", dueDate: "20-12-2025" },
		{ itemName: "Learn Express", dueDate: "31-12-2025" },
		{ itemName: "Have Biryani", dueDate: "31-10-2025" }
	];

	const [todos, setTodos] = useState([...prevTodos]);


	useEffect(() => {
		const createParticle = () => {
			const particle = document.createElement('div');
			particle.className = 'floating-particle';
			particle.style.left = `${Math.random() * 100}vw`;
			particle.style.top = `${Math.random() * 100}vh`;
			particle.style.animationDelay = `${Math.random() * 5}s`;
			document.body.appendChild(particle);
		};

		for (let i = 0; i < 15; i++) {
			createParticle();
		}
	}, []);

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

	return (
		<div className="min-vh-100">
			<TodoNav />
			<AddTodo onNewTodo={addNewTodo} />
			<TodoItems todos={todos} onDeleteItem={deleteTodo} />
		</div>
	)
}

export default App