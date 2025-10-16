import TodoItem from "./TodoItem"

function TodoItems({ todos, onDeleteItem }) {
	return (
		<>
			{todos.map((todo, index) => (
				<TodoItem key={index} itemName={todo.itemName} dueDate={todo.dueDate} onDeleteItem={onDeleteItem} />
			))}
		</>
	);
}

export default TodoItems;