import styles from './Certifications.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function Certifications() {
	const certifications = [
		{
			title: "IBM Applied AI Professional Certificate",
			provider: "IBM via Coursera",
			courses: 5,
			status: "completed"
		},
		{
			title: "Introduction to Artificial Intelligence",
			provider: "IBM",
			courses: 1,
			status: "completed"
		},
		{
			title: "Python for Data Science and AI",
			provider: "IBM",
			courses: 1,
			status: "completed"
		}
	];

	return (
		<section className={styles.certificationsContainer}>
			<div className="container">
				<SectionHeader
					title="Certifications"
					subtitle="Professional credentials and completed courses"
				/>

				<div className="row row-cols-1 row-cols-md-3 g-4">
					{certifications.map((cert, index) => (
						<div className="col" key={index}>
							<div className={styles.certCard}>
								<div className={styles.certHeader}>
									<h4 className={styles.certTitle}>{cert.title}</h4>
									{cert.status === "completed" && (
										<span className={styles.completedBadge} aria-label="completed">
											✓
										</span>
									)}
								</div>
								<div className={styles.certMeta}>
									<span className={styles.provider}>{cert.provider}</span>
									<span className={styles.courses}>{cert.courses} course{cert.courses > 1 ? 's' : ''}</span>
								</div>
								<button className={styles.viewCertBtn}>
									View Certificate
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Certifications;