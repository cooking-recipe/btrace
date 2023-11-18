import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app';

import '@vkontakte/vkui/dist/vkui.css';
import './index.scss';

// import('./erud').then((r) => r);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(<App />);