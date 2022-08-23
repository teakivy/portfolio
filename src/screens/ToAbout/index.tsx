import { AiOutlineArrowDown } from 'react-icons/ai';

import { Link } from 'react-scroll';

import './index.css';

function ToAbout() {
	return (
		<Link to='about-screen' smooth={true} duration={600}>
			<div className='to-about'>
				<p className='to-about-text not-draggable'>About Me</p>
				<AiOutlineArrowDown className='to-about-arrow' />
			</div>
		</Link>
	);
}

export default ToAbout;
