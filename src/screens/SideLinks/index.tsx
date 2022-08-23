import React from 'react';

import './index.css';

import { FiGithub, FiMail } from 'react-icons/fi';

function SideLinks() {
	return (
		<div className='side-links'>
			<div className='line-up-elements'>
				<div>
					<a
						href='https://github.com/teakivy'
						target='_blank'
						rel='noopener noreferrer'>
						<FiGithub className='side-link-element side-link-gh' />
					</a>
				</div>
				<div>
					<a
						href='https://mail.google.com/mail/?view=cm&source=mailto&to=teakivy@gmail.com'
						target='_blank'
						rel='noopener noreferrer'>
						<FiMail className='side-link-element side-link-email' />
					</a>
				</div>
				<div className='line-up' />
			</div>
		</div>
	);
}

export default SideLinks;
