function TodoNav() {
	return (
		<header className="py-4 position-relative overflow-hidden">
			<div className="container text-center position-relative">
				<div className="nav-glow-card rounded-4 p-4 position-relative">
					<h1 className="fw-bold display-5 mb-2 text-white">
						📝 My Todo App
					</h1>
					<p className="lead mb-0 text-light opacity-85">
						Stay organized, stay productive 🚀
					</p>

					{/* Gradient overlay that appears on hover */}
					<div className="nav-hover-gradient rounded-4"></div>
				</div>
			</div>
		</header>
	);
};

export default TodoNav;