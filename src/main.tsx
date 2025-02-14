import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with custom settings
AOS.init({
  duration: 800,
  once: false, // whether animation should happen only once
  easing: 'ease-out-cubic',
  mirror: true, // whether elements should animate out while scrolling past them
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);