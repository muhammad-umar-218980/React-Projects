import TodoItem from "./TodoItem"

function TodoItems({ todos, onDeleteItem }) {
	return (
		<div className="container mb-5">
			{todos.map((todo, index) => (
				<>
				<TodoItem
					key={index}
					itemName={todo.itemName}
					dueDate={todo.dueDate}
					onDeleteItem={onDeleteItem}
				/> &nbsp;
				</>
			))}
		</div>
	);
}

export default TodoItems;