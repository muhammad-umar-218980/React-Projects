import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6">
						<p className={styles.copyright}>
							© 2025 Muhammad Umar. All rights reserved.
						</p>
					</div>
					<div className="col-md-6">
						<div className={styles.footerLinks}>
							<a href="#privacy" className={styles.footerLink}>Privacy</a>
							<a href="https://github.com/placeholder" className={styles.footerLink}>GitHub</a>
							<a href="#top" className={styles.footerLink}>Back to Top</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;