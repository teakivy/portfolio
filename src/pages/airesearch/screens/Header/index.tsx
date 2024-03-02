import React from 'react';
import { Link } from 'react-scroll';

import { GiHamburgerMenu } from 'react-icons/gi';

import './index.css';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Header() {
	const toggleDropdown = () => {
		const headerMobileDropdown = document.querySelector(
			'.header-mobile-dropdown'
		);

		if (headerMobileDropdown) {
			headerMobileDropdown.classList.toggle('header-mobile-dropdown-active');
		}
	};

	return (
		<div className='header'>
			<a href='/'>
				<img
					src={require('../../../../assets/img/Teak_Hampster_Large.png')}
					alt='Logo'
					className='logo-title-mobile not-draggable light-box-shadow'
					onDragStart={(e) => e.preventDefault()}
				/>
			</a>
			<div className='header-mobile'>
				<div className='header-mobile-title'>Collin Jones</div>

				<div className='header-mobile-hamburger' onClick={toggleDropdown}>
					<GiHamburgerMenu className='hamburger-icon' />
				</div>
				<div className='header-mobile-dropdown'>
					<div className='header-mobile-backdrop' onClick={toggleDropdown} />

					<div className='header-mobile-links'>
						<Link
							to='introduction-screen'
							smooth={true}
							duration={300}
							offset={-30}
							onClick={toggleDropdown}
						>
							<p className='header-mobile-element'>Introduction</p>
						</Link>
						<Link
							to='results-screen'
							smooth={true}
							duration={300}
							offset={-30}
							onClick={toggleDropdown}
						>
							<p className='header-mobile-element hover-underline-animation'>
								Results
							</p>
						</Link>
						<Link
							to='projects-screen'
							smooth={true}
							duration={300}
							offset={-30}
							onClick={toggleDropdown}
						>
							<p className='header-mobile-element hover-underline-animation'>
								Analysis
							</p>
						</Link>
						<Link
							to='contact-screen'
							smooth={true}
							duration={300}
							offset={-30}
							onClick={toggleDropdown}
						>
							<p className='header-mobile-element hover-underline-animation'>
								Conclusion
							</p>
						</Link>

						<div className='header-mobile-element'>
							<span className='mobile-header-link-element'>
								<a
									href='https://github.com/teakivy'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiGithub className='side-link-element side-link-gh' />
								</a>
							</span>
							<span className='mobile-header-link-element'>
								<a
									href='https://www.linkedin.com/in/collin-jones-93a89825b/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiLinkedin className='side-link-element side-link-linkedin' />
								</a>
							</span>
							<span className='mobile-header-link-element'>
								<a
									href='mailto:collinj2055@gmail.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiMail className='side-link-element side-link-email' />
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className='header-links'>
				<Link
					to='introduction-screen'
					smooth={true}
					duration={300}
					offset={-30}
				>
					<p className='header-element hover-underline-animation'>
						Introduction
					</p>
				</Link>
				<Link to='results-screen' smooth={true} duration={300} offset={-30}>
					<p className='header-element hover-underline-animation'>Results</p>
				</Link>
				<Link to='analysis-screen' smooth={true} duration={300} offset={-30}>
					<p className='header-element hover-underline-animation'>Analysis</p>
				</Link>
				<Link to='conclusion-screen' smooth={true} duration={300} offset={-30}>
					<p className='header-element hover-underline-animation'>Conclusion</p>
				</Link>
			</div>
		</div>
	);
}

export default Header;
