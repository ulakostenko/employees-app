import React from 'react';
import {createRoot} from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';

import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
