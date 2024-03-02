import React from 'react';

import './index.css';

function IntroductionScreen() {
	return (
		<div className='introduction-section'>
			<div className='introduction-content'>
				<span>
					<span>
						<h1 className='section-header introduction-header'>Introduction</h1>
					</span>
					<p className='introduction-text'>
						Forms of Artificial Intelligence (AI) have been used in learning
						environments for years already, particularly in the use of apps such
						as{' '}
						<a
							target='_blank'
							rel='noreferrer'
							className='link purple-text hover-underline-animation'
							href='https://www.duolingo.com/'
						>
							Duolingo
						</a>{' '}
						, and{' '}
						<a
							target='_blank'
							rel='noreferrer'
							className='link purple-text hover-underline-animation'
							href='https://photomath.com/'
						>
							Photomath
						</a>{' '}
						, however there is one app that seems to have pushed the recent AI
						innovations far beyond their history. This was the introduction of
						GPT-3 through{' '}
						<a
							target='_blank'
							rel='noreferrer'
							className='link purple-text hover-underline-animation'
							href='https://chat.openai.com/'
						>
							ChatGPT
						</a>
						. ChatGPT is a website released by{' '}
						<a
							target='_blank'
							rel='noreferrer'
							className='link purple-text hover-underline-animation'
							href='https://openai.com/'
						>
							OpenAI
						</a>{' '}
						in late 2022, originally as a “demo test”, that exploded in
						popularity, gaining over 57 million users in the first month alone.
						With this product, came many improvements, and new AI tools looking
						to compete with the quickly growing market. One area that ChatGPT
						was able to use to gain traction, was with writing essays. Many
						students shared online how to make ChatGPT write an essay, or
						complete a homework assignment for them. This only grew more with
						the release of updates such as GPT-3.5 and GPT-4. These videos
						raised concerns among many as to whether it would truly
						revolutionize the educational system. How would the integration of
						AI affect students and educators?
						<br /> <br />
						To answer this question, I conducted a research survey to determine
						how the integration of AI in classrooms affects students and
						educators, and how the general public feels about the way AI is
						currently being used in the educational system. The survey was
						conducted over a period of 3 weeks, and included 145 participants,
						including 70 students, 26 educators, and 49 members of the general
						public.
						<br /> <br />
						If you would like to view the survey, please click the button below.
					</p>
				</span>
				<br></br>
				<button
					className='email-button'
					onClick={() => {
						const win = window.open(
							'https://docs.google.com/forms/d/e/1FAIpQLSeLZnVzatYclu8fS2ywAfiZfyTMzPP0L7JWl2M-ODjaoz8xsg/viewform?usp=sf_link',
							'_blank'
						);
						if (win) {
							win.focus();
						}
					}}
				>
					Take the Survey
				</button>
			</div>
		</div>
	);
}

export default IntroductionScreen;
