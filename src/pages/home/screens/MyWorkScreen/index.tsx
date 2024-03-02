import React from "react";

import "./index.css";
import Project from "./Project";

function ProjectsScreen() {
	return (
		<div className="work-section">
			<div className="work-content">
				<span>
					<h1 className="section-header work-header">Projects</h1>

					<div className="work-details">
						<Project
							image={require("../../../../assets/img/projects/darkivy.png")}
							title="DarkIvy"
							links={[
								{
									name: "VS Code",
									link: "https://code.visualstudio.com/",
								},
							]}
							projectLink="https://marketplace.visualstudio.com/items?itemName=TeakIvy.darkivy"
							codeLink="https://github.com/teakivy/DarkIvy"
						>
							<p>
								A simple VS Code purple theme avaliable on the{" "}
								<a
									href="https://marketplace.visualstudio.com/items?itemName=TeakIvy.darkivy"
									target="_blank"
									rel="noreferrer"
									className="purple-text link hover-underline-animation"
								>
									Visual Studio Marketplace
								</a>
								.
							</p>
						</Project>

						<Project
							title="TypeScript OS"
							image={require("../../../../assets/img/projects/tsos.png")}
							links={[
								{
									name: "TypeScript",
									link: "https://www.typescriptlang.org/",
								},
								{
									name: "React",
									link: "https://reactjs.org/",
								},
								{
									name: "Electron",
									link: "https://www.electronjs.org/",
								},
								{
									name: "NodeJS",
									link: "https://nodejs.org/",
								},
							]}
							codeLink="https://github.com/teakivy/TSOS"
						>
							<p>
								A simple DOS-like faux operating system
								(terminal) written in TypeScript.
							</p>
						</Project>

						<Project
							image={require("../../../../assets/img/projects/teakstweaks.png")}
							title={"Teak's Tweaks"}
							links={[
								{
									name: "Spigot API",
									link: "https://hub.spigotmc.org/javadocs/bukkit/",
								},
								{
									name: "Maven",
									link: "https://maven.apache.org/",
								},
								{ name: "Java", link: "https://www.java.com/" },
							]}
							projectLink="http://teakstweaks.com/"
							codeLink="https://github.com/teakivy/teaks-tweaks"
						>
							<p>
								The popular{" "}
								<a
									href="https://vanillatweaks.net/"
									target="_blank"
									rel="noreferrer"
									className="purple-text link hover-underline-animation"
								>
									Vanilla Tweaks
								</a>{" "}
								Datapacks, in Minecraft Plugin form.
							</p>
						</Project>

						<Project
							title="TwistMC.Net"
							image={require("../../../../assets/img/projects/twistmc.png")}
							links={[
								{
									name: "Java",
									link: "https://www.java.com/",
								},
								{
									name: "Maven",
									link: "https://maven.apache.org/",
								},
								{
									name: "Git",
									link: "https://git-scm.com/",
								},
								{
									name: "Spigot API",
									link: "https://www.spigotmc.org/",
								},
							]}
							projectLink="https://twistmc.net/"
							codeLink="https://github.com/TwistMC-Development"
						>
							<p>
								{"[Core Developer] "}A clone of{" "}
								<a
									href="https://hypixel.net"
									target="_blank"
									rel="noreferrer"
									className="purple-text link hover-underline-animation"
								>
									Hypixel Bedwars
								</a>{" "}
								with a twist.
							</p>
						</Project>
						<Project
							image={require("../../../../assets/img/projects/pai.png")}
							title="Pixel Art Image"
							links={[
								{ name: "NodeJS", link: "https://nodejs.org/" },
								{
									name: "TypeScript",
									link: "https://www.typescriptlang.org/",
								},
							]}
							projectLink="https://www.npmjs.com/package/pai-converter"
						>
							<p>
								A custom image format for pixel art.
								Consistantly smaller file sizes than PNG.
							</p>
						</Project>

						<Project
							title="JSAL Higher Lower"
							image={require("../../../../assets/img/projects/jsalhigherlower.png")}
							links={[
								{
									name: "TypeScript",
									link: "https://www.typescriptlang.org/",
								},
								{
									name: "React",
									link: "https://reactjs.org/",
								},
								{
									name: "NodeJS",
									link: "https://nodejs.org/",
								},
							]}
							projectLink="https://jsalhigherlower.teakivy.com/"
							codeLink="https://github.com/teakivy/jsalhigherlower"
						>
							<p>
								A clone of the popular{" "}
								<a
									href="https://higherlowergame.com/"
									target="_blank"
									rel="noreferrer"
									className="purple-text link hover-underline-animation"
								>
									Higher or Lower
								</a>{" "}
								game, written for JackSucksAtLife.
							</p>
						</Project>
					</div>
				</span>
			</div>
		</div>
	);
}

export default ProjectsScreen;
