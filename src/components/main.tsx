import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    {/* Wrap App with BrowserRouter and set the basename */}
    <BrowserRouter basename="/Landing-ProjecAsker">
      <App />
    </BrowserRouter>
  </StrictMode>
);
