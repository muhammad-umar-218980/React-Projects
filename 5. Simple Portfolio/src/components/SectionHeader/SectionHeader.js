import styles from './SectionHeader.module.css';

function SectionHeader({ title, subtitle }) {
	return (
		<div className={styles.sectionHeader}>
			<h2 className={styles.sectionTitle}>{title}</h2>
			{subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
			<div className={styles.sectionLine}></div>
		</div>
	);
}

export default SectionHeader;