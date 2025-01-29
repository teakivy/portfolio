import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';

// Font Imports
import './assets/fonts/Eina01-Regular.ttf';
import './assets/fonts/Eina01-RegularItalic.ttf';
import './assets/fonts/Eina01-SemiBold.ttf';
import './assets/fonts/Eina01-SemiboldItalic.ttf';
import './assets/fonts/Eina01-Light.ttf';
import './assets/fonts/Eina01-LightItalic.ttf';
import './assets/fonts/Eina01-Bold.ttf';
import './assets/fonts/Eina01-BoldItalic.ttf';
import { Router, Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Research from './pages/airesearch/Research';
import CountyCollectorPrivacy from './pages/countycollector/CountyCollectorPrivacy';
import CountyCollectorTerms from './pages/countycollector/CountyCollectorTerms';
import Contact from './pages/countycollector/CountyCollectorContact';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<App />}
                />
                <Route
                    path='/home'
                    element={<App />}
                />
                <Route
                    path='/ai_research'
                    element={<Research />}
                />
                <Route
                    path='/airesearch'
                    element={<Research />}
                />
                <Route
                    path='/research'
                    element={<Research />}
                />
                <Route
                    path='/countycollector/privacy'
                    element={<CountyCollectorPrivacy />}
                />
                <Route
                    path='/countycollector/terms'
                    element={<CountyCollectorTerms />}
                />
                <Route
                    path='/countycollector/contact'
                    element={<Contact />}
                />
                <Route
                    path='*'
                    element={<App />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
