import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// Import AOS styles
import 'aos/dist/aos.css';
import AOS from 'aos';



// Initialize AOS
AOS.init();

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
