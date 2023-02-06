import React from "react";

import { RiExternalLinkLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

import "./index.css";

function Project(props: any) {
	return (
		<div className="project-view">
			<a
				href={props.projectLink || props.codeLink}
				target="_blank"
				rel="noreferrer"
			>
				<img
					src={props.image}
					alt={props.title}
					className="project-image"
				/>
			</a>
			<div className="project-info">
				<h2 className="project-title">{props.title}</h2>
				<div className="project-description">{props.children}</div>
				<span className="project-links">
					{props.links.map((link: any, i: number) => (
						<span key={`s${i}`}>
							<a
								href={link.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								{link.name}
							</a>

							{props.links.length - 1 !== i && (
								<span className="link-bullet">•</span>
							)}
						</span>
					))}
				</span>

				<span className="project-out-links">
					{props.codeLink && (
						<a
							href={props.codeLink}
							target="_blank"
							rel="noopener noreferrer"
							className="project-link"
						>
							<BsCodeSlash className="project-link" />
						</a>
					)}
					{props.projectLink && (
						<span>
							{" "}
							<span className="link-separator"></span>
							<a
								href={props.projectLink}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link"
							>
								<RiExternalLinkLine className="project-link" />
							</a>
						</span>
					)}
				</span>
			</div>
		</div>
	);
}

export default Project;
