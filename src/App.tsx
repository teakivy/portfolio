import React from 'react';
import './App.css';
import Header from './screens/Header';
import StarterScreen from './screens/StarterScreen';

import Particles from 'react-tsparticles';
import SideLinks from './screens/SideLinks';
import ToAbout from './screens/ToAbout';
import AboutScreen from './screens/AboutScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import MyWorkScreen from './screens/MyWorkScreen';

function App() {
	return (
		<div className='App'>
			<Particles
				id='tsparticles'
				options={{
					fpsLimit: 30,
					interactivity: {
						detect_on: 'canvas',
						events: {
							onclick: { enable: true, mode: 'push' },
							onhover: {
								enable: true,
								mode: 'attract',
								parallax: { enable: false, force: 10, smooth: 10 },
							},
							resize: true,
						},
						modes: {
							push: { quantity: 4 },
							attract: { distance: 200, duration: 0.4, factor: 5 },
						},
					},
					particles: {
						color: { value: '#b075eb' },
						line_linked: {
							color: '#ffffff',
							distance: 150,
							enable: true,
							opacity: 0.02,
							width: 1,
						},
						move: {
							attract: { enable: false, rotateX: 600, rotateY: 1200 },
							bounce: true,
							direction: 'none',
							enable: true,
							out_mode: 'out',
							random: true,
							speed: 2,
							straight: false,
						},
						number: { density: { enable: true, value_area: 9000 }, value: 80 },
						opacity: {
							anim: { enable: false, opacity_min: 0.01, speed: 1, sync: false },
							random: true,
							value: 0.05,
						},
						shape: {
							character: {
								fill: false,
								font: 'Verdana',
								style: '',
								value: '*',
								weight: '400',
							},
							polygon: { nb_sides: 5 },
							stroke: { color: '#b075eb6f', width: 0 },
							type: 'circle',
						},
						size: {
							anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
							random: true,
							value: 5,
						},
					},
					polygon: {
						draw: { enable: false, lineColor: '#ffffff', lineWidth: 0.5 },
						move: { radius: 10 },
						scale: 1,
						url: '',
					},
					detectRetina: true,
				}}
			/>
			<div className='header-screen'>
				<Header />
			</div>
			<div className='center-screen'>
				<StarterScreen />
			</div>
			<div className='to-about-screen'>
				<ToAbout />
			</div>

			<div className='about-screen' id='about-screen'>
				<AboutScreen />
			</div>
			<div className='experience-screen' id='experience-screen'>
				<ExperienceScreen />
			</div>
			<div className='my-work-screen' id='my-work-screen'>
				<MyWorkScreen />
			</div>
			<div className='side-links-screen'>
				<SideLinks />
			</div>
		</div>
	);
}

export default App;
