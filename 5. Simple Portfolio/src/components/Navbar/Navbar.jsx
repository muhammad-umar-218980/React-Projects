import styles from './Navbar.module.css';

function Navbar() {
	return (
		<nav className={`navbar navbar-expand-lg fixed-top ${styles.navbarContainer}`}>
			<div className="container">
				<a className={`navbar-brand ${styles.brand}`} href="#home">
					Muhammad Umar
				</a>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className={styles.navbarTogglerIcon}></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<a className={`nav-link ${styles.navLink}`} href="#home">Home</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${styles.navLink}`} href="#about">About</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${styles.navLink}`} href="#skills">Skills</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${styles.navLink}`} href="#projects">Projects</a>
						</li>
						<li className="nav-item">
							<a className={`nav-link ${styles.navLink}`} href="#contact">Contact</a>
						</li>
					</ul>
					<button className={`btn ${styles.ctaButton}`} type="button">
						Chat with MyAI
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;