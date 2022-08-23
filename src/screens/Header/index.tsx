import React from 'react';
import { Link } from 'react-scroll';

import './index.css';

function Header() {
	return (
		<div className='header'>
			<div className='header-links'>
				<Link to='about-screen' smooth={true} duration={300}>
					<p className='header-element hover-underline-animation'>About Me</p>
				</Link>
				<Link to='experience-screen' smooth={true} duration={300}>
					<p className='header-element hover-underline-animation'>Experience</p>
				</Link>
				<Link to='my-work-screen' smooth={true} duration={300}>
					<p className='header-element hover-underline-animation'>My Work</p>
				</Link>
				<Link to='about-screen' smooth={true} duration={300}>
					<p className='header-element hover-underline-animation'>Contact</p>
				</Link>
			</div>
		</div>
	);
}

export default Header;
