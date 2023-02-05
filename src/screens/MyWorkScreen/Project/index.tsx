import React from "react";

import { RiExternalLinkLine } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";

import "./index.css";

function Project(props: any) {
	return (
		<div className="project-view">
			<a href={props.projectLink} target="_blank" rel="noreferrer">
				<img
					src={props.image}
					alt={props.title}
					className="project-image"
				/>
			</a>
		</div>
	);
}

export default Project;
