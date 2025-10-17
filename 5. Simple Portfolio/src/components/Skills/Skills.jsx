import styles from './Skills.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import SkillBadge from '../SkillBadge/SkillBadge';

function Skills() {
	const skills = {
		languages: ['C++', 'Python', 'JavaScript', 'HTML/CSS', 'SQL'],
		frameworks: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Git'],
		tools: ['VS Code', 'GitHub', 'LeetCode', 'Figma', 'MongoDB']
	};

	return (
		<section id="skills" className={styles.skillsContainer}>
			<div className="container">
				<SectionHeader
					title="Skills & Technologies"
					subtitle="Tools and technologies I work with"
				/>

				<div className="row g-4">
					<div className="col-md-4">
						<div className={styles.skillCategory}>
							<h3 className={styles.categoryTitle}>Programming Languages</h3>
							<div className="row row-cols-2 g-2">
								{skills.languages.map((skill, index) => (
									<div className="col" key={index}>
										<SkillBadge skill={skill} primary={index < 2} />
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className={styles.skillCategory}>
							<h3 className={styles.categoryTitle}>Web & Frameworks</h3>
							<div className="row row-cols-2 g-2">
								{skills.frameworks.map((skill, index) => (
									<div className="col" key={index}>
										<SkillBadge skill={skill} primary={index < 2} />
									</div>
								))}
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className={styles.skillCategory}>
							<h3 className={styles.categoryTitle}>Tools & Platforms</h3>
							<div className="row row-cols-2 g-2">
								{skills.tools.map((skill, index) => (
									<div className="col" key={index}>
										<SkillBadge skill={skill} primary={index < 2} />
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.learningSection}>
					<h4 className={styles.learningTitle}>Currently Learning</h4>
					<div className="d-flex flex-wrap gap-2 justify-content-center">
						<span className={styles.learningBadge}>React.js</span>
						<span className={styles.learningBadge}>Node.js & Express</span>
						<span className={styles.learningBadge}>AI/ML Fundamentals</span>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;