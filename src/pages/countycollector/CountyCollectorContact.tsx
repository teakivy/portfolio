import React from 'react';
import './Research.css';
import StarterScreen from './screens/ContactStarterScreen';

import Particles from 'react-tsparticles';
import ToIntroduction from './screens/ToContact';
import TermsScreen from './screens/Contact';
import FooterScreen from './screens/FooterScreen';

function Research() {
    return (
        <div className='Research'>
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
                                parallax: {
                                    enable: false,
                                    force: 10,
                                    smooth: 10,
                                },
                            },
                            resize: true,
                        },
                        modes: {
                            push: { quantity: 4 },
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                factor: 5,
                            },
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
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                            bounce: true,
                            direction: 'none',
                            enable: true,
                            out_mode: 'out',
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: { enable: true, value_area: 9000 },
                            value: 80,
                        },
                        opacity: {
                            anim: {
                                enable: false,
                                opacity_min: 0.01,
                                speed: 1,
                                sync: false,
                            },
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
                            anim: {
                                enable: false,
                                size_min: 0.1,
                                speed: 40,
                                sync: false,
                            },
                            random: true,
                            value: 5,
                        },
                    },
                    polygon: {
                        draw: {
                            enable: false,
                            lineColor: '#ffffff',
                            lineWidth: 0.5,
                        },
                        move: { radius: 10 },
                        scale: 1,
                        url: '',
                    },
                    detectRetina: true,
                }}
            />
            <div className='center-screen'>
                <StarterScreen />
            </div>
            <div className='to-introduction-screen'>
                <ToIntroduction />
            </div>

            <div
                className='introduction-screen'
                id='introduction-screen'>
                <TermsScreen />
            </div>

            <div className='footer-screen'>
                <FooterScreen />
            </div>
        </div>
    );
}

export default Research;
