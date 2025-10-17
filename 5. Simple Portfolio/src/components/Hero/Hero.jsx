import styles from './Hero.module.css';
import LeetCodeSummary from '../LeetCodeSummary/LeetCodeSummary';

function Hero() {
	return (
		<section id="home" className={styles.heroContainer}>
			<div className="container">
				<div className="row align-items-center min-vh-100">
					<div className="col-lg-7">
						<h1 className={styles.heroTitle}>
							Hi — I'm <span className={styles.nameHighlight}>Muhammad Umar</span>
						</h1>
						<h2 className={styles.heroSubtitle}>
							CSIT Student at NED • Web Developer • AI Enthusiast
						</h2>
						<p className={styles.heroBio}>
							I build clean, minimal web interfaces and learn backend and AI; I solve algorithm problems on LeetCode to improve problem-solving skills.
						</p>

						<div className={styles.heroCtas}>
							<a href="#projects" className={`btn ${styles.ctaPrimary}`}>
								View Projects
							</a>
							<a href="#contact" className={`btn ${styles.ctaSecondary}`}>
								Contact Me
							</a>
						</div>

						<div className="mt-4">
							<LeetCodeSummary />
						</div>
					</div>

					<div className="col-lg-5">
						<div className={styles.heroVisual}>
							<div className={styles.avatarPlaceholder}>
								MU
							</div>
							<div className={styles.floatingElements}>
								<div className={styles.floatingElement1}></div>
								<div className={styles.floatingElement2}></div>
								<div className={styles.floatingElement3}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;