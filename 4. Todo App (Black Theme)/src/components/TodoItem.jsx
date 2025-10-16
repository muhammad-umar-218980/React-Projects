// import { FiTrash2 } from "react-icons/fi";

// function TodoItem({ itemName, dueDate, onDeleteItem }) {
// 	const handleDelete = () => {
// 		onDeleteItem(itemName);
// 	};

// 	return (
// 		<div className="container my-3">
// 			<div className="row g-3 align-items-center todo-item-card glow-border rounded-4 p-3 transition-all">
// 				<div className="col-md-6">
// 					<p className="mb-0 text-light fs-6">{itemName}</p>
// 				</div>

// 				<div className="col-md-4">
// 					<p className="mb-0 text-light opacity-85 fs-6">{dueDate}</p>
// 				</div>

// 				<div className="col-md-2 d-grid">
// 					<button className="btn btn-glow rounded-3 py-2 d-flex align-items-center justify-content-center" onClick={handleDelete}>
// 						<FiTrash2 className="me-2" /> Delete
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default TodoItem;






import { FiTrash2 } from "react-icons/fi";

function TodoItem({ itemName, dueDate, onDeleteItem, index }) {
	const handleDelete = () => {
		onDeleteItem(itemName);
	};

	return (
		<div className="container my-3">
			<div className={`row g-3 align-items-center todo-item-card glow-border rounded-4 p-3 transition-all todo-item-${index % 3}`}>
				<div className="col-md-6">
					<p className="mb-0 text-light fs-6">{itemName}</p>
				</div>

				<div className="col-md-4">
					<p className="mb-0 text-light opacity-85 fs-6">{dueDate}</p>
				</div>

				<div className="col-md-2 d-grid">
					<button className="btn btn-glow rounded-3 py-2 d-flex align-items-center justify-content-center" onClick={handleDelete}>
						<FiTrash2 className="me-2" /> Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;