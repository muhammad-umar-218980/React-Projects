import TodoNav from './components/TodoNav'
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
	const [todos,setTodos] = useState([]);

	const addNewTodo =(newTodoItem,newTodoDueDate)=>{
		console.log(`{newTodoItem}  added with due date {newTodoDueDate}`);

		setTodos((currentItems)=>{
			return [...currentItems,{itemName:newTodoItem,dueDate:newTodoDueDate}]
		})
	}

	const deleteTodo =(itemName)=>{
		console.log(`{itemName} deleted`);

		const newItems = todos.filter((item)=>{	item.itemName !== itemName	})

		setTodos(newItems);
	}

	return <>
		<TodoNav></TodoNav>
	</>
	

}

export default App
