import styles from './About.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function About() {
	return (
		<section id="about" className={styles.aboutContainer}>
			<div className="container">
				<SectionHeader
					title="About Me"
					subtitle="Get to know more about my background and interests"
				/>

				<div className="row align-items-center">
					<div className="col-md-4 text-center mb-4 mb-md-0">
						<div className={styles.avatarWrapper}>
							<div className={styles.avatar}>
								MU
							</div>
							<div className={styles.avatarGlow}></div>
						</div>
					</div>

					<div className="col-md-8">
						<div className={styles.bioContent}>
							<p className={styles.bioText}>
								I am an 18-year-old BSCS student at NED University of Engineering & Technology (CSIT),
								currently in the 3rd semester. Passionate about creating digital solutions that make a difference.
							</p>

							<div className={styles.bioList}>
								<div className={styles.bioItem}>
									<span className={styles.bioIcon}>🎓</span>
									<div>
										<strong>BSCS (2024–2028)</strong>
										<br />
										<span className={styles.muted}>NED University of Engineering & Technology</span>
									</div>
								</div>

								<div className={styles.bioItem}>
									<span className={styles.bioIcon}>📍</span>
									<div>
										<strong>Based in</strong>
										<br />
										<span className={styles.muted}>Karachi, Pakistan</span>
									</div>
								</div>

								<div className={styles.bioItem}>
									<span className={styles.bioIcon}>💼</span>
									<div>
										<strong>Focus Areas</strong>
										<br />
										<span className={styles.muted}>Web Development, AI, Algorithms</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;