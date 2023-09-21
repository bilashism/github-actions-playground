import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

import './index.css';

export type Hello = 'Hello';

// export const Bye: Hello = 'kjhsdg';

const rootEl = document.getElementById('root') as HTMLElement;

// fghjkf;

const root = createRoot(rootEl);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
