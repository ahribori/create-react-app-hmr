import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {AppContainer} from 'react-hot-loader';

const rootEl = document.getElementById('root');

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // eslint-disable-line global-require
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    });
}