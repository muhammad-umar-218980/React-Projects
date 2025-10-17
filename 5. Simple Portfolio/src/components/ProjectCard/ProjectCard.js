import styles from './ProjectCard.module.css';

function ProjectCard({ project }) {
	return (
		<div className={styles.projectCard}>
			<div className={styles.cardHeader}>
				<h3 className={styles.projectTitle}>{project.title}</h3>
			</div>
			<div className={styles.cardBody}>
				<p className={styles.projectDesc}>{project.description}</p>
				<div className={styles.projectBadges}>
					{project.technologies.map((tech, index) => (
						<span key={index} className={styles.techBadge}>{tech}</span>
					))}
				</div>
			</div>
			<div className={styles.cardFooter}>
				<a
					href={project.githubUrl}
					className={styles.githubLink}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${project.title} on GitHub`}
				>
					<span className={styles.githubIcon}>📂</span>
					View Code
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;