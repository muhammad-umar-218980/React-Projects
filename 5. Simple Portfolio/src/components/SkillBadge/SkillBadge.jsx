import styles from './SkillBadge.module.css';

function SkillBadge({ skill, primary = false }) {
	return (
		<div className={`${styles.skillBadge} ${primary ? styles.primary : ''}`}>
			<span className={styles.skillText}>{skill}</span>
		</div>
	);
}

export default SkillBadge;