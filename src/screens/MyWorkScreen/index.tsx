import React from "react";

import "./index.css";
import LeftProjectView from "./LeftProjectView";
import RightProjectView from "./RightProjectView";

function MyWorkScreen() {
	return (
		<div className="work-section">
			<div className="work-content">
				<span>
					<h1 className="section-header work-header">My Work</h1>
					<span className="project-display-one">
						<LeftProjectView
							image={require("../../assets/img/projects/darkivy.png")}
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
						</LeftProjectView>
					</span>
					<span className="project-display-two">
						<RightProjectView
							image={require("../../assets/img/projects/pai.png")}
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
							<p>A custom image format for pixel art</p>
						</RightProjectView>
					</span>
					<span className="project-display-three">
						<LeftProjectView
							image={require("../../assets/img/projects/teakstweaks.png")}
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
							projectLink="https://www.spigotmc.org/resources/teaks-tweaks-1-17-1-18.94021/"
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
						</LeftProjectView>
					</span>
					<span className="project-display-four">
						<RightProjectView
							image={require("../../assets/img/projects/pai.png")}
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
							<p>A custom image format for pixel art</p>
						</RightProjectView>
					</span>
				</span>
			</div>
		</div>
	);
}

export default MyWorkScreen;
