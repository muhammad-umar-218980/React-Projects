import { FiTrash2 } from "react-icons/fi";

function TodoItem({ itemName, dueDate, onDeleteItem }) {
	const handleDelete = () => {
		onDeleteItem(itemName);
	};

	return (
		<div className="container my-4">
			<div className="row g-3 align-items-center bg-light p-4 rounded shadow-sm">
				<div className="col-md-6">
					<p className="form-control-static">{itemName}</p>
				</div>

				<div className="col-md-4">
					<p className="form-control-static">{dueDate}</p>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-danger d-flex align-items-center justify-content-center" onClick={handleDelete}>
						<FiTrash2 className="me-2" /> Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;