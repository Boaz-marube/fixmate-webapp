import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/App.css'
import App from './App.jsx'
// e.g., in src/main.jsx or App.jsx or a global styles file

import "@fontsource/poppins/300.css"; // Light
import "@fontsource/poppins/400.css"; // Regular
import "@fontsource/poppins/500.css"; // Medium
import "@fontsource/poppins/600.css"; // Semi-Bold
import "@fontsource/poppins/700.css"; // Bold


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="font-poppins"/>
  </StrictMode>,
)
