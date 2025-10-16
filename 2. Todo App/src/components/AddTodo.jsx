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
		<div className="container my-4">
			<form className="row g-3 align-items-center bg-light p-4 rounded shadow-sm" onSubmit={AddButtonClicked}>

				<div className="col-md-6">
					<input
						type="text"
						className="form-control"
						placeholder="Enter your task..."
						ref={TodoNameRef}
					/>
				</div>

				<div className="col-md-4">
					<input
						type="date"
						className="form-control"
						ref={TodoDueDateRef}
					/>
				</div>

				<div className="col-md-2 d-grid">
					<button type="submit" className="btn btn-success d-flex align-items-center justify-content-center" >
						<FiPlus className="me-2" /> Add
					</button>
				</div>

			</form>
		</div>
	);

}
export default AddTodo;