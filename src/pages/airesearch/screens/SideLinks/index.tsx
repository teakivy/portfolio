import React from 'react';

import './index.css';

import { FiMail } from 'react-icons/fi';
import { RiSurveyLine } from 'react-icons/ri';
import { IoNewspaperOutline } from 'react-icons/io5';
import { Tooltip } from '@mui/material';

function SideLinks() {
	return (
		<div className='side-links'>
			<div className='line-up-elements'>
				<Tooltip
					title='Read the Research Proposal'
					arrow
					placement='right-start'
				>
					<div>
						<a
							href='https://drive.google.com/file/d/1cuczMOD_AiEZDjWmoypMbB57C4rmMS58/view?usp=drive_link'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IoNewspaperOutline className='side-link-element side-link-gh' />
						</a>
					</div>
				</Tooltip>
				<Tooltip title='Take the Survey' arrow placement='right-start'>
					<div>
						<a
							href='https://docs.google.com/forms/d/e/1FAIpQLSeLZnVzatYclu8fS2ywAfiZfyTMzPP0L7JWl2M-ODjaoz8xsg/viewform?usp=sf_link'
							target='_blank'
							rel='noopener noreferrer'
						>
							<RiSurveyLine className='side-link-element side-link-linkedin' />
						</a>
					</div>
				</Tooltip>
				<Tooltip
					title='Email Me (collinj2055@gmail.com)'
					arrow
					placement='right-start'
				>
					<div>
						<a
							href='mailto:collinj2055@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FiMail className='side-link-element side-link-email' />
						</a>
					</div>
				</Tooltip>
			</div>
			{/* <div className="line-up" /> */}
		</div>
	);
}

export default SideLinks;
