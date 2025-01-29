import React from 'react';

import './index.css';

function IntroductionScreen() {
    return (
        <div className='introduction-section'>
            <div className='introduction-content'>
                <span>
                    <span>
                        <h1 className='section-header introduction-header'>
                            Contact Me
                        </h1>
                    </span>
                    <p className='introduction-text'>
                        If you have any questions or suggestions, please feel
                        free to contact me at:
                        <div className='contact-details'>
                            <button
                                className='email-button'
                                onClick={() => {
                                    window.location.href =
                                        'mailto:collinj2055@gmail.com';
                                }}>
                                collinj2055@gmail.com
                            </button>
                        </div>
                    </p>
                </span>
            </div>
        </div>
    );
}

export default IntroductionScreen;
