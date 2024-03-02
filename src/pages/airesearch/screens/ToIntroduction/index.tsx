import { AiOutlineArrowDown } from 'react-icons/ai';

import { Link } from 'react-scroll';

import './index.css';

function ToIntroduction() {
	return (
		<Link to='introduction-screen' smooth={true} duration={600}>
			<div className='to-introduction'>
				<p className='to-introduction-text not-draggable'>Explore</p>
				<AiOutlineArrowDown className='to-introduction-arrow' />
			</div>
		</Link>
	);
}

export default ToIntroduction;
