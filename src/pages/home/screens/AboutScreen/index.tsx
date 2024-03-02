import React from "react";

import "./index.css";

function AboutScreen() {
	return (
		<div className="about-section">
			<div className="about-content">
				<span>
					<span>
						<h1 className="section-header about-header">
							About Me
						</h1>
					</span>
					<span>
						<img
							src={require("../../../../assets/img/self.png")}
							alt="Logo"
							className="about-img-mobile"
						/>
					</span>
					<p className="about-me">
						Hello! My name is Collin Jones! I create simple products
						for everyone. From Websites, and Apps, to Game Plugins
						and Software Tools. <br />
						<br />
						Since I started learning Programming in Early 2018, I've
						touched almost everything in sight. Near the start of
						2020, I began taking programming, and development
						seriously. Taking courses, creating projects, working,
						and (mainly) teaching myself.
					</p>
				</span>

				<span className="about-img-container">
					<img
						src={require("../../../../assets/img/self.png")}
						alt="Logo"
						className="about-img"
					/>
				</span>
			</div>
		</div>
	);
}

export default AboutScreen;
