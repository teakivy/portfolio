import React from 'react';

import './index.css';

function AboutScreen() {
	return (
		<div className='about-section'>
			<div className='about-content'>
				<span>
					<h1 className='section-header about-header'>About Me</h1>
					<p className='about-me'>
						Hello! My name is Teak! I create simple products for everyone. From Websites, and Apps, to Minecraft Plugins and
						Discord Bots. <br />
						<br />
						Since I started learning Programming in Early 2018, I've touched almost everything in sight. Near the start of 2020, I
						began taking programming, and development seriously. Taking courses, creating projects, and (mainly) teaching myself.
					</p>
				</span>

				<span>
					<img src={require('../../assets/img/Logo_512x512.jpg')} alt='Logo' className='about-img' />
				</span>
			</div>
		</div>
	);
}

export default AboutScreen;
