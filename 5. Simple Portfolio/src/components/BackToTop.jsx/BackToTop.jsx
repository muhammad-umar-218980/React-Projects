import styles from './BackToTop.module.css';

function BackToTop() {
	return (
		<a href="#top" className={styles.backToTop} aria-label="Back to top">
			↑
		</a>
	);
}

export default BackToTop;