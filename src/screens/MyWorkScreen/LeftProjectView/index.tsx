import React from 'react';

import './index.css';

import { RiExternalLinkLine } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';

function LeftProjectView(props: any) {
	return (
		<div className='left-project-view'>
			<a href={props.projectLink} target='_blank' rel='noreferrer'>
				<img src={props.image} alt={props.title} className='left-image' />
			</a>
			<h1 className='left-title'>{props.title}</h1>
			<div className='left-project-text-box'>
				<p className='left-project-text'>{props.children}</p>
			</div>
			<div className='left-project-links'>
				{props.links.map((link: any, index: number) => (
					<span key={`s${index}`}>
						<a
							key={index}
							href={link.link}
							target='_blank'
							rel='noopener noreferrer'
							className='project-link'>
							{link.name}
						</a>
						<span className='link-bullet' key={`.${index}`}>
							•
						</span>
					</span>
				))}
				<a
					href={props.codeLink}
					target='_blank'
					rel='noopener noreferrer'
					className='project-link'>
					<BsCodeSlash className='project-link' />
				</a>
				<span className='link-bullet'>•</span>
				<a
					href={props.projectLink}
					target='_blank'
					rel='noopener noreferrer'
					className='project-link'>
					<RiExternalLinkLine className='project-link' />
				</a>
			</div>
		</div>
	);
}

export default LeftProjectView;
