import styles from './Projects.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import ProjectCard from '../ProjectCard/ProjectCard';

function Projects() {
	const projects = [
		{
			title: "MyAI Chatbot Clone",
			description: "Chat interface frontend built with HTML/CSS/JS integrating Gemini (UI only)",
			technologies: ["HTML", "CSS", "JavaScript", "Gemini API"],
			githubUrl: "#"
		},
		{
			title: "Todo App",
			description: "CRUD UI with React (presentational version) for task management",
			technologies: ["React", "CSS Modules", "Local Storage"],
			githubUrl: "#"
		},
		{
			title: "Portfolio Website",
			description: "This site built with React + Bootstrap + CSS Modules, dark theme",
			technologies: ["React", "Bootstrap", "CSS Modules", "Responsive"],
			githubUrl: "#"
		}
	];

	return (
		<section id="projects" className={styles.projectsContainer}>
			<div className="container">
				<SectionHeader
					title="Projects"
					subtitle="Some of the things I've built and learned from"
				/>

				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					{projects.map((project, index) => (
						<div className="col" key={index}>
							<ProjectCard project={project} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;