import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './index.css';

const rootEl = document.getElementById('root') as HTMLElement;
// kjfghjfvhj sdhsd;
const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
