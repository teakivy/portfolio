import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
