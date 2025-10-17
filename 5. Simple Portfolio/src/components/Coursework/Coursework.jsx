import styles from './Coursework.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function Coursework() {
	const courses = [
		{
			name: "Data Structures & Algorithms",
			code: "CS-201",
			status: "current"
		},
		{
			name: "Differential Equations",
			code: "MTH-202",
			status: "current"
		},
		{
			name: "Probability & Statistics",
			code: "STA-301",
			status: "current"
		},
		{
			name: "Professional Ethics",
			code: "HUM-101",
			status: "current"
		},
		{
			name: "Academic Reading & Writing",
			code: "ENG-101",
			status: "current"
		}
	];

	return (
		<section className={styles.courseworkContainer}>
			<div className="container">
				<SectionHeader
					title="Current Coursework"
					subtitle="3rd Semester BSCS Curriculum at NED UET"
				/>

				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div className={styles.courseworkList}>
							{courses.map((course, index) => (
								<div key={index} className={styles.courseItem}>
									<div className={styles.courseInfo}>
										<h4 className={styles.courseName}>{course.name}</h4>
										<span className={styles.courseCode}>{course.code}</span>
									</div>
									<span className={`${styles.courseStatus} ${styles[course.status]}`}>
										{course.status === 'current' ? 'In Progress' : 'Completed'}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Coursework;