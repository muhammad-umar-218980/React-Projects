import { useRef } from "react";
import { FiPlus } from "react-icons/fi";

const AddTodo = (props) => {
	const TodoNameRef = useRef(null);
	const TodoDueDateRef = useRef(null);

	const AddButtonClicked = (event) => {
		event.preventDefault();
		console.log("Add button clicked", event);

		const newTodoItem = TodoNameRef.current?.value;
		const newTodoDueDate = TodoDueDateRef.current?.value;

		if (newTodoItem && newTodoDueDate) {
			props.onNewTodo(newTodoItem, newTodoDueDate);

			if (TodoNameRef.current) TodoNameRef.current.value = '';
			if (TodoDueDateRef.current) TodoDueDateRef.current.value = '';
		} else {
			alert("Please enter both a todo name and a due date.");
		}
	}

	return (
		<div className="container my-5">
			<form className="row g-3 align-items-center add-todo-form glow-border rounded-4 p-4" onSubmit={AddButtonClicked}>
				<div className="col-md-6">
					<input
						type="text"
						className="form-control form-control-dark rounded-3 py-2"
						placeholder="Enter your task..."
						ref={TodoNameRef}
					/>
				</div>

				<div className="col-md-4">
					<input
						type="date"
						className="form-control form-control-dark rounded-3 py-2"
						ref={TodoDueDateRef}
					/>
				</div>

				<div className="col-md-2 d-grid">
					<button type="submit" className="btn btn-glow rounded-3 py-2 d-flex align-items-center justify-content-center">
						<FiPlus className="me-2" /> Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddTodo;