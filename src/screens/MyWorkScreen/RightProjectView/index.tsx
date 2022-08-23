import React from 'react';

import './index.css';

import { RiExternalLinkLine } from 'react-icons/ri';
import { BsCodeSlash } from 'react-icons/bs';

function RightProjectView(props: any) {
	return (
		<div className='right-project-view'>
			<a href={props.projectLink} target='_blank' rel='noreferrer'>
				<img src={props.image} alt={props.title} className='right-image' />
			</a>
			<h1 className='right-title'>{props.title}</h1>
			<div className='right-project-text-box'>
				<p className='right-project-text'>{props.children}</p>
			</div>
			<div className='right-project-links'>
				<a
					href={props.projectLink}
					target='_blank'
					rel='noopener noreferrer'
					className='right-project-link'>
					<RiExternalLinkLine className='right-project-link' />
				</a>
				<span className='link-bullet'>•</span>
				<a
					href={props.codeLink}
					target='_blank'
					rel='noopener noreferrer'
					className='project-link'>
					<BsCodeSlash className='project-link' />
				</a>
				{props.links.map((link: any, index: number) => (
					<span key={`sr${index}`}>
						<span className='link-bullet' key={`.r${index}`}>
							•
						</span>
						<a
							key={index}
							href={link.link}
							target='_blank'
							rel='noopener noreferrer'
							className='right-project-link'>
							{link.name}
						</a>
					</span>
				))}
			</div>
		</div>
	);
}

export default RightProjectView;
