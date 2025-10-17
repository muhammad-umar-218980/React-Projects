import styles from './LC.module.css';

function LC() {
	return (
		<div className={styles.leetcodeCard}>
			<div className={styles.leetcodeIcon}>⚡</div>
			<div className={styles.leetcodeContent}>
				<div className={styles.leetcodeStat}>130+ LeetCode Problems Solved</div>
				<div className={styles.leetcodeTags}>
					<span className={styles.tag}>Arrays</span>
					<span className={styles.tag}>Trees</span>
					<span className={styles.tag}>Recursion</span>
				</div>
			</div>
		</div>
	);
}

export default LC;