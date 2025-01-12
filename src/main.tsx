import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavLink, Link } from 'react-router'

import './index.css'
import App from './App.tsx'
import Dashboard from './components/Dashboard.tsx'
import Register from './components/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={
          
              <Dashboard />
          
            }>
          </Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
