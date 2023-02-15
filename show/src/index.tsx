import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

if (location.pathname == '/secret') {
    document.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

createRoot(document.querySelector('#root')).render(<App />);
