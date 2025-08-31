import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { NavLink, Link } from 'react-router';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css'
import App from './App.tsx'
import Dashboard from './components/Dashboard.tsx'
import Register from './components/Register.tsx'
import Login from './components/LoginButton.tsx'
import Logout from './components/LogoutButton.tsx'
import Profile from './components/Profile.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
              <Auth0Provider 
                domain="dev-t1y3qi7wi4pzdgwr.us.auth0.com"
                clientId="db6aZURqbKbOjYc3DzUkcekTqJRgRR52"
                authorizationParams={{
                  redirect_uri: "http://localhost:5173/dashboard"
                }}

                
                >
              <Routes>
        
         <Route path="/" element={
           
           <Login />
           
           }>


         </Route>

         <Route path="/dashboard" element={
              <Profile />
  
              
          }>


          </Route>

         <Route path="/logout" element={
              <Logout />
              
          }>


         </Route>
       
     </Routes>


                </Auth0Provider>




    </BrowserRouter>
  </StrictMode>,
)
