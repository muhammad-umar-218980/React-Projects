import styles from './Contact.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function Contact() {
	return (
		<section id="contact" className={styles.contactContainer}>
			<div className="container">
				<SectionHeader
					title="Get In Touch"
					subtitle="Feel free to reach out for collaborations or just a friendly hello"
				/>

				<div className="row">
					<div className="col-lg-8 mx-auto">
						<div className={styles.contactCard}>
							<div className="row">
								<div className="col-md-6">
									<form className={styles.contactForm}>
										<div className="mb-3">
											<label htmlFor="name" className="form-label">Name</label>
											<input
												type="text"
												className={`form-control ${styles.formInput}`}
												id="name"
												placeholder="Your name"
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="email" className="form-label">Email</label>
											<input
												type="email"
												className={`form-control ${styles.formInput}`}
												id="email"
												placeholder="your.email@example.com"
											/>
										</div>
										<div className="mb-3">
											<label htmlFor="message" className="form-label">Message</label>
											<textarea
												className={`form-control ${styles.formInput}`}
												id="message"
												rows="4"
												placeholder="Your message..."
											></textarea>
										</div>
										<button type="button" className={`btn ${styles.submitBtn}`}>
											Send Message
										</button>
									</form>
								</div>

								<div className="col-md-6">
									<div className={styles.contactInfo}>
										<h4 className={styles.infoTitle}>Direct Contact</h4>
										<div className={styles.contactItems}>
											<a href="mailto:placeholder@example.com" className={styles.contactItem}>
												<span className={styles.contactIcon}>📧</span>
												<span>placeholder@example.com</span>
											</a>
											<a href="https://linkedin.com/in/placeholder" className={styles.contactItem}>
												<span className={styles.contactIcon}>💼</span>
												<span>LinkedIn Profile</span>
											</a>
											<a href="https://github.com/placeholder" className={styles.contactItem}>
												<span className={styles.contactIcon}>🐙</span>
												<span>GitHub Profile</span>
											</a>
											<a href="https://leetcode.com/placeholder" className={styles.contactItem}>
												<span className={styles.contactIcon}>⚡</span>
												<span>LeetCode Profile</span>
											</a>
										</div>
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

export default Contact;