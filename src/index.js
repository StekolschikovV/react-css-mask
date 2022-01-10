import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TourProvider} from '@reactour/tour'

const steps = [
    {
        selector: '.first-step',
        content: 'This is my first Step',
    },
    {
        selector: '#test2',
        content: 'This is my first Step',
    },
    // ...
]

ReactDOM.render(
    <React.StrictMode>
        <TourProvider steps={steps}>

            <App/>
            {/*<h3>An SVG mask layer (formed as a triangle):</h3>*/}


            {/*<h3>Original image:</h3>*/}
            {/*<img src="https://www.w3schools.com/css/img_5terre.jpg" alt="Cinque Terre" width="600" height="400"/>*/}

        </TourProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
