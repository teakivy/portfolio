import React from "react";

import "./index.css";

function ExperienceScreen() {
	return (
		<div className="experience-section">
			<div className="experience-content">
				<span>
					<h1 className="section-header experience-header">
						Experience
					</h1>
					<p className="experience-details">
						Here's some of my recent Languages & Frameworks:
					</p>
					<br />
					<span className="experience-list-section">
						<p className="experience-list">
							-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.typescriptlang.org/"
								className="experience-list-item hover-underline-animation"
							>
								TypeScript
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.javascript.com/"
								className="experience-list-item hover-underline-animation"
							>
								JavaScript
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://nodejs.org/"
								className="experience-list-item hover-underline-animation"
							>
								NodeJS
							</a>
						</p>
						<p className="experience-list">
							-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.w3schools.com/html/default.asp"
								className="experience-list-item hover-underline-animation"
							>
								HTML / CSS
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.java.com/"
								className="experience-list-item hover-underline-animation"
							>
								Java
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://cplusplus.com/"
								className="experience-list-item hover-underline-animation"
							>
								C / C++
							</a>
						</p>
						<p className="experience-list">
							-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://reactjs.org/"
								className="experience-list-item hover-underline-animation"
							>
								ReactJS / React Native
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://python.org/"
								className="experience-list-item hover-underline-animation"
							>
								Python
							</a>
							<br />-{" "}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://git-scm.com/"
								className="experience-list-item hover-underline-animation"
							>
								Git
							</a>
						</p>
					</span>
				</span>
			</div>
		</div>
	);
}

export default ExperienceScreen;
